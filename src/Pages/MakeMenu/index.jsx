import styled from 'styled-components';
import LogoBar from "../../Components/Bar/LogoBar";

export default function MakeMenu() {
    return (
        <Wrap>
            <LogoBar/>
            <Content>
                <Title>식단 짜기</Title>
                <BtnContent>
                    <Btn>재료 확인하러가기</Btn>
                    <Btn>식단 짜지 않을 날 정하기</Btn>
                    <Btn>AI 식단 생성</Btn>
                    <Btn>식단 보러가기</Btn>
                </BtnContent>
            </Content>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    gap: 20px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 90%;
`

const Title = styled.div`
    color: #FF8024;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.424px;
    width: 100%;
`

const BtnContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
`

const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19.251px;
    border: 2px solid #666;
    cursor: pointer;
    width: 100%;
    height: 75px;
    color: #666;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.424px;
`