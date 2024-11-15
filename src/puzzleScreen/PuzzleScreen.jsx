import React, { useState, useEffect } from "react";
import '../css/puzzleScreen.css'

const PuzzleScreen = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [randomNumber, setRandomNumber] = useState(1); // 기본값 초기화

    // 컴포넌트가 처음 렌더링될 때만 실행하여 랜덤 숫자 설정
    useEffect(() => {
        const number = Math.floor(Math.random() * 2) + 1;
        setRandomNumber(number);
    }, []);

    // 숫자를 사용해 이미지 경로 설정
    const imagePath = `/images/${randomNumber}.jpg`;

    // 체크 상태 변경 처리 함수
    const checkHandled = (e) => {
        setIsChecked(e.target.checked); // 체크 상태를 업데이트
    };

    return (
        <div className="puzzleScreen-container">
            <div className={`puzzleScreen-blur ${isHovered ? 'blurred' : ''}`}></div>
            <div className="final-img-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imagePath} alt="완성사진" className="final-img" />
            </div>
            <div className="imgAndCheckbox-container">
                {isChecked ? <img src={imagePath} alt="흐릿한 사진" className="shadow-img" /> : null}
                <div className="img-container">
                </div>

                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={checkHandled}
                    />
                    배경표시
                </label>
            </div>

        </div>
    )
}

export default PuzzleScreen;