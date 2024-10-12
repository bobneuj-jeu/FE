import styled from "styled-components";

export default function InputList({name, onClick}){
    return(
        <WrapBox>
            <Name>{name}</Name>
            <DelBtn onClick={onClick}>X</DelBtn>
        </WrapBox>
    )
}

const WrapBox = styled.div`
    display: inline-flex;
    padding: 16px 20px;
    gap: 10px;
    border-radius: 30px;
    border: 2px solid #FF8024;
    background: #FFF;
    color: #FF8024;
    font-size: 15px;
    font-weight: 700;
`

const Name = styled.div`
    display: inline-block;
`

const DelBtn = styled.button`
    font-size: 15px;
    color: #FF8024;
    font-weight: 700;
    cursor: pointer;
`