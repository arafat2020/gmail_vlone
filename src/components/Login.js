import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../features/userSlice';
import { auth, provider } from '../firebase';
import './Login.css'

const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(userLogIn({
                    displayName: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            })
    }
    return (
        <div className="login">
            <div className="login_container">
            <img
                    src="https://cdn.freelogovectors.net/svg07/new_gmail_logo.svg"
                    alt="logo"
                />
                <Button className="rambutan" variant='contained' color='primary' onClick={signIn}>login</Button>
            </div>
        </div>
    );
};

export default Login;