import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from './pages/Signup'
import Service from './pages/Service'
import Mypage from './pages/Mypage'
import Detail from './pages/Detail'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Service/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/mypage/order/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
