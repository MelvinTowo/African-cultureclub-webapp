import React from 'react'
import './Home.scss'
import logo from '../../Assets/imglogo.png'

const Home = () => {

  return (
    <div className="app__home app__flex">
      <section className="app__home-splash">
        <div className="app__home-splash-title">
          <h1 className="head-text">FACC</h1>
        </div>
      </section>
      <section className="app__home-aboutus">
        <div>
          <h1 className="head-text">about us</h1>
          <div className="app__home-aboutus-img">
            <img src={logo} alt="Facc png logo here" />
          </div>
        </div>
        <div>
          <p className="app__home-aboutus-text p-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis. Malesuada nunc vel risus commodo viverra maecenas accumsan. Quisque non tellus orci ac auctor augue mauris. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Molestie a iaculis at erat pellentesque adipiscing. Suspendisse faucibus interdum posuere lorem. Mattis rhoncus urna neque viverra justo nec ultrices. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Mi eget mauris pharetra et ultrices neque ornare aenean. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Habitasse platea dictumst vestibulum rhoncus. Accumsan tortor posuere ac ut consequat semper viverra. Elementum curabitur vitae nunc sed velit dignissim. </p>
        </div>
      </section>
    </div>
  )
}

export default Home

