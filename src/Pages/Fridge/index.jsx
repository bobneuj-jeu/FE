import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import {useEffect, useState} from "react";
import styled from "styled-components";
import TopBar from "../../Components/Bar/TopBar";
import { useNavigate } from "react-router-dom";

export default function Fridge() {
    const [Fridge, setFridge] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const id = localStorage.getItem('userid');

    const addFridge = async (item) => {
        try {
            const response = await fetch('/fridge/add',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: id,
                    itemname: item
                })
            })
            if(response.ok){
                setFridge((current) => [...current, item]);
            }
        } catch (err){
            console.log(err)
        }
    }

    const delFridge = async (item) => {
        try {
            const response = await fetch(`/fridge/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    itemname: item
                })


            })
            if(response.ok){
                const data = await response.json();
                setFridge((current) => current.filter(listItem => listItem !== item));
            }
        } catch (err){
            console.log(err)
        }
    }

    const handleAddButtonClick = () => {
        if(Fridge.includes(input)){
            alert("이미 존재하는 식재료입니다.");
        } else {
            addFridge(input);
        }
        setInput("");
    }

    const handleDelButtonClick = (itemToDelete) => {
        delFridge(itemToDelete);
    }

    const getFridges = async () => {
        try{
            const response = await fetch('', {
                method: 'POST',
            })

            if(response.ok){
                const data = await response.json();
                setFridge(data);
                console.log("냉장고 조회 성공")
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getFridges();
    }, [])

    return (
        <Wrap>
            <TopBar/>
            <BackButton onClick={()=>navigate(-1)}>←</BackButton>
            <Form>
                <TextBox>가지고 있는 식재료를 입력해주세요</TextBox>
                <InputText onChange={(e)=>setInput(e.target.value)} value={input} placeholder={"식재료를 입력해주세요"} type={"text"} useBtn={true} onClick={handleAddButtonClick}/>
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