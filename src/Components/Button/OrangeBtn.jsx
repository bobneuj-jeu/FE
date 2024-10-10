import styled from "styled-components";

export default function OrangeBtn({text, onClick}) {
    return (
        <Btn onClick={onClick}>{text}</Btn>
    )
}

const Btn = styled.button`
    background-color: #FF8024;
    color: white;
    width: 100vw;
    height: 60px;
    text-align: center;
    border-radius: 10px;
    font-size: 20px;
`