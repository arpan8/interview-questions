import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { explorer } from './config/constant'
import Folder from './components/Folder'
import "./styles.css";
function App() {
  const [explorerData] = useState(explorer)

  return (
    <>
      <Folder explorer = {explorerData}/>
    </>
  )
}

export default App
