import * as S from "./style"
import InputText from "../../Components/Input/InputText";
import List from "../../Components/List/InputList/List";
import {useState} from "react";

export default function OtherInfo({addInfo, delInfo, list}) {

    const [input, setInput] = useState("");

    const handleAddInfo = () => {
        if (input.trim()) {
            addInfo(input);
            setInput("");
        }
    };


    return (
        <S.Wrap>
            <S.TextBox>어떤 기타 질환이 있으신가요?</S.TextBox>
            <InputText
                placeholder={"기타질환을 입력해주세요"}
                type={"text"}
                useBtn={true}
                onClick={handleAddInfo}
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <List list={list} onClick={delInfo}/>
        </S.Wrap>
    );
}
