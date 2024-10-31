import styled from "styled-components";

export default function Item({ name, onClick }) {
    return (
        <WrapBox>
            <Name>{name}</Name>
            <DelBtn onClick={(event) => {
                event.preventDefault(); // 기본 동작 방지
                onClick(name); // onClick 함수 호출
            }}>
                X
            </DelBtn>
        </WrapBox>
    );
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
`;

const Name = styled.div`
    display: inline-block;
`;

const DelBtn = styled.button`
    font-size: 15px;
    color: #FF8024;
    font-weight: 700;
    cursor: pointer;
`;