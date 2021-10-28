import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import MessagesBar from './MessagesBar'
import RoomBarMessage from './RoomBarMessage'
import { useParams } from 'react-router-dom';
import { doc, onSnapshot, collection, orderBy, query} from "firebase/firestore";
import db from "../firebase" 

const ChatPage = () => {
    const {roomId} = useParams()
    const [roomTitle, setRoomTitle] = useState("")
    const [timestamp, setTimestamp] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "rooms", roomId), (doc) => {
            setRoomTitle(doc.data().name);
            setTimestamp(doc.data().timestamp.toDate())
        });
        return ()=> unsub()
    }, [roomId])

    useEffect(()=>{ 
        // const unsub = onSnapshot(query(collection(db, "rooms", roomId, "messages", orderBy("timestamp", "desc"))),(snapshot)=>{
        //     setMessages(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        // })
        // return ()=>unsub()

        const q = query(collection(db, "rooms", roomId, "messages"),  orderBy("timestamp", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        });
        return () => unsubscribe()

}, [roomId])



    return (
        <RoomContainer>
        <RoomBarMessage/>
        <MessagesBar 
        title={roomTitle} 
        timestamp={timestamp}  
        messages={messages}/>
        </RoomContainer>
    )
}

export default ChatPage
const RoomContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
`