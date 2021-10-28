import React from 'react'
import styled from "styled-components"
import RoomTitles from "./RoomTitles"
import db from "../firebase"
import { collection, addDoc } from 'firebase/firestore';

const RoomBar = () => {
    const createChat = () => {
        const roomName = prompt("Please enter a name for your chat")
        if(roomName) {
            addDoc(collection(db, "rooms"), {
              name: roomName,
              timestamp: new Date()
            }).then(data => {
                console.log(data)
            }).catch(err => console.error(err))
            
        }
    }

    return (
        <Container>     
            <BarTitle>Chat Rooms</BarTitle>
            <AddRoomContainer  onClick={createChat}>
            <AddRoom>Add Room</AddRoom>
            </AddRoomContainer>
            
                <Rooms>Available Rooms 💬</Rooms>
            
            <RoomTitles/>
        </Container>
    )
}

export default RoomBar

const Container = styled.div`
flex: 0.2;
background-color: #fff;
height: 100%;
overflow: hidden;
padding: 20px;
@media screen and (max-width: 768px) {
    flex: 1
}
`
const BarTitle = styled.h3`
    margin-bottom: 20px
`
const AddRoomContainer = styled.div`
    width:100%;
    padding: 10px;
    cursor: pointer;
    border-right: 2px solid green;
    &:hover {
        background-color: #eeeeee;
    }
`
const Rooms = styled.p`
margin: 30px 0 15px 0;
opacity: 0.4;
`

const AddRoom = styled.p`
    color: #1cbc7c
`