import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import TopBar from "../../Components/Bar/TopBar";
import Pen from "../../Assets/Icons/pen.svg";
import DayRadio from "./Radio";

function MenuBox({data}) {
    const [isModify, setIsModify] = useState(false);
    const [input, setInput] = useState(data["food_item_ids"].join("\n"));
    const textarea = useRef();

    const handleResizeHeight = () => {
        textarea.current.style.height = 'auto'; //height 초기화
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };

    const onChange = (e) => {
        setInput(e.target.value);
        handleResizeHeight();
    }

    useEffect(() => {
        handleResizeHeight();
    })

    return(
        <MenuWrap>
            <MenuModify onClick={()=>setIsModify((current) => !current)}>
                <img src={Pen} alt="" />
                <div>수정하기</div>
            </MenuModify>
            <MenuContent>
                <MenuTitle>{data["meal_time"]}</MenuTitle>
                <MenuInput ref={textarea} readOnly={!isModify} value={input} onChange={onChange} />
            </MenuContent>
        </MenuWrap>
    );
}

const MenuInput = styled.textarea`
    border: none;
    outline: none;
    padding: 0;
    background: none;
    width: 100%;
    resize: none;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.308px;
    text-wrap: nowrap;
    height: auto;
    overflow: visible;
`;

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


const week = ["월", "화", "수", "목", "금", "토", "일"]

export default function Menu() {
    const now = new Date();
    const [day, setDay] = useState((now.getDay()+6)%7);
    const [Menus, setMenus] = useState([[
        {"meal_time":"아침" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"meal_time":"점심" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"meal_time":"저녁" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}
    ], [{"meal_time":"아침" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"meal_time":"점심" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"meal_time":"저녁" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}
    ], [{"meal_time":"아침" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"meal_time":"점심" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}, {"meal_time":"저녁" , "food_item_ids":["쌀밥", "하이라이스", "애느타리채소무침", "새우까스", "배추김치", "사과당근착즙주스"]}
    ]])
    const [loading, setLoading] = useState(true);
    const username = localStorage.getItem("userId");
    const [page, setPage] = useState(0);

    const getMenus = async () => {
        try{
            const response = await fetch(`/meals/${username}`, {
                method: "GET",
            })

            if(response.ok){
                const data = await response.json();
                setMenus(data);
            }
        }catch (err){
            console.log(err);
        } finally {
            setPage(day);
            setLoading(false);
        }
    }

    useEffect(() => {
        getMenus();
    }, []);

    return (
        <>
            {loading ? (<></>) : (
                <Wrapper>
                    <TopBar/>
                    <Title>이번 주 식단</Title>
                    <DayRadio
                        name="days"
                        info={week.map((dayName, index) => ({ id: index, text: dayName }))}
                        checkedIdx={day}
                    />
                    <MenusContent>
                        {Menus[page].map((data, index) => (
                            <MenuBox data={data} key={index}/>
                        ))}
                    </MenusContent>
                </Wrapper>
            )}
        </>
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