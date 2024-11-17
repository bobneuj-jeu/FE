import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Fridge from "./Pages/Fridge";
import MakeMenu from "./Pages/MakeMenu";
import User from "./Pages/User";
import { useState, useEffect } from "react";
import NavBar from "./Components/Bar/NavBar";
import styled from "styled-components";
import Splash from "../src/Pages/Splash";
import Logout from "./Pages/Logout";

function App() {
    const [isLogin, setIsLogin] = useState(() => {
        return localStorage.getItem('isLogin') ==='true';
    });
    const [isLoading, setIsLoading] = useState(() => {
        return !sessionStorage.getItem('visited');
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('visited', 'true');
                if (isLogin) {
                    navigate('/');
                } else {
                    navigate('/login');
                }
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            console.log(isLogin);
            if (isLogin && (window.location.pathname === '/login' || window.location.pathname === '/signup')) {
                navigate('/');
            } else if (!isLogin && window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
                navigate('/login');
            }
        }
    }, [isLoading, isLogin, navigate]);

    return (
        <Container className="App">
            {isLoading ? (
                <Splash />
            ) : (
                <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/makeMenu" element={<MakeMenu />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/fridge" element={<Fridge />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/logout" element={<Logout/>} />
                    </Routes>
                    {isLogin? <NavBar /> : null}
                </>
            )}
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default App;