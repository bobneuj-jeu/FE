import styled from "styled-components";

export default function InputText({ placeholder , type, isRequired }) {
    return(
        <div>
            {isRequired ? <SmallText>*필수</SmallText> : null}
            <Input placeholder={placeholder} type={type}/>
        </div>
    );
}

const Input = styled.input`
    width: 100%;
    height: 60px;
    padding: 17px 30px;
    border-radius: 10px;
    border: 2px solid #B9B7B7;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.33px;
    &::placeholder {
        color: #B9B7B7;
    }
`

const SmallText = styled.div`
    font-size: 10px;
    color: #FF8024;
    margin-left: 6px;
`