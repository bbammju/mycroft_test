import axios from "axios";
import {Container, Logo, Input, Button} from '../components/LoginComponents'
import logo from '../assets/test.png'
import { useState } from "react";
import { useStore } from '../zustand/store'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Login = () => {
  const navigate = useNavigate()
  const {setAccessToken} = useStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkpassword, setCheckpassword] = useState('')
  const [phone, setPhone] = useState('')
  const [testemail, settestEmail] = useState(true)

  const IsValid = () => {
    const valid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (valid.test(email)) {
      settestEmail(true)
    }
    else {
      settestEmail(false)
    }
  }
  const EmailHandler = (e) => {
    setEmail(e.target.value)
  }
  const PasswordHandler = (e) => {
    setPassword(e.target.value)
  }
  const CheckpasswordHandler = (e) => {
    setCheckpassword(e.target.value)
  }
  const PhoneHandler = (e) => {
    setPhone(e.target.value)
  }
  const SignupHandler = async () => {
    if (password !== checkpassword) {
      alert('비밀번호를 확인해주세요')
    }
    else if (password.length > 15 || password.length < 8) {
      alert('비밀번호를 확인해주세요')
    }
    else {
      const listdata = await axios.post(`https://mycroft-test-api.herokuapp.com/sign-up`, {email: email, password: checkpassword, mobile: phone}, {
        headers: {
          'Content-Type': "application/json"
        },
        
      })
      setAccessToken(listdata.data.token)
      navigate('/') 
    }
    if (testemail === false) {
      alert('이메일을 확인해주세요')
      document.getElementById('email').focus()
      return
    }
  }
  const navigateHandler = () => {
    navigate('/')
  }
  
  return (
    <>
    <Container>
      <Logo src={logo}/>
      <EmailInput type="text" placeholder="이메일을 입력하세요" onKeyUp={(e) => {EmailHandler(e)}} onBlur={IsValid} testemail={testemail} id='email'/>
      <Input type='password' placeholder="비밀번호를 입력하세요" onKeyUp={PasswordHandler} pattern="^[0-9a-zA-Z]{8,15}$"/>
      <Input type='password' placeholder="비밀번호를 다시 입력하세요" onKeyUp={(e) => {CheckpasswordHandler(e)}}/>
      <Input placeholder="전화번호를 입력하세요" onKeyUp={(e) => {PhoneHandler(e)}} type='text' pattern='[0-9]+'/>
      <Button onClick={() => {SignupHandler()}}>회원가입</Button>
      <Button onClick={() => {navigateHandler()}}>취소</Button>
    </Container>
    </>
  );
}

export default Login;


const EmailInput = styled.input`
  width: 35vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vw;
  &:focus {
    outline: none;
  }
  border-color: ${(props) => (props.testemail ? '' : 'red')};
  
`