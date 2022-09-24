import { useNavigate } from "react-router-dom";
import {Container} from '../components/LoginComponents'
import Header from '../components/Header'
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Paging } from "../components/paging";

const Mypage = ()  => {
  const navigate = useNavigate()
  const [items, setItems] = useState([]) //리스트에 나타낼 아이템
  const [items1, setItems1] = useState([]) //전체 개수 받아오기용
  const [count, setCount] = useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지


  const requestdata = async () => {
    try {
      const listdata = await axios.get(`https://mycroft-test-api.herokuapp.com/order?page=${currentpage-1}`, {
        headers: {
          'Content-Type': "application/json"
        },
    })
      return listdata
      
    }
    catch (err) { }
  }
  
  const getdata = requestdata()
  const setPage = (e) => {
    setCurrentpage(e);
  };
  useEffect(() => {
    getdata.then((el) => {
      setItems1(el.data)
      setItems(el.data.content)
    })

  }, [currentpage]);
  useEffect(() => {
    setCount(items1.totalPages * 10);
  }, [currentpage]);
  
  const navigateHandler = (e) => {
    const id = e
    navigate(`/mypage/order/${id}`)
  }
  return (
    <>
    <Container>
      <Header/>
      {items.length > 0 ? (
      items.map((item)=> (
        <Content key={item.id} onClick={() => {navigateHandler(item.id)}}>
          <div>{item.id}</div>
          <div>{item.itemName}</div>
        </Content>
      ))
     ) 
     : <div>게시물이 없습니다.</div>
	}
      <Paging page={currentpage} count={count} setPage={setPage} />
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