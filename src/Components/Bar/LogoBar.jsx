import LogoOrange from '../../Assets/Logos/logo-orange.svg';
import styled from "styled-components";

export default function LogoBar() {
    return (
        <Container>
            <Logo src={LogoOrange}/>
        </Container>
    );
}

const Container = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: end;
`
const Logo = styled.img`
    height: 50%;
`