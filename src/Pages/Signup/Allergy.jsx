import * as S from "./style"
import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import {useState} from "react";

export default function Allergy({addAllergy, delAllergy, list}) {
    const [input, setInput] = useState("");

    const handleAddAllergy = () => {
        if (input.trim()) {
            addAllergy(input);
            setInput(""); // 입력 후 초기화
        }
    };

    return (
        <S.Wrap>
            <S.TextBox>어떤 알러지가 있으신가요?</S.TextBox>
            <InputText
                placeholder={"알러지를 입력해주세요"}
                type={"text"}
                useBtn={true}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={(e)=>(handleAddAllergy())}
            />
            <List list={list} onClick={delAllergy}/>
        </S.Wrap>
    );
}

