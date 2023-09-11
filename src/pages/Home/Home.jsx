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
        <p>The Frisco African Culture Club welcomes individuals from all walks of life who share a passion for learning and cultural exchange. Whether you want to participate actively in our events or simply soak up the atmosphere, your presence enriches our community. Immerse yourself in the rhythms of African music, explore the flavors of diverse cuisines, and engage in thought-provoking discussions about contemporary African issues. Our club is your platform to broaden your horizons</p>
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

