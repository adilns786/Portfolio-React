import HomePage from './Sections/Hero'
import LayoutGrid from './Sections/layout'
import BentoGrid from './Sections/bento';
function App() {
  // const [count, setCount] = useState(0)
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
      thumbnail: "https://picsum.photos/800/400"
    },
    {
      id: 3,
      content: <div>This is card 2</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/300"
    },
    {
      id: 4,
      content: <div>This is card 4</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/100"
    },
    {
      id: 5,
      content: <div>This is card 5</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/200"
    },
    {
      id: 6,
      content: <div>This is card 6</div>,
      className: "card",
      thumbnail: "https://picsum.photos/800/600"
    },];
  return (
    <>
     {/* <HomePage/> */}
     {/* <HomePage/> */}
     {/* <LayoutGrid cards={cards} /> */}
     <BentoGrid/>
     {/* <HomePage/> */}
     {/* <HomePage/> */}

    </>
  )
}

export default App
