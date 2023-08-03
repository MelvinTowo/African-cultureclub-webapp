import React, {useState, useEffect } from 'react';
import {Navbar} from './Components'
import './App.scss';
import {Home, About, Connect} from './pages'
import { Footer } from './Container';
import{Route, Routes} from 'react-router-dom'
import {motion} from 'framer-motion'
import { WiDaySunny, WiMoonWaxingCrescent3 } from "react-icons/wi";

function App() {

  // Darkmode implementation
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light')
    {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  }

  return (
   <>
      <div>
        <Navbar />
      </div>
      <div className={`app ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path ="/Connect" element={<Connect />} />
        </Routes>
          <div className='darkMode' onClick={toggleTheme}>
          <WiDaySunny />
            <div className='switch' data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className='handle' layout transition={spring} />
            </div>
            <WiMoonWaxingCrescent3 />
          </div>
      </div>
      <div>
        <Footer />
      </div>
   </>
  );
}

export default App;
