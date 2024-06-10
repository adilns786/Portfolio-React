import React, { useState, useEffect } from 'react';
import axios from 'axios';
import itemsData from '../assets/data.json';
import { extra } from '../Animations/flip';
import { Flip } from 'gsap/all';

const ItemGrid = () => {
  const [boxData, setBoxData] = useState([]);
  const [oldboxdata,setoldboxdata]=useState(boxData);
  const totalCols = 12;
  const totalRows = 10;

  useEffect(() => {
    fetchBoxData();
    // console.log(itemsData)
  }, []);

  const fetchBoxData = async (state) => {
    try {
      const response = await axios.get('http://localhost:5000/api/boxdata');
      console.log(response.data)
      setoldboxdata(boxData);
      setBoxData(response.data);
      // try{extra(state);}catch(error){
      //   console.log(error)
      // }
    } catch (error) {
      setoldboxdata(boxData);
      setBoxData([{ 'id': 1, 'x': 5, 'y': 4, 'width': 2, 'height': 4, 'priority': 1 }, { 'id': 2, 'x': 0, 'y': 2, 'width': 4, 'height': 3, 'priority': 1 }, { 'id': 3, 'x': 2, 'y': 5, 'width': 3, 'height': 2, 'priority': 2 }, { 'id': 4, 'x': 0, 'y': 0, 'width': 3, 'height': 2, 'priority': 2 }, { 'id': 5, 'x': 4, 'y': 0, 'width': 3, 'height': 2, 'priority': 2 }])
      console.error('Error fetching box data:', error);
    }
  };
  useEffect(() => {

  }, [boxData])
  const handleRandomPlacement = () => {
    var state = Flip.getState(".griditem , .gridbox ",{props:"gridColumn, gridRow"})
    // extra(".gridbox")
    fetchBoxData(state)
    // extra(state);
    // Implement your logic for random placement here if needed
  };
  var wheight = window.innerHeight / 8;
  return (
    <div className='flex justify-center items-center  w-full h-full '>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute z-10" onClick={handleRandomPlacement}>
        Place Boxes
      </button>
      <div className="gridbox grid gap-1 h-full w-full" style={{
        backgroundColor: "",
        display: 'grid',
        gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))`,
        transition:"all 1s ease-in-out",
        // height: `90vh`, 
        // width: `50vw`,  
      }}>
        {Array.from({ length: totalCols * totalRows }, (_, index) => {
          const currentBox = boxData.find(box => box.id === index + 1);
          if (currentBox) {
            // console.log(currentBox, index)
            const { x, y, width, height } = currentBox;
            return (
              <div
                key={index}
                className={`griditem border border-gray-500 overflow-hidden relative group`}
                style={{
                  gridColumn: `${x + 1} / span ${width}`,
                  gridRow: `${y + 1} / span ${height}`,
                  height: { wheight },
                  width: { wheight },
                  borderRadius: "10px",
                  backgroundColor: "white",
                  transition:"all 1s ease-in-out",

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
    </div>
  );
};

export default ItemGrid;
