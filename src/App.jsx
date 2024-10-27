import {Routes, Route} from 'react-router-dom'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Fridge from "./Pages/Fridge";
import MakeMenu from "./Pages/MakeMenu";
import User from "./Pages/User";
import {useState} from "react";
import NavBar from "./Components/Bar/NavBar";
import styled from "styled-components";

function App() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <Container className={"App"}>
            {isLogin ? (
                <>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/makeMenu" element={<MakeMenu />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/fridge" element={<Fridge />} />
                        <Route path="/user" element={<User />} />
                    </Routes>
                    <NavBar/>
                </>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            )}
        </Container>

    );
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export default App;
