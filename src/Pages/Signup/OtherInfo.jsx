import * as S from "./style"
import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import {useState} from "react";

export default function OtherInfo() {
    const [OtherInfo, setOtherInfo] = useState([]);

    const handleAddButtonClick = (item) => {
        setOtherInfo((current) => [...current, item]);
    }

    const handleDelButtonClick = (itemToDelete) => {
        setOtherInfo((current) => current.filter(item => item !== itemToDelete));
    }

    return (
        <S.Wrap>
            <S.TextBox>어떤 기타 질환이 있으신가요?</S.TextBox>
            <InputText placeholder={"기타질환을 입력해주세요"} type={"text"} useBtn={true} onClick={handleAddButtonClick}/>
            <List list={OtherInfo} onClick={handleDelButtonClick}/>
        </S.Wrap>
    );
}
