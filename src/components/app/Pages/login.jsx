import React, {useState} from 'react';

import {login} from '../../../services/auth'

import{
  Public as Earth,
} from "@material-ui/icons"

import Theme from '../../theme';
import Layout from '../../layout';
import styled from "styled-components";

import H1 from '../H1';
import H3 from '../H3';
import Input from '../Input'
import Button from  '../Button'
import Label from '../Label'

const FormArea = styled.div `
  background-color: #FFE8E7;
  margin: 20px;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    display: grid;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
`


function Login(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignin(){
    if(!email || !password){
      setError("Enter your e-mail and password, please")
    } else{
      const response = Math.random();
      login(response)
      props.history.push("/home")
    }
  }

  return(
    <Theme>
      <Layout>
        <FormArea>
          <H1>Welcome to World Populations</H1>
          <H3>Hello, nice to see you! Enter your e-mail and password</H3>
          {error && <H3>{error}</H3>}
          <Input value={email} placeholder="E-mail" required type="email" onChange={e => setEmail(e.target.value)}/>
          <Input value={password} placeholder="Password" required type="password" onChange={e => setPassword(e.target.value)} />
          <Button label="Sing in" onClick={handleSignin} color="quaternary" />
          <Label>You can: choose a country, add the population, edit the population and remove</Label>
        </FormArea>
      </Layout>
    </Theme>
  )
};

export default Login;
