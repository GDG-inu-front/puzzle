import React, { useState, useEffect } from "react";
import '../css/puzzleScreen.css'

const PuzzleScreen = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomNumber, setRandomNumber] = useState(1); // 기본값 초기화

    // 컴포넌트가 처음 렌더링될 때만 실행하여 랜덤 숫자 설정
    useEffect(() => {
        const number = Math.floor(Math.random() * 2) + 1;
        setRandomNumber(number);
    }, []);

    // 숫자를 사용해 이미지 경로 설정
    const imagePath = `/images/${randomNumber}.jpg`;

    return (
        <div className="puzzleScreen-container">
            <div className={`puzzleScreen-blur ${isHovered ? 'blurred' : ''}`}></div>
            <div className="final-img-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imagePath} alt="완성사진" className="final-img" />
            </div>
            <div className="img-container">
                <img src="" alt="퍼즐사진" />
            </div>
        </div>
    )
}

export default PuzzleScreen;