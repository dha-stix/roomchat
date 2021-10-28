import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import TitlesContainer from './TitlesContainer'
import db from "../firebase"
import { onSnapshot, collection } from 'firebase/firestore';

import { useSelector} from 'react-redux'
const RoomTitles = () => {
    const [rooms, setRooms] = useState([])
    const {user} = useSelector(state => state.user)

    useEffect(()=> {
        const unsub = onSnapshot(collection(db, "rooms"),(snapshot)=>{
         setRooms(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
         return ()=>unsub()
     })   
    },[])
    return (
        <Container>
            {rooms.map(room => (
                <TitlesContainer title={room.name} lastmessage="Tap to view chats" id={room.id} key={room.id}/>
            ))}
        </Container>
    )
}

export default RoomTitles

const Container  = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px
    } 
    &::-webkit-scrollbar-track {
        background: #ededed;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #ddd
    }
`
