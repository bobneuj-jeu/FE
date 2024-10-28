import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import {useState} from "react";
import styled from "styled-components";
import TopBar from "../../Components/Bar/TopBar";

export default function Fridge() {
    const [Fridge, setFridge] = useState([]);
    return (
        <Wrap>
            <TopBar/>
            <Form>
                <TextBox>가지고 있는 식재료를 입력해주세요</TextBox>
                <InputText placeholder={"식재료를 입력해주세요"} type={"text"} useBtn={true}/>
                <List list={Fridge}/>
            </Form>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
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