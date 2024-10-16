import styled from "styled-components";
import OrangeBtn from "../../Components/Input/OrangeBtn";
import React, {useState} from "react";
import Join from "./Join";
import Allergy from "./Allergy";
import Diabetes from "./Diabetes";
import OtherInfo from "./OtherInfo";
import LogoBar from "../../Components/Bar/LogoBar";

export default function Signup() {
    const pageList = [
        <Join/>,
        <Allergy/>,
        <Diabetes/>,
        <OtherInfo/>,
    ]
    const [page, setPage] = useState(0);
    const onClickHandler = () => {
        if (page>=pageList.length-1) {}
        else {
            setPage((current) => current + 1);
        }
    }
    return (
        <Container>
            <LogoBar/>
            <Content>
                <Page>
                    {pageList[page]}
                </Page>
                <OrangeBtn text={page >= pageList.length-1? "완료" : "다음"} onClick={onClickHandler} />
            </Content>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const Content = styled.div`
    height: 80vh;
    max-width: 1000px;
    width: 85%;
    display: flex;
    flex-direction: column;
`

const Page = styled.div`
    flex-grow: 1;
    height: 80%;
`