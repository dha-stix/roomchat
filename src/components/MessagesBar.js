import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import background from "../images/background.png"
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MessageBody from './MessageBody';
import SendMessageBar from './SendMessageBar';
import { useSelector} from 'react-redux'



const MessagesBar = ({title, timestamp, messages, roomId}) => {
    const {user} = useSelector(state => state.user)
    const [year, setYear] = useState(0)
    const [month, setMonth] = useState(0)
    const [date, setDate] = useState(0)

    useEffect(()=> {
        if(timestamp) {
        setYear(timestamp.getFullYear())
        setMonth(timestamp.getMonth())
        setDate(timestamp.getDate())
        }
    }, [timestamp])
   
    return (
        <Container bg={background}>    
        <MessagesNav>
            <Div>
                <RoomHeader>{title}</RoomHeader>
                <Timestamp>Created on {timestamp && date + "/" + month + "/" + year}</Timestamp>
            </Div>
            
            <Link to="/rooms">
            <IconButton>
                <HomeIcon fontSize="large"/>
            </IconButton>
            </Link>
            <Avatar src={user.photoURL}/>
        </MessagesNav>

        <MessageBody messages={messages}/>
        <SendMessageBar/>
    </Container>
    )
}

export default MessagesBar

const Container = styled.div`
flex: 0.8;
background-image: ${props  => `url("${props.bg}")`};
background-position: center;
background-repeat: no-reapeat;
background-size: cover;
height: 100%;
@media screen and (max-width: 768px) {
    flex: 1
}
`
const Div = styled.div``
const MessagesNav = styled(Div)`
width: 100%;
height: 10vh;
background-color: #fff;
border-bottom: 1px solid #ddd;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top:0;
padding: 0 30px;
border-left: 1px solid #eee;
@media screen and (max-width: 768px) {
    padding: 0 15px
}
`
const RoomHeader = styled.h3`
font-weight: 500`
const Timestamp = styled.p`
font-size: 0.7rem;
color: #1cbc7c;
opacity: 0.7
`