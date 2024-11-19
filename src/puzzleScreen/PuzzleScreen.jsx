import React, { useState, useEffect } from "react";
import PuzzlePiece from './PuzzlePiece';
import '../css/puzzleScreen.css'

const rows = 3; // 퍼즐 행 수
const cols = 3; // 퍼즐 열 수

const PuzzleScreen = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [randomNumber, setRandomNumber] = useState(1); // 기본값 초기화
    const [pieces, setPieces] = useState([]);
    const [image, setImage] = useState(null);


    // 컴포넌트가 처음 렌더링될 때만 실행하여 랜덤 숫자 설정
    useEffect(() => {
        const number = Math.floor(Math.random() * 2) + 1;
        setRandomNumber(number);

        const img = new Image();
        const imagePath = `/images/${randomNumber}.jpg`;

        img.src = imagePath;
        img.onload = () => {

        }


    }, []);


    const createPuzzlePieces = (img) => {
        const pieceWidth = img.width / cols;
        const pieceHeight = img.height / rows;
        const newPieces = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                newPieces.push({
                    id: `${row}-${col}`,
                    x: col * pieceWidth,
                    y: row * pieceHeight,
                    width: pieceWidth,
                    height: pieceHeight,
                    currentX: Math.random() * (window.innerWidth - pieceWidth), // 랜덤 위치
                    currentY: Math.random() * (window.innerHeight - pieceHeight), // 랜덤 위치
                });
            }
        }
        setPieces(newPieces);
    };



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
                <img src={image} alt="완성사진" className="final-img" />
            </div>
            <div className="imgAndCheckbox-container">
                <div className="img-container">
                    {isChecked ? <img src={image} alt="흐릿한 사진" className="shadow-img" /> : null}
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