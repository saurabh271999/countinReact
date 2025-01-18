import { useState } from 'react'
import "./index.css"


function App() {
  const [count, setCount] = useState(0)
 
  console.log(`button is clicked ${count} times`)
  return (
   <div className='container'>
    <p>you clicked {count} times</p>
     <button className='btn'
       
      onClick={()=> setCount(count+1)}>
      
      
      click me</button>
     
      <a href="https://vite.dev/guide/">click</a>
      </div>
      
    
  )
}

export default App
