import styled from "styled-components";



function CheckBox({id, name, time}){
    return(
        <CheckWrapper>
            <CheckText>{time}</CheckText>
            <RealCheckBox type={"checkbox"} id={id} name={name} />
            <CustomCheckBox htmlFor={id}></CustomCheckBox>
        </CheckWrapper>
    );
}
const CheckWrapper = styled.div`
    width: 90%;
    height: 50px; /* 크기 고정 */
    display: flex;
    justify-content: space-between; /* 수정: 요소 간격 자동 조정 */
    align-items: center; /* 가운데 정렬 */
    padding: 10px; /* 내부 여백 추가 */
    border-radius: 10px;
    border: 1px solid #B9B7B7;
`

const CheckText = styled.div`
    color: #FF8024;
    font-size: 20px;
    font-weight: 700;
`

const RealCheckBox = styled.input`
    display: none;
`

const CustomCheckBox = styled.label`
    width: 30px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #B9B7B7;
    ${RealCheckBox}:checked + & {
        background: #FF8024;
        border-color: #FF8024;
    }
`


function CheckBoxContent({day}){
    return(
        <DayWrap>
            <DayContent>{day}</DayContent>
            <TimeContent>
                <CheckBox name={"11111"} id={day+"1"} time={"아침"}/>
                <CheckBox name={"11111"} id={day+"2"} time={"점심"}/>
                <CheckBox name={"11111"} id={day+"1"} time={"저녁"}/>
            </TimeContent>
        </DayWrap>
    );
}

const DayWrap = styled.div`
    width: 100%;
    border-radius: 10px;
    border: 1px solid #666;
    display: flex;
`

const DayContent = styled.div`
    padding: 0 10px;
    display: flex;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #666;
    font-size: 20px;
    font-weight: 700; 
`

const TimeContent = styled.div`
    border-left: 1px solid black;
    width: calc(100% - 100px);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

export default function ExcludeDate() {
    return (
        <Wrapper>
            <ExcludeTitle>제외할 요일</ExcludeTitle>
            <DaysList>
                {days.map((day) => (
                    <CheckBoxContent day={day} key={day}/>
                ))}
            </DaysList>
        </Wrapper>
    );
}
const ExcludeTitle = styled.div`
    color: #FF8024;
    font-size: 15px;
    font-weight: 700;
    line-height: 150%; /* 22.5px */
    letter-spacing: -0.33px;
`

const DaysList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 0 10px;
`