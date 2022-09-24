import logo from '../assets/test.png'
import styled from "styled-components";
import {Logo} from '../components/LoginComponents'
import { useNavigate } from "react-router-dom";
import { useStore } from '../zustand/store'


const Header = ()  => {
  const navigate = useNavigate()
  const {accessToken, setAccessToken} = useStore()
  const headerHandler1 = () => {
    navigate('/')
  }
  const headerHandler2 = () => {
    navigate('/signup')
  }
  const headerHandler3 = () => {
    navigate('/login')
  }
  const headerHandler4 = () => {
    navigate('/mypage')
  }
  const headerHandler5 = () => {
    setAccessToken('')
    navigate('/')
  }
  return (
    <HeaderContainer>
     <Logo src={logo}/>
     {accessToken.length !== 0 ? (
      <BtnContainer>
      <Button onClick={() => {headerHandler1()}}>서비스</Button>
      <Button onClick={() => {headerHandler4()}}>마이페이지</Button>
      <Button onClick={() => {headerHandler5()}}>로그아웃</Button>
      </BtnContainer>
     ) : (
      <BtnContainer>
      <Button onClick={() => {headerHandler1()}}>서비스</Button>
      <Button onClick={() => {headerHandler2()}}>회원가입</Button>
      <Button onClick={() => {headerHandler3()}}>로그인</Button>
      </BtnContainer>
     )
     
     }
     
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 38vw;
  height: 16vh;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid;
  margin: 1vw;
`

const BtnContainer = styled.div`
  width: 20vw;
  height: 6vh;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
`

const Button = styled.button`
width: 5vw;
height: 5vh;
margin: 2px;
background-color: white;
border: 2px solid #A4BDE0;
&:active {
  background-color: #A4BDE0;
}
`