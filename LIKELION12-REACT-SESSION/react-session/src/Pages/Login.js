//Login.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

text-align: center;
  @media all and (min-width:1024px) and (max-width:1279px) { 
    background-color: lightgrey;
  } 

  @media all and (min-width:769px) and (max-width:1023px) { 
    background-color: violet;
    padding: 20px;
  } 

  @media all and (min-width:481px) and (max-width:768px) {
    background-color: lemonchiffon;
    padding: 10px;
  } 

  @media all and (max-width:480px) {
    background-color: lime;
    flex-direction: column;
    padding: 5px;
  }
`


const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;


const BlockButton = styled.button`
  background-color: lightblue;
  color: black;
  border: none;
  width: 210px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  border: 2px solid black;
  &:hover {
    border-color: rgba(0, 0, 255, 1); 
  }
`;


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용


  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      

        <BlockButton onClick={() => navigate('/')}>로그인</BlockButton>
        <BlockButton onClick={() => navigate('/register')}>회원가입</BlockButton>
    </Container>
  );
}

export default Login;
