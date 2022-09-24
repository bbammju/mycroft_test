import {Container} from '../components/LoginComponents'
import Header from '../components/Header'
import logo from '../assets/type.png'
import { useStore } from '../zustand/store'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Login = ()  => {
  const navigate = useNavigate()
  const {accessToken} = useStore()
  const btnHandler = () => {
    if (accessToken.length !== 0) {
      alert('주문 성공했습니다')
    }
    else if (accessToken.length === 0) {
      alert('로그인 해주세요')
      navigate('/signup')
    }
  }
  return (
    <>
    <Container>
      <Header/>
      <LBContainer>
        <Logo src={logo}/>
        <Button onClick={() => {btnHandler()}}>주문하기</Button>
      </LBContainer>

    </Container>
    </>
  );
}

export default Login;

const LBContainer = styled.div`
  width: 30vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const Logo = styled.img`
  width: 15vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Button = styled.button`
  width: 8vw;
  height: 6vh;
  margin: auto;
  background-color: white;
  border: 2px solid #A4BDE0;
  &:active {
    background-color: #A4BDE0;
  }
`