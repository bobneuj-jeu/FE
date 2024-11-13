import styled from "styled-components";
import OrangeBtn from "../../Components/Input/OrangeBtn";
import React, {useState} from "react";
import Join from "./Join";
import Allergy from "./Allergy";
import Diabetes from "./Diabetes";
import OtherInfo from "./OtherInfo";
import LogoBar from "../../Components/Bar/LogoBar";
import {useNavigate} from "react-router-dom";

export default function Signup() {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");
    const [allergies, setAllergies] = useState([]);
    const [diabetes, setDiabetes] = useState(1);
    const [otherInfo, setOtherInfo] = useState([]);

    const sendData = async () => {
        try{
            const response = await fetch('/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": id.trim(),
                    "password": pwd.trim(),
                    "allergies": allergies.join(",")||"",
                    "diabetes": diabetes,
                    "anything": otherInfo.join(",")||""
                })
            })

            if(response.ok){
                navigate('/login');
            }
        } catch (error) {
            alert(error);
        }
    }

    const navigate = useNavigate();
    const pageList = [
        <Join
            onChangeId={e => setId(e.target.value)}
            onChangePw={e => setPwd(e.target.value)}
            onChangeRePw={e => setRePwd(e.target.value)}
        />,
        <Allergy
            addAllergy={(item)=>(setAllergies((current) => [...current, item]))}
            delAllergy={(item) => (setAllergies((current) => current.filter(element => element !== item)))}
            list={allergies}
        />,
        <Diabetes
            onChange={(e) => (setDiabetes(e.target.value))}
        />,
        <OtherInfo
            addInfo={(item)=>(setOtherInfo((current) => [...current, item]))}
            delInfo={(item) => (setOtherInfo((current) => current.filter(element => element !== item)))}
            list={otherInfo}
        />,
    ]
    const [page, setPage] = useState(0);

    const onClickHandler = () => {
        if (page>=pageList.length-1) {
            sendData();
            navigate("/login");
        }
        if(page===0){
            if(rePwd.trim()!==pwd.trim()){
                alert("비밀번호 재입력이 다릅니다.");
                return;
            }
        }
        setPage((current) => current + 1);
    }
    return (
        <Container>
            <LogoBar/>
            <Content>
                <Page>
                    {pageList[page]}
                </Page>
                <OrangeBtn text={page >= pageList.length-1? "완료" : "다음"} onClick={onClickHandler} />
            </Content>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Content = styled.div`
    height: 80vh;
    max-width: 1000px;
    width: 85%;
    display: flex;
    flex-direction: column;
`

const Page = styled.div`
    flex-grow: 1;
    height: 80%;
`