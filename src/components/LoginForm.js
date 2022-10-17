import React from 'react';
import { Container, CanvasLogin } from './Another';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

//Form Login
const InputGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 10px;
`
const InputGroupItem = styled.p`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    padding: 10px;
`
const Title = styled.p`
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 70px;
    background-color: #005FB8;
    padding: 50px;
    color: white;
    font-weight: 900;
    letter-spacing: 5px;
    text-shadow: 0px 4px 3px rgb(0 0 0 / 40%), 0px 8px 13px rgb(0 0 0 / 10%), 0px 18px 23px rgb(0 0 0 / 10%);
    box-shadow: 0px 0px 3px black;
`
const FormLogin = styled.form`
    display:flex;
    flex-direction:column;
    background-color: white;
    row-gap:10px;
    width: 400px;
    height: 540px;
    padding: 10px;
    box-shadow:0px 0px 3px black;
`
export const LoginLabel = styled.label`
    width: 100px;
    font-size: 16px;
    letter-spacing: 1px;
`
const LoginInput = styled.input`
    width: 100%;
    height:40px;
    padding:10px;
    font-size:16px;
    outline:none;
    margin-left: 10px;
    letter-spacing: 0.5px;
`
const LoginButton = styled.button`
    width: 100%;
    height: 60px;
    font-size: 24px;
    font-weight: 900;
    cursor:pointer;
    margin-top:50px;
    letter-spacing: 2px;
`

export const LoginForm = () => {

    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
        let path = `/ListJob`; 
        navigate(path);
    }

  return (
    <Container>
        <CanvasLogin>
            <FormLogin>
                <Title>{'ITSupport'}</Title>
                <InputGroup>
                    <InputGroupItem>
                        <LoginLabel>{'username'}</LoginLabel>
                        <LoginInput />
                    </InputGroupItem>
                    <InputGroupItem>
                        <LoginLabel>{'password'}</LoginLabel>
                        <LoginInput />
                    </InputGroupItem>
                    <LoginButton 
                        type='button'
                        onClick={routeChange}
                    >
                        {'Login'}
                    </LoginButton>
                </InputGroup>
            </FormLogin>
        </CanvasLogin>
    </Container>
  );
}