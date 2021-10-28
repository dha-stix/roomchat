import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { Avatar} from '@mui/material'
import { Link } from 'react-router-dom'

const TitlesContainer = ({title, lastmessage, id}) => {
    const [seed, setSeed] = useState("")
    const [screenWidth, setScreenWidth] = useState(null)
    useEffect(()=> {
        setSeed(Math.floor(Math.random() *2000))
    },  [])

    const truncate = (str, n)=> (
        str?.length > n ? str.substr(0,n-1) + "..." :str
    )
        useEffect(()=> {
            setScreenWidth(window.innerWidth)
        }, [])
    return (
        <Link to={`/rooms/${id}`}>
            <Titles>
                <Avatar 
                src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}/>
                <Container>
                <Title>{screenWidth < 768 ? truncate(title, 20) : truncate(title, 10)}</Title>
                <Message>{screenWidth < 768 ? truncate(lastmessage, 20) : truncate(lastmessage, 10)}</Message>
                </Container>
            </Titles>
        </Link>
    )
}

export default TitlesContainer

const Titles = styled.div`
    width:100%;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 5px;
    &:hover {
        background-color: #eeeeee;
    }
`
const Title = styled.p`
    color: #000
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const Message = styled(Title)`
font-size: 0.7rem;
opacity: 0.3;
`