import axios from "axios";
import {Container, Logo, Input, Button} from '../components/LoginComponents'
import logo from '../assets/test.png'
import { useState } from "react";
import { useStore } from '../zustand/store'
import { useNavigate } from "react-router-dom";


const Login = ()  => {
  const navigate = useNavigate()
  const {setAccessToken} = useStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigateHandler = () => {
    navigate('/signup')
  }

  const EmailHandler = (e) => {
    setEmail(e.target.value)
  }
  const PasswordHandler = (e) => {
    setPassword(e.target.value)
  }
  const LoginHandler = async () => {
    try {
      const listdata = await axios.post(`https://mycroft-test-api.herokuapp.com/login`, {email: email, password: password}, {
        headers: {
          'Content-Type': "application/json"
        },
        
      })
      setAccessToken(listdata.data.token)
      navigate('/')
      if (!listdata) {
        alert('비밀번호를 확인해주세요')
      }
    }
    catch (err) {
      alert('비밀번호를 확인해주세요')
    }
  }
  return (
    <>
    <Container>
      <Logo src={logo}/>
      <Input placeholder="이메일을 입력하세요" onKeyUp={(e) => {EmailHandler(e)}}/>
      <Input type='password' placeholder="비밀번호를 입력하세요" onKeyUp={(e) => {PasswordHandler(e)}}/>
      <Button onClick={() => {LoginHandler()}}>로그인</Button>
      <Button onClick={() => {navigateHandler()}}>회원가입</Button>
    </Container>
    </>
  );
}

export default Login;