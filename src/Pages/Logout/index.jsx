import {useNavigate} from "react-router-dom";

export default function Logout() {
    const navigator = useNavigate();
    localStorage.setItem('isLogin', "false");
    localStorage.removeItem('userId');
    navigator('/login')
}