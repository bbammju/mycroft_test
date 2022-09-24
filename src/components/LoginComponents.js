import styled from "styled-components";


export const Container = styled.div`
  width: 40vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid;
  align-items: center;
`

export const Logo = styled.img`
  width: 13vw;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vw;
`

export const Input = styled.input`
  width: 35vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vw;
  &:focus {
    outline: none;
  }
  &:invalid {
    border: 2px solid;
    border-color: red;
  }

  
`

export const Button = styled.button`
  width: 8vw;
  height: 6vh;
  margin: 2vw;
  
`