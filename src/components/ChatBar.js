import React from 'react'
import styled from "styled-components"
import background from "../images/background.png"
import logo from "../images/chat-logo.png"

const ChatBar = () => {
    return (
        <Container bg={background}>    
            <DefaultContainer>
            <DefaultImage src={logo} alt="Room Chat logo"/>
            <DefaultText>Select any room of your choice and start chatting 💬</DefaultText>
            </DefaultContainer> 
            
        </Container>
    )
}

export default ChatBar

const Container = styled.div`
flex: 0.8;
background-image: ${props  => `url("${props.bg}")`};
background-position: center;
background-repeat: no-reapeat;
background-size: cover;
height: 100%;
@media screen and (max-width: 768px) {
    display: none;
}
`
const DefaultContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
`
const DefaultImage =  styled.img`
width: 350px;
`
const DefaultText = styled.h3`
margin-top: -50px
`