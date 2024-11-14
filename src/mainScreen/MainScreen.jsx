import React from "react";
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
    const navigate = useNavigate();

    const goTopuzzleScreen = () => {
        navigate('/puzzle'); // "/puzzle" 경로로 이동
    };

    return (
        <div className="mainScreen-container">
            <h1>
                메인 화면
            </h1>
            <h1 onClick={goTopuzzleScreen}>
                퍼즐화면
            </h1>
        </div>
    )
}

export default MainScreen;