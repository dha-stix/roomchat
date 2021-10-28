import React from 'react'
import styled from "styled-components"
import { useSelector} from 'react-redux'

const MessageBody = ({messages}) => {
    const {user} = useSelector(state => state.user)
    
    const setTime = (timestamp) => {
       let hours = timestamp.toDate().getHours() 
       let minutes = timestamp.toDate().getMinutes()
       if(hours < 12)  hours = "0" + hours
       if (minutes < 10) minutes = "0" + minutes
       return `${hours}:${minutes}`
    }
  
    return (
        <Container>

            {messages.map(message => (
                user.name === message.user ? (
            <SenderMessage key={message.id}>
                <Sender>{message.user}</Sender>
                <Text>{message.message !== " " && message.message}</Text>
                <SenderTime>{message.timestamp && setTime(message.timestamp)}</SenderTime>
            </SenderMessage>
                ) : (
                <RecipientMessage  key={message.id}> 
                <Recipient>{message.user}</Recipient>
                <Text>{message.message}</Text>
                <RecipientTime>03:45</RecipientTime>
            </RecipientMessage>
                )
                        
                    
                    ))}
           
        </Container>
    )
}

export default MessageBody

const Container = styled.div`
width: 100%;
height: 80vh;
padding: 30px 20px;
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
const RecipientMessage = styled.div`
    background-color: white;
    padding:  15px;
    border-radius: 12px 12px 12px 0px;
    margin-bottom: 35px;
    position: relative;
    max-width: 100%;
    width: fit-content;
    min-width: 150px
`
const SenderMessage = styled(RecipientMessage)`
    background-color: #dbf4e4;
    margin-left: auto;
    border-radius: 12px 0 12px 12px;
    position: relative
`
const Sender = styled.p`
    font-size: 0.7rem;
    position: absolute;
    top: -15px;
    right: 0px;
    opacity: 0.5
`
const Recipient = styled(Sender)`
left: 0px
`
const SenderTime = styled.p`
font-size: 0.7rem;
opacity: 0.5;
position: absolute;
bottom: -15px;
right: 0px;
color: #515b61;
`
const RecipientTime = styled(SenderTime)`
left: 0px
`
const Text = styled.p`
@media screen and (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.1rem;
}
`
