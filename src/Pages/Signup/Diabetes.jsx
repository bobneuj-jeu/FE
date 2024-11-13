import * as S from './style';
import Radio from "../../Components/Input/Radio";

export default function Diabetes({onChange}) {
    return (
        <S.Wrap onChange={onChange}>
            <S.TextBox>어떤 당뇨가 있으신가요?</S.TextBox>
            <Radio text={"1형 당뇨"} checked={true} id={"1형당뇨"} name={"Diabetes"}/>
            <Radio text={"2형 당뇨"} id={"2형당뇨"} name={"Diabetes"}/>
            <Radio text={"임신 당뇨"} id={"임신당뇨"} name={"Diabetes"}/>
            <Radio text={"기타 당뇨"} id={"기타당뇨"} name={"Diabetes"}/>
            <Radio text={"해당 사항 없음"} id={"당뇨없음"} name={"Diabetes"}/>
        </S.Wrap>
    );
}