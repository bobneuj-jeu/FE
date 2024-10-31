import * as S from "./style"
import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import {useState} from "react";

export default function Allergy() {
    const [OtherInfo, setOtherInfo] = useState([]);

    const handleAddButtonClick = (item) => {
        setOtherInfo((current) => [...current, item]);
    }
    return (
        <S.Wrap>
            <S.TextBox>어떤 기타 질환이 있으신가요?</S.TextBox>
            <InputText placeholder={"알러지를 입력해주세요"} type={"text"} useBtn={true} onClick={handleAddButtonClick}/>
            <List list={OtherInfo}/>
        </S.Wrap>
    );
}
