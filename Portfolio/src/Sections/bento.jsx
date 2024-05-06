import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BentoGrid = () => {
    const [boxData, setBoxData] = useState([]);
    const totalCols = 8;
    const totalRows = 8;

    useEffect(() => {
        fetchBoxData();
    }, []);

    const fetchBoxData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/boxdata');
            // console.log(response.data)
            setBoxData(response.data);
        } catch (error) {
            setBoxData([{'id': 1, 'x': 5, 'y': 4, 'width': 2, 'height': 4, 'priority': 1}, {'id': 2, 'x': 0, 'y': 2, 'width': 4, 'height': 3, 'priority': 1}, {'id': 3, 'x': 2, 'y': 5, 'width': 3, 'height': 2, 'priority': 2}, {'id': 4, 'x': 0, 'y': 0, 'width': 3, 'height': 2, 'priority': 2}, {'id': 5, 'x': 4, 'y': 0, 'width': 3, 'height': 2, 'priority': 2}])
            console.error('Error fetching box data:', error);
        }
    };

    const handleRandomPlacement = () => {
        fetchBoxData()
        // Implement your logic for random placement here if needed
    };

    const getBgColor = (priority) => {
        switch (priority) {
            case 1:
                return 'red-200';
            case 2:
                return 'green-200';
            default:
                return 'gray-200';
        }
    };
    var wheight = window.innerHeight / 8;
    return (
        <>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRandomPlacement}>
                Place Boxes
            </button>
            <div className="grid gap-2" style={{
                backgroundColor: "white",
                display: 'grid',
                gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))`,
                height: `100vh`, // Assuming each row has a height of 40px
                width: `100vh`,   // Assuming each column has a width of 40px
            }}>
                {Array.from({ length: totalCols * totalRows }, (_, index) => {
                    const currentBox = boxData.find(box => box.id === index + 1);
                    if (currentBox) {
                        const { x, y, width, height } = currentBox;
                        return (
                            <div
                                key={index}
                                className={`bg-${getBgColor(currentBox.priority)} border border-gray-500 p-2 `}
                                style={{
                                    gridColumn: `${x + 1} / span ${width}`,
                                    gridRow: `${y + 1} / span ${height}`,
                                    height: { wheight },
                                    width: { wheight }
                                }}
                            >
                                {/* You can add box content here if needed */}
                            </div>
                        );
                    } else {
                        return
                    }
                })}
            </div>
        </>
    );
};

export default BentoGrid;


// const [boxData, setBoxData] = useState([
//     { id: 1, x: 0, y: 0, width: 4, height: 3, priority: 1 },
//     { id: 2, x: 0, y: 0, width: 4, height: 3, priority: 1 },
//     { id: 3, x: 0, y: 0, width: 3, height: 2, priority: 2 },
//     { id: 4, x: 0, y: 0, width: 3, height: 2, priority: 2 },
//     { id: 5, x: 0, y: 0, width: 3, height: 2, priority: 2 }
// ]);
// const totalCols = 8;
// const totalRows = 12;

// const handleRandomPlacement = () => {
//     const gridData = Array.from({ length: totalCols }, () => Array(totalRows).fill(0));

//     const checkOverlap = (x, y, w, h) => {
//         for (let i = x; i < x + w; i++) {
//             for (let j = y; j < y + h; j++) {
//                 if (i >= totalCols || j >= totalRows || gridData[i][j] !== 0) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     };

//     const generateRandomPosition = (w, h) => {
//         const x = Math.floor(Math.random() * (totalCols - w + 1));
//         const y = Math.floor(Math.random() * (totalRows - h + 1));
//         return [x, y];
//     };

//     boxData.forEach(box => {
//         let x, y;
//         do {
//             [x, y] = generateRandomPosition(box.width, box.height);
//         } while (!checkOverlap(x, y, box.width, box.height));

//         box.x = x;
//         box.y = y;

//         for (let i = x; i < x + box.width; i++) {
//             for (let j = y; j < y + box.height; j++) {
//                 gridData[i][j] = box.id;
//             }
//         }
//     });

//     setBoxData([...boxData]);
// };