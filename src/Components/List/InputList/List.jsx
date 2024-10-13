import styled from "styled-components";
import Item from "./Item";

export default function ({list}){
    return (
        <Wrap>
            <Ul>
                {list.map((item, index) => (<Item key={index} name={item} />))}
            </Ul>
        </Wrap>
    );
}

const Wrap = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`