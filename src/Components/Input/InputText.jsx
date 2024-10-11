import styled from "styled-components";

export default function InputText({ placeholder }) {
    return(
        <div>
            <Input placeholder={placeholder}/>
        </div>
    );
}

const Input = styled.input`
    width: 100vw;
    padding: 17px 30px;
    border-radius: 10px;
    border: 2px solid #B9B7B7;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.33px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #B9B7B7;
        
    }
`