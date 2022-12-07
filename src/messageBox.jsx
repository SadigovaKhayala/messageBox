import React from 'react'

export const messageBox = (arr, setArr, message, messages) => {
  const onClick = () => {
    setArr((arr) => [...arr])
    message.current.value = ''
  }

  const handleMessage = (event) => {
    event.preventDefault()
    arr.push(message.current.value)
    console.log(arr)
    onClick()
    if (message && message.current) {
      messages.current.scrollTop = messages.current.scrollHeight
    }
  }

  return (
    <div className="input">
      <form onSubmit={handleMessage}>
        <input ref={message} type="text" placeholder="Enter message "></input>
        <button>Send</button>
      </form>
    </div>
  )
}

export default messageBox
