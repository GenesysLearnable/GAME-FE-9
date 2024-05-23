import React from 'react'
import { useState } from 'react'
 import avatarImg1 from '../../components/img/avatar_1.png'
 import avatarImg2 from '../../components/img/avatar_2.png'
 import avatarImg3 from '../../components/img/avatar_3.png'
 import avatarImg4 from '../../components/img/avatar_4.png'
 import avatarImg5 from '../../components/img/avatar_5.png'
import avatarImg6 from '../../components/img/avatar_6.png'
import avatarImg7 from '../../components/img/avatar_7.png'
import backArrow from '../../components/img/back_arrow.png'
import arrowLeft from '../../components/img/arrow_left.png'
import arrowRight from '../../components/img/arrow_right.png'
import './Avatar.css'

// export const Avatar = () => {
  export const Avatar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);   

  return (
    <div className='avatarContainer'>
      <div className='header'>
        <a href="Login"><img src={backArrow} alt="" /></a>
        <h3 className="loginHeader">Select your avatar</h3>
      </div>
      <div className="gridContainer">
        <div className="leftArrow">
          <a href=""><img src={arrowLeft} alt=""/></a>
        </div>
        <div className='gridItems'>
          <div>
            <img src={avatarImg1} alt="" onClick={() => setIsLoggedIn(true)}/>
          </div>
          <div>
            <img src={avatarImg2} alt="" onClick={() => setIsLoggedIn(true)}/>
          </div>
          <div>
            <img src={avatarImg3} alt="" onClick={() => setIsLoggedIn(true)} />
          </div>
          <div>
            <img src={avatarImg4} alt="" onClick={() => setIsLoggedIn(true)} />
          </div>
          <div>
            <img src={avatarImg4} alt="" onClick={() => setIsLoggedIn(true)}/>
          </div>
          <div>
            <img src={avatarImg5} alt="" onClick={() => setIsLoggedIn(true)}/>
          </div>
          <div>
            <img src={avatarImg6} alt="" onClick={() => setIsLoggedIn(true)}/>
          </div>
          <div>
            <img src={avatarImg7} alt="" onClick={() => setIsLoggedIn(true)}/>
          </div>
        </div>

        <div>
          <a href=""><img src={arrowRight} alt=""/></a>
        </div>
      </div>
      <button className='nextButton'>Next</button>
    </div>





  )
}


export default Avatar;

