import styled from "styled-components";
import Item from "./Item";

export default function List({list}){
    return (
        <Wrap>
            <Ul>
                {list.map((item, index) => (<Item key={index} name={item} />))}
            </Ul>
        </Wrap>
    );
}

const Wrap = styled.div`
    overflow-y: scroll;
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    height: 100%;
`