import styled from "styled-components";
import {useState} from "react";
import TopBar from "../../Components/Bar/TopBar";
import Pen from "../../Assets/Icons/pen.svg";
import DayRadio from "./Radio";

function MenuBox({time, menu}) {
    return(
        <MenuWrap>
            <MenuModify>
                <img src={Pen} alt="" />
                <div>수정하기</div>
            </MenuModify>
            <MenuContent>
                <MenuTitle>{time}</MenuTitle>
                <MenuInfo>
                    {menu.map(item => (<li>{item}</li>))}
                </MenuInfo>
            </MenuContent>
        </MenuWrap>
    );
}

const MenuWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuModify = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;
    color: #666;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.22px;
`

const MenuContent = styled.div`
    border-radius: 10px;
    border: 2px solid #FF8024;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

const MenuTitle = styled.div`
    border-bottom: 2px solid #FF8024;
    color: #FF8024;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.33px;
    background: none;
`

const MenuInfo = styled.ul`
    color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.308px;
    background: none;
`

const week = ["월", "화", "수", "목", "금", "토", "일"]

export default function Menu() {
    const now = new Date();
    const [day, setDay] = useState((now.getDay()+6)%7);
    const [Menus, setMenus] = useState([{"time":"아침" , "menu":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"time":"점심" , "menu":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"time":"저녁" , "menu":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}])
    return (
        <Wrapper>
            <TopBar/>
            <Title>이번 주 식단</Title>
            <DayRadio
                name="days"
                info={week.map((dayName, index) => ({ id: index, text: dayName }))}
                checkedIdx={day}
            />
            <MenusContent>
                {Menus.map(({time, menu}, index) => (
                    <MenuBox time={time} menu={menu} key={index}/>
                ))}
            </MenusContent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 92%;
`

const Title = styled.div`
    color: #FF8024;
    font-size: 25px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.55px;
`

const MenusContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 75%;
    max-height: 60%;
    overflow-y: scroll;
`