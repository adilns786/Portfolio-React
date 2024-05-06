import React, { useState, useRef, useEffect } from 'react';
import { RotateDown, clearAnimation } from '../Animations/hero';


function LayoutGrid({ cards }) {
  const [selected, setselect] = useState(null);
  const div1ref = useRef(null)

  useEffect(() => {
    const element = div1ref.current;
    if (element) {
      // RotateDown(div1ref.current)
      // Your animation code here
    }
  }, []);

  function Handleclick(id) {

  }

  return (
    <div className="flex justify-center mt-32 h-full bg-green-500">
      <div ref={div1ref} className="layout grid grid-cols-3 gap-10 w-3/4 h-full p-4 bg-blue-500 " style={{ backgroundColor: "" }}>
        {cards.map((card, id) => (
          <div
            className={`${selected?.id == card.id ? "select" : ""} card w-full aspect-w-1 aspect-h-1 flex flex-col text-white bg-red-700 overflow-hidden`}
            key={id}
            style={{ borderRadius: "10px", border: "0pt solid red" }}
            onClick={Handleclick(id)}
          >
            <img src={card.thumbnail} className="object-cover w-full h-full" />
            {/* <div className='flex justify-center'>{card.content}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutGrid;
