import React, {useState} from 'react'
import styled from "styled-components"
import { useSelector} from 'react-redux'
import { addDoc,collection } from 'firebase/firestore'
import db from "../firebase"
import { useParams } from 'react-router-dom';
import { Timestamp} from '@firebase/firestore'

const SendMessageBar = () => {
    const [input, setInput] = useState("")
    const {user} = useSelector(state => state.user)
    const {roomId} = useParams()
  
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if(input) {
               const messagesRef = await addDoc(collection(db, "rooms", roomId, "messages"), {
                 message: input,
                 parent_id: roomId,
                 timestamp: Timestamp.now().toDate(),
                 user: user.name
               })
            }
        } catch (error) {
            console.error(error)
            alert("Message not sent")
        }
        
        setInput("")
    }

    return (
        <Container  action="" method="POST">
            <Input type="text" 
            placeholder="Type a message..."
            value={input}
            onChange={(e)=>setInput(e.target.value)} 
            name="message"
            />
            <Button onClick={handleSubmit}>Send</Button>
        </Container>
    )
}

export default SendMessageBar

const Container = styled.form`
width: 100%;
height: 10vh;
background-color: #eee;
display: flex;
align-items: center;
padding: 10px;
justify-content: space-between
`
const Input = styled.input`
flex: 0.8;
padding: 10px;
outline: none;
height: 100%;
border: 1px solid #ddd;
background-color: #fff;
border-radius: 5px;
@media screen and (max-width: 768px) {
    flex: 0.78;
}
`
const Button = styled.button`
flex: 0.2;
outline: none;
max-width: 150px;
padding: 10px;
background-color: #1cbc7c;
border: none;
cursor: pointer;
color: #eee;
border-radius: 3px

`