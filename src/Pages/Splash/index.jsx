import './style.css'
import styled from 'styled-components';
import LogoImg from '../../Assets/Logos/logo-white.svg';

export default function Splash() {
    return (
        <Container>
            <Logo src={LogoImg} alt="Logo" />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    position: relative;
    top: -2vh;
    max-height: 50vh;
    width: 40%;
`;