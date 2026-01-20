import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Biodata from './components/Biodata.jsx'
import UserList from './components/UserList.jsx'
import ProfileCard from './components/ProfileCard.jsx' 
import ProfileScrollSelect from './components/ProfileScrollSelect.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <ProfileCard />
    <ProfileScrollSelect />
    </>
  )
}


export default App
