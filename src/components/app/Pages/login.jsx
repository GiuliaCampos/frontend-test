import React, {useState} from 'react';
import { Link, withRouter } from "react-router-dom";

import {login} from '../../../services/auth'

import Theme from '../../theme';
import Layout from '../../layout';

import H1 from '../H1';
import Input from '../Input'
import Button from  '../Button'


function Login(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignin(){
    if(!email || !password){
      setError("Preencha todos os campos")
    } else{
      const response = Math.random();
      login(response)
      props.history.push("/home")
    }
  }

  return(
    <Theme>
      <Layout>
        <H1>Login</H1>
        {error && <p>{error}</p>}
        <Input value={email} placeholder="E-mail" required type="email" onChange={e => setEmail(e.target.value)}/>
        <Input value={password} placeholder="Password" required type="password" onChange={e => setPassword(e.target.value)} />
        <Button label="login" onClick={handleSignin} />
      </Layout>
    </Theme>
  )
};

export default Login;
