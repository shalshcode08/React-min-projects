import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  function randomColor() {
    const hex ='0123456789ABCDEF';
    let color = '#';

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }

    return color;
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex  flex-wrap justify-center gap-3 shadow-xl bg-gray-300 px-4 py-3 rounded-full'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor: "red"}}>Red</button>

          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor: "Blue"}}>Blue</button>

          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor: "Green"}}>Green</button>

          <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-md' style={{backgroundColor: "Yellow"}}>Yellow</button>

          <button onClick={()=> setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor: "purple"}}>Purple</button>

          <button onClick={()=> setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-md' style={{backgroundColor: "lavender"}}>Lavender</button>

          <button onClick={()=> setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-md' style={{backgroundColor: "white"}}>White</button>

          <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-md' style={{backgroundColor: "pink"}}>Pink</button>
          <div className='items-center font-semibold'>
            |
          </div>
          <button onClick={()=> setColor(randomColor)} className='outline-none px-4 py-1 rounded-full text-gray-800 shadow-md' style={{backgroundColor: "gray"}}>Random</button>
        </div>
      </div>
    </div>
  )
}

export default App
