import { React, useRef, useState, useEffect } from 'react'
import messageBox from './messageBox'
import './App.css'

function App() {
  let message = useRef('')
  const [arr, setArr] = useState([])
  const messages = useRef('')

  return (
    <div className=" container">
      <div className="messages" ref={messages}>
        {arr.map((el) => {
          return <div className="sendedMessage">{el}</div>
        })}
      </div>

      <>{messageBox(arr, setArr, message, messages)}</>
    </div>
  )
}

export default App
