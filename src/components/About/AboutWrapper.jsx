import React from 'react'
import BkArrow from '../GameLevel/img/bk-arrow.png'

function AboutWrapper() {
  return (
    <div className='About'>
         <div className="top-content">
            <a href="LandingPage"><img src={BkArrow} alt="" /></a>

<h3>About</h3>
</div>
<div className="about-container">
<p>Welcome to Ayo, a vibrant world where adventure meets strategy!
At Ayo, we're passionate about crafting immersive gaming experiences that transport players to exciting new realms. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver unforgettable gameplay moments.
Inspired by the rich cultural heritage of traditional Ayo games, our digital adaptation brings this beloved pastime into the modern age. Whether you're a seasoned strategist or a casual player, Ayo offers something for everyone.
Embark on a journey through lush landscapes, encountering challenges and forging alliances along the way. With intuitive controls and captivating visuals, Ayo invites you to explore, strategize, and triumph in a world brimming with possibility.
Join us as we continue to evolve and expand the Ayo universe, delivering fresh content and thrilling adventures to players around the globe. Thank you for choosing Ayo – let the games begin!</p>
</div>

    </div>
  )
}

export default AboutWrapper