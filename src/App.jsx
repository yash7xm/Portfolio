import './App.css'
import Sidebar from './Components/Sidebar'
import Projects from './Components/Projects'
import About from './Components/About'
import { useState } from 'react'


function App() {

  const [content, setContent] = useState(0);

  const changeContent = (newContent) => {
    console.log(newContent);
    setContent(newContent);
  }

  return (
    <div className="app">
      <Sidebar changeContent={changeContent} />
      {content === 0 ?
        <Projects/> :
        <About />}
    </div>
  )
}

export default App
