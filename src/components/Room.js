import React from 'react'
import styled from "styled-components"
import ChatBar from './ChatBar'

import RoomBar from './RoomBar'

const Room = () => {
    return (
        <RoomContainer>
        <RoomBar/>
        <ChatBar/>
        </RoomContainer>
    )
}

export default Room

const RoomContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
`