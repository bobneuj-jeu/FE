import title from '../../Assets/Logos/title-orange.svg';
import styled from "styled-components";

export default function TopBar() {
    return (
        <Container>
            <Logo src={title} alt="Logo" />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #444444;
    position: relative;
`

const Logo = styled.img`
    position: absolute;
    height: 25px;
    bottom: 15px;
    left: 15px;
`
