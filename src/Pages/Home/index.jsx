import styled from "styled-components";
import LogoBar from "../../Components/Bar/LogoBar";
import {useState} from "react";
import LunchBox from "../../Assets/Icons/LunchBox.svg";
import {Link, useNavigate} from "react-router-dom";
import Bad from "../../Assets/Icons/bad.svg"
import Good from "../../Assets/Icons/good.svg"
import Soso from "../../Assets/Icons/soso.svg"

export default function Home() {
    const navigate = useNavigate();
    const [Menus, setMenus] = useState([]);
    const [rate, setRate] = useState({rate: 0, state: Bad, color: "#C62828", text: "노력이 필요해요"});
    return (
        <Wrapper>
            <LogoBar/>
            <Content>
                <MenuWrapper>
                    <MenuHead>오늘의 식단</MenuHead>
                    <Menu>
                        <MenuBox borderColor="#FF8024" borderRadius={"20px"} zIndex={3} location={"start"}>
                            <MenuContent>
                                <MenuTitle>아침</MenuTitle>
                                <MenuList>
                                    {Menus.map(menu => <li>{menu}</li>)}
                                </MenuList>
                            </MenuContent>
                        </MenuBox>
                        <MenuBox borderColor="#666" borderRadius={"25px"} zIndex={2} location={"center"}></MenuBox>
                        <MenuBox borderColor="#666" borderRadius={"30px"} zIndex={1} location={"end"}></MenuBox>
                    </Menu>
                </MenuWrapper>
                <BtnContents>
                    <BigBtn to={"./makeMenu"}>
                        <img src={LunchBox} alt={"사진"}/>
                        <BtnText>식단 짜기</BtnText>
                    </BigBtn>
                    <BigBtn>
                        <BtnText fontSize={"11px"}>이번달 성공률은</BtnText>
                        <Emoji>
                            <BtnText color={rate["color"]}>{rate["rate"]}%</BtnText>
                            <img src={rate["state"]} alt={""} width={"90px"}/>
                        </Emoji>
                        <BtnText color={rate["color"]}>{rate["text"]}</BtnText>
                    </BigBtn>
                </BtnContents>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    flex-grow: 1;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 70%;
`

const MenuHead = styled.div`
    text-align: center;
    color: #666;
    font-weight: 700;
    line-height: 150%;
`

const Menu = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    display: grid;
`

const MenuBox = styled.div`
    position: absolute;
    align-self: ${(props) => props.location || "center"};
    justify-self: ${(props) => props.location || "center"};
    width: 95%;
    height: 93%;
    border-radius: ${(props) => props.borderRadius || "20px"};
    border: 2px solid ${(props) => props.borderColor || "#FFF"};
    background: #FFF;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.10);
    z-index: ${(props) => props.zIndex || 1};  /* 겹치는 순서 조정 */
`

const MenuContent = styled.div`
    display: flex;
    padding: 10px 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    background: none;
`

const MenuTitle = styled.div`
    text-align: center;
    color: #FF8024;
    border-bottom: 1px solid #FF8024;
    width: 100%;
    line-height: 150%;
`

const MenuList = styled.ul`
    color: #666;
    font-size: 13px;
    line-height: 150%;
    height: 130px;
    width: 100%;
    overflow-y: scroll;
`

const BtnContents = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
    justify-content: center;
`

const BigBtn = styled(Link)`
    cursor: pointer;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.25);
    width: 48%;
    height: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const BtnText = styled.div`
    color: ${(props) => props.color || "#666"};
    text-align: center;
    font-size: ${(props) => props.fontSize || "20px"};
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.44px;
`

const Emoji = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`