import styled from "styled-components";
import InputText from "../../Components/Input/InputText";
import {Link} from "react-router-dom";
import OrangeBtn from "../../Components/Input/OrangeBtn";

export default function Login() {
    return (
        <Container>
            <Content>
                <InputBox>
                    <InputText placeholder={"아이디를 입력해주세요"}/>
                    <InputText placeholder={"비밀번호를 입력해주세요"}/>
                    <SmallTextBox><SmallText to={"/"}>아이디 혹은 비밀번호를 잊으셨나요?</SmallText></SmallTextBox>
                </InputBox>
                <BtnBox>
                    <OrangeBtn text={"완료"}/>
                </BtnBox>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    position: relative;
`

const Content = styled.div`
    padding: 70px 0px;
    height: 100%;
    max-width: 1000px;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    margin-top: auto;
    width: 100%;
`