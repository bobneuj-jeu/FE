import styled from "styled-components";

export default function OrangeBtn({text, onClick}) {
    return (
        <BtnBox>
            <Btn onClick={onClick}>{text}</Btn>
        </BtnBox>
    )
}

const Btn = styled.button`
    background-color: #FF8024;
    color: white;
    width: 100%;
    height: 60px;
    text-align: center;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
`

const BtnBox = styled.div`
    margin-bottom: 7vh;
`