import React from 'react'
import styled from "styled-components"
import logo from "../images/chat-logo.png"
import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase"
import { setUser} from '../redux/user';

const LandingPage = () => {

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const signIn = () => {
        try {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(setUser({name: result.user.displayName, photoURL: result.user.photoURL}))
        }).catch(error => console.error(error));
    }catch(err) {
        alert("Kindly make sure you're connected to the internet")
        console.error(err)
    }
    }

    return (
        <Container>
            <Logo src={logo} alt="Room Chat logo"/>
            <Title>Welcome to RoomChat</Title>
          <Link to="/rooms"> <Button onClick={signIn}>Sign in with Google</Button></Link>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`
const Logo = styled.img`
    width: 350px;
    background-color: #fff;
    @media screen and (max-width: 400px) {
        width: 80%
    }
`
const Title = styled.h2`
margin-top: 10px`


const Button = styled.button`
padding: 10px;
width: 200px;
font-size: 0.9rem;
color: #172774;
border: none;
background-color: #77D970;
cursor: pointer;
margin-top: 30px;
border-radius: 5px;
outline: none;
&:hover {
    background-color: #6ECB63
}
`