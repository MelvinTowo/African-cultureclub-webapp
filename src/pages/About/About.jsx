import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './About.scss'
import Showcase from '../../Assets/show.mp4'
import portal from '../../Assets/portal.png'
import jollofevent from '../../Assets/event2.JPG'
import chapmanevent from '../../Assets/event1.JPG'
import faccxstandevent from '../../Assets/event3.JPG'

var threshold = 200

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const image = document.querySelector('.about_portal img');

  if (scrollPosition > threshold) {
    image.classList.add('animate-portal');
  } else {
    image.classList.remove('animate-portal');
  }
};

window.addEventListener('scroll', handleScroll);

const alignCenter = { display: 'flex', alignItems: 'center' }

const About = () => {
  return (
    <div className="about_container">
      <section className='about_showcase'>
        <div>
          <video src={Showcase} autoPlay loop muted />
        </div> 
        <h1 className='about_title'>Frisco <span className='special_text'> African Culture </span> Club</h1>
      </section>
      <div className='about_details'>
        <h1>Welcome!</h1>
      </div>
      <div className='about_members'>Club board member details</div>
      <div className='about_activites'>Club activities div</div>
    </div>
  )
}

export default About