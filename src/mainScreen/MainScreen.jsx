import React from "react";
import { useNavigate } from 'react-router-dom';
import * as S from'./MainScreen.style';
import ReactDOM from 'react-dom';
import Snowfall from 'react-snowfall';


const MainScreen = () => {
    const navigate = useNavigate();

    const goTopuzzleScreen = () => {
        navigate('/puzzle'); // "/puzzle" 경로로 이동
    };

    return (
        <S.Container>
            <Snowfall snowflakeCount={150} 
                style={{ zIndex: 10 }} 
                speed={[0.01, 0.8]} 
                radius={[1.5, 3]} />
            <S.Header>Puzzle Game</S.Header>
            <S.ImgSection>
            </S.ImgSection>
            <h1 onClick={goTopuzzleScreen}>
                퍼즐화면
            </h1>
        </S.Container>
    )
}

export default MainScreen;