import InputText from "../../Components/Input/InputText";
import styled from "styled-components";

export default function Join({onChangeId, onChangePw, onChangeRePw}) {
    return (
        <Wrap>
            <WrapInput><InputText onChange={onChangeId} placeholder={"아이디를 입력해주세요"} type={"text"} isRequired={true}/></WrapInput>
            <WrapInput>
                <InputText placeholder={"비밀번호를 입력해주세요"} type={"password"} isRequired={true} onChange={onChangePw}/>
                <SmallText>영어 소문자, 특수기호(*, &, @ 등)를 포함한 8~12</SmallText>
            </WrapInput>
            <WrapInput><InputText onChange={onChangeRePw} placeholder={"비밀번호를 다시 입력해주세요"} type={"password"} isRequired={true}/></WrapInput>
        </Wrap>
    );
}

const Wrap = styled.div`
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const WrapInput = styled.div`
    position: relative;
`

const SmallText = styled.div`
    position: absolute;
    right: 0px;
    color: #B9B7B7;
    font-size: 10px;
`