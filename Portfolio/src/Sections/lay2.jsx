import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    content: <div>This is card 1</div>,
    className: "card",
    thumbnail: "https://picsum.photos/800/600"
  },
  {
    id: 2,
    content: <div>This is card 2</div>,
    className: "card",
    thumbnail: "https://example.com/thumbnail2.jpg"
  },
  // Add more cards as needed
];

const LayoutGrid = () => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={`card ${selected?.id === card.id ? "selected" : ""}`}>
          <motion.div
            onClick={() => handleClick(card)}
            className={`card ${selected?.id === card.id ? "selected" : ""}`}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={`overlay ${selected?.id ? "pointer-events-auto" : "pointer-events-none"}`}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={`thumbnail ${loaded ? "blur-none" : "blur-md"}`}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="selected-card">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="overlay"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="content"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export default LayoutGrid;
