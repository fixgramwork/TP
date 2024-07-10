import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');


    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        console.log('Log in')
    }

    useEffect(() => {
        axios.get('/user_inform/login')
            .then(res => console.log(res))
            .catch()
    },
        [])
    return (
        <div className="Login-bar">
            <br /><br />
            <h2>Login</h2>
            <form action="" method="POST">
                <div>
                    <label htmlFor='input_id'>ID : </label>
                    <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                </div>

                <div>
                    <label htmlFor='input_pw'>PW : </label>
                    <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </div>
                <div>
                    <button type='submit' onClick={onClickLogin} >Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;