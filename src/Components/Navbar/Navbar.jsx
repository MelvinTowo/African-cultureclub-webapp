import React, {useState} from 'react' 
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import logo from '../../Assets/imglogo.png'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import './Navbar.scss'



const Navbar = () => {

  const[toggle, setToggle] = useState(false)
  const variants = {
    open: {opacity: 1, x: 0},
    closed: {opacity: 0, x: "-100%"}
  }

  return (
    <>
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="FACC Logo here" className="App-logo-spin" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {['Home', 'About', 'Connect'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <CustomLink to={`/${item}`}>{item}</CustomLink>
          </li>
        ))}
        <li><a href='https://frisco.unt.edu/' target="_blank" rel="noreferrer noopener"> UNT at Frisco</a></li>
      </ul>
          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.nav
                // whileInView={{x: [300, 0]}}
                // transition={{duration: 0.85, ease: 'easeOut'}}
                animate = {setToggle ? "open" : "closed"}
                variants = {variants}
              >
                <HiX onClick={() => setToggle(toggle => !toggle)} />
                <ul>
                  {['Home', 'About', 'Connect'].map((item) => (
                    <li key={item}>
                      <CustomLink to={`/${item}`} onClick={() => setToggle(false)}>{item}</CustomLink>
                    </li>
                  ))}
                    <li><a href='https://frisco.unt.edu/' target="_blank" rel="noreferrer noopener"> UNT at Frisco</a></li>

                </ul>
              </motion.nav>
            )}
          </div>
      </nav>
    </>
  )
}

export default Navbar

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""} >
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
    )
  
}

