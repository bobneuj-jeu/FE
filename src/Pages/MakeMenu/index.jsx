import styled from 'styled-components';
import LogoBar from "../../Components/Bar/LogoBar";
import ExcludeDate from "./ExcludeDate";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Assets/Loding.svg";

export default function MakeMenu() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [activeBtn, setActiveBtn] = useState(() => {
        const savedButtons = localStorage.getItem('activeButtons');
        return savedButtons ? JSON.parse(savedButtons) : [];
    });
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = (buttonIndex) => {
        if (buttonIndex === 3) {
            setActiveBtn([]);
            localStorage.removeItem('activeButtons');
            navigate("/menu");
        } else {
            setActiveBtn((current) => {
                const updatedButtons = [...current, buttonIndex];
                localStorage.setItem('activeButtons', JSON.stringify(updatedButtons)); // 상태를 로컬 스토리지에 저장
                return updatedButtons;
            });

            if (buttonIndex === 1) {
                setPage(1);
            } else if (buttonIndex === 2) {
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, 3000);
            } else if (buttonIndex === 0) {
                navigate("/Fridge");
            }
        }
    };

    useEffect(() => {
        console.log("Active Buttons:", activeBtn);
    }, [activeBtn]);

    const pageList = [
        <>
            <Title>식단 짜기</Title>
            <BtnContent>
                <Img isVisible={isVisible} src={Loading} alt="Loading" />
                <Btn onClick={() => handleButtonClick(0)} isActive={activeBtn.includes(0)}>
                    재료 확인하러가기
                </Btn>
                <Btn onClick={() => handleButtonClick(1)} isActive={activeBtn.includes(1)}>
                    식단 짜지 않을 날 정하기
                </Btn>
                <Btn onClick={() => handleButtonClick(2)} isActive={activeBtn.includes(2)}>
                    AI 식단 생성
                </Btn>
                <Btn onClick={() => handleButtonClick(3)} isActive={activeBtn.includes(3)}>
                    식단 보러가기
                </Btn>
            </BtnContent>
        </>,
        <>
            <BackButton onClick={() => setPage(0)}>←</BackButton>
            <ExcludeDate />
        </>
    ];

    return (
        <Wrap>
            <LogoBar />
            <Content>
                {pageList[page]}
            </Content>
        </Wrap>
    );
}

const Img = styled.img`
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: 0.8;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    gap: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 90%;
    flex-grow: 1;
`;

const Title = styled.div`
    color: #FF8024;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.424px;
    width: 100%;
`;

const BtnContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
`;

const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19.251px;
    cursor: pointer;
    width: 100%;
    height: 75px;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.424px;
    border: ${({ isActive }) => (isActive ? '2px solid #FF8024' : '2px solid #666')};
    background-color: ${({ isActive }) => (isActive ? '#FF8024' : 'transparent')};
    color: ${({ isActive }) => (isActive ? '#fff' : '#666')};
`;

const BackButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        color: #FF8024;
    }
`;