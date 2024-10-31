import { Routes, Route, useEffect } from 'react-router-dom';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Fridge from "./Pages/Fridge";
import MakeMenu from "./Pages/MakeMenu";
import User from "./Pages/User";
import { useState } from "react";
import NavBar from "./Components/Bar/NavBar";
import styled from "styled-components";

function App() {
    const [isLogin, setIsLogin] = useState(() => {
        // 로컬 스토리지에서 로그인 정보 불러오기
        const savedLoginStatus = localStorage.getItem('isLogin');
        return savedLoginStatus === 'true';
    });

    const handleLogin = (status) => {
        setIsLogin(status);
        localStorage.setItem('isLogin', status); // 로그인 상태 저장
    };

    return (
        <Container className={"App"}>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/home/makeMenu" element={<MakeMenu />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/fridge" element={<Fridge />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login setIsLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            {isLogin && <NavBar />} {/* isLogin 상태에 따라 NavBar 표시 */}
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default App;