import { useParams } from "react-router-dom";
import {Container} from '../components/LoginComponents'
import Header from '../components/Header'
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


const Mypage = ()  => {
  let params = useParams()
  const [items, setItems] = useState([])
  const requestdata = async () => {
    try {
      const listdata = await axios.get(`https://mycroft-test-api.herokuapp.com/order/${params.id}`, {
        headers: {
          'Content-Type': "application/json"
        },
    })
      return listdata
      
    }
    catch (err) { }
  }
  
  const getdata = requestdata()

  useEffect(() => {
    getdata.then((el) => {
      setItems(el.data)
    })

  }, []);
 
  return (
    <>
    <Container>
      <Header/>
      <Content key={items.id}>
        <div>{items.id}</div>
        <div>{items.itemName}</div>
      </Content>
    </Container>
    </>
  );
}

export default Mypage;

const Content = styled.div`
  width: 30vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  margin: 3px;
  border: 2px solid #A4BDE0;
`