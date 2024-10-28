import styled from "styled-components";
import { useState } from "react";


export default function DayRadio({ name, checkedIdx, info}) {
    const [selectedIdx, setSelectedIdx] = useState(checkedIdx);
    return (
        <Wrapper>
            {info.map(({ id, text }, index) => (
                <Radio key={id} id={id} name={name} text={text} checked={selectedIdx === id} onChange={() => setSelectedIdx(id)}/>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #666;
`

function Radio({name, id, text, checked, onChange}){
    return(
        <RadioWrap>
            <RealRadio id={id} name={name} checked={checked} type={"radio"} value={id} onChange={onChange}/>
            <CustomRadio htmlFor={id}>{text}</CustomRadio>
        </RadioWrap>
    );
}

const RadioWrap = styled.div`
    flex-grow: 1;

`

const RealRadio = styled.input`
    display: none;
`

const CustomRadio = styled.label`
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #E0E0E0;
    ${RealRadio}:checked + & {
        background: #FF8024;
        color: #FFF;
        font-weight: 800;
    }
`