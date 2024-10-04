import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-3xl'>
      <InputBox/>
    </div>
  )
}

export default App 
