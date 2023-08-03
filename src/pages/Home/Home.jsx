import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
import logo from '../../Assets/imglogo.png'
import { motion } from 'framer-motion'

const Home = () => {

  return (
   <>
    <div className='home_container'>
      <div className = "home_description">
        <div className="home_description.logo">
          <img src={logo} alt="facc logo" className="home_facclogo" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <Link to="/About">
       <motion.button
          whileHover={{scale: 1.2}}
          whileTap = {{scale: 0.5}}
        > Learn more! </motion.button>
       </Link>
      </div>
      <div className="home_imagegrid">
        <motion.div 
        whileHover={{scale: 1.2}}
        className="frame1"> 
        </motion.div>
        <motion.div whileHover={{scale: 1.2}}
        className="frame2">
        </motion.div>
        <motion.div whileHover={{scale: 1.2}}
        className="frame3">
        </motion.div>
      </div>
    </div>
   </>
  )
}

export default Home

