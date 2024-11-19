import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const PuzzlePiece = ({ piece, image, onDrop }) => {
    const { id, x, y, width, height, currentX, currentY } = piece;

    // 드래그 설정
    const [, dragRef] = useDrag({
        type: 'PUZZLE',
        item: { id, currentX, currentY },
    });

    // 드롭 설정
    const [, dropRef] = useDrop({
        accept: 'PUZZLE',
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            if (offset) {
                const newX = offset.x - width / 2;
                const newY = offset.y - height / 2;
                onDrop(id, newX, newY);
            }
        },
    });

    const clipPath = `polygon(
    0% 0%, 25% 5%, 50% 0%, 75% 5%, 100% 0%, 
    95% 25%, 100% 50%, 95% 75%, 100% 100%, 
    75% 95%, 50% 100%, 25% 95%, 0% 100%, 
    5% 75%, 0% 50%, 5% 25%
  )`;

    return (
        <div
            ref={(node) => dragRef(dropRef(node))}
            style={{
                position: 'absolute',
                left: currentX,
                top: currentY,
                width,
                height,
                backgroundImage: `url(${image.src})`,
                backgroundPosition: `-${x}px -${y}px`,
                backgroundSize: `${image.width}px ${image.height}px`,
                clipPath,
                cursor: 'grab',
            }}
        ></div>
    );
};

export default PuzzlePiece;