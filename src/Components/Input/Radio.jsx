import styled from "styled-components";

export default function Radio({text, id, name, checked}) {
    return (
        <div>
            <RealRadio type={"radio"} id={id} name={name} defaultChecked={checked}/>
            <CustomRadio htmlFor={id}>{text}</CustomRadio>
        </div>
    );
}

const RealRadio = styled.input`
    display: none;
`

const CustomRadio = styled.label`
    border-radius: 10px;
    width: 100%;
    height: 60px;
    border: 1px solid #B9B7B7;
    color: #B9B7B7;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    ${RealRadio}:checked + & {
        border: 3px solid #FF8024;
        color: #FF8024;
        font-weight: 800;
    }
`