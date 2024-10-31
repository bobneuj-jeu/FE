import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import { useState } from "react";
import styled from "styled-components";
import TopBar from "../../Components/Bar/TopBar";
import { useNavigate } from "react-router-dom"; // useNavigate import

export default function Fridge() {
    const [Fridge, setFridge] = useState([]);
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleAddButtonClick = (item) => {
        setFridge((current) => [...current, item]);
    }

    const handleDelButtonClick = (itemToDelete) => {
        setFridge((current) => current.filter(item => item !== itemToDelete));
    }

    return (
        <Wrap>
            <TopBar/>
            <BackButton onClick={handleBackButtonClick}>←</BackButton>
            <Form>
                <TextBox>가지고 있는 식재료를 입력해주세요</TextBox>
                <InputText placeholder={"식재료를 입력해주세요"} type={"text"} useBtn={true} onClick={handleAddButtonClick}/>
                <List list={Fridge} onClick={handleDelButtonClick}/>
            </Form>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    position: relative; // Wrap을 relative로 설정
`

const Form = styled.form`
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    width: 85%;
`

const TextBox = styled.div`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.33px;
`

const BackButton = styled.button`
    position: absolute; // 절대 위치 지정
    top: 10px; // 상단에서의 거리
    left: 10px; // 왼쪽에서의 거리
    background: transparent; // 배경 투명
    border: none; // 테두리 없애기
    font-size: 24px; // 글자 크기
    cursor: pointer; // 커서 모양 변경
    color: ${({ isOrange }) => (isOrange ? '#FF8024' : '#666')}; // 주황색 조건부 설정

    &:hover {
        color: #FF8024; // hover 시 색상 변경
    }
`