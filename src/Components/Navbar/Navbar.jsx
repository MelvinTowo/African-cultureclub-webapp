import React, {useState} from 'react' 
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import logo from '../../Assets/imglogo.png'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import './Navbar.scss'



const Navbar = () => {

  const[toggle, setToggle] = useState(false)

  return (
    <>
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="FACC Logo here" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {['Home', 'Team', 'Events', 'Connect', 'ContactFAC'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <CustomLink to={`/${item}`}>{item}</CustomLink>
          </li>
        ))}
      </ul>
          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.7, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['Home', 'Team', 'Events', 'Connect', 'ContactFAC'].map((item) => (
                    <li key={item}>
                      <CustomLink to={`/${item}`} onClick={() => setToggle(false)}>{item}</CustomLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
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

