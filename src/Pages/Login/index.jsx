import styled from "styled-components";
import InputText from "../../Components/Input/InputText";
import {Link} from "react-router-dom";
import OrangeBtn from "../../Components/Input/OrangeBtn";
import LogoBar from "../../Components/Bar/LogoBar";

export default function Login() {
    return (
        <Container>
            <LogoBar/>
            <Content>
                <InputBox>
                    <InputText placeholder={"아이디를 입력해주세요"} type={"text"}/>
                    <InputText placeholder={"비밀번호를 입력해주세요"} type={"password"}/>
                    <SmallTextBox><SmallText to={"/"}>아이디 혹은 비밀번호를 잊으셨나요?</SmallText></SmallTextBox>
                </InputBox>
                <BtnBox>
                    <TextBox>계정이 없으신가요? <JoinText to={"/signup"}>회원가입 하러가기</JoinText></TextBox>
                    <OrangeBtn text={"완료"}/>
                </BtnBox>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Content = styled.div`
    padding-top: 15%;
    height: 100%;
    max-width: 1000px;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const SmallTextBox = styled.div`
    display: flex;
    justify-content: end;
`

const SmallText = styled(Link)`
    color: #C1C1C1;
    font-size: 10px;
`

const BtnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
`

const TextBox = styled.div`
    color: #C1C1C1;
    text-align: center;
    font-size: 15px;
    letter-spacing: -0.33px;
`

const JoinText = styled(Link)`
    color: #FF8024;
`