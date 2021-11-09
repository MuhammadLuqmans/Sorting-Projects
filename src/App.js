import React, { useEffect , useState } from 'react'

function App() {
  const [ showText , setShowText] = useState({})
  useEffect(()=>{
    fetch(`/.netlify/functions/hello?name=from ServerLess functions`)
    .then(res=> res.json())
    .then(obj => setShowText(obj))
  })

  return (
    <div>
      Hello World
      <h2>{showText.message}</h2>
    </div>
  )
}

export default App
