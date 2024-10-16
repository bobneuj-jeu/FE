import styled from "styled-components";

export default function InputText({ placeholder , type, isRequired, useBtn, onChange, value }) {
    return(
        <div>
            {isRequired ? <SmallText>*필수</SmallText> : null}
            <InputBox>
                <Input placeholder={placeholder} type={type} onChange={onChange} value={value} />
                {useBtn ? <AddBtn>추가</AddBtn>: null}
            </InputBox>
        </div>
    );
}

const InputBox = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 2px solid #B9B7B7;
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 15px;
    gap: 10px;
`

const Input = styled.input`
    background: none;
    flex-grow: 1;
    font-weight: 700;
    font-size: 15px;
    &::placeholder {
        color: #B9B7B7;
    }
`

const AddBtn = styled.button`
    cursor: pointer;
    height: 35px;
    width: 50px;
    background-color: #FF8024;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-weight: 700;
`

const SmallText = styled.div`
    font-size: 10px;
    color: #FF8024;
    margin-left: 6px;
`