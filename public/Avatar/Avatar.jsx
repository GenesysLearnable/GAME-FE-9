import React from 'react'
import { useState } from 'react'
import avatarImg1 from '../img/Avatar(1).png'
import avatarImg2 from '../img/Avatar(2).png'
import avatarImg3 from '../img/Avatar(3).png'
import avatarImg4 from '../img/Avatar(4).png'
import avatarImg5 from '../img/Avatar(5).png'
import avatarImg6 from '../img/Avatar(6).png'
import avatarImg7 from '../img/Avatar(7).png'
import avatarImg8 from '../img/Avatar(5).png'
import BkArrow from '../GameLevel/img/bk-arrow.png'

function Avatar()  {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
        <div className="container">

    
            <a href="Login"><img src={BkArrow} alt="" /></a>

<h3>Select your Avatar</h3>
<div className="img-container">
    
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
    <img src={avatarImg5} alt="" onClick={() => setIsLoggedIn(true)}/>
    </div>
    <div>
    <img src={avatarImg6} alt="" onClick={() => setIsLoggedIn(true)}/>
    </div>
    <div>
    <img src={avatarImg7} alt="" onClick={() => setIsLoggedIn(true)}/>
    </div>
    <div>
    <img src={avatarImg8} alt="" onClick={() => setIsLoggedIn(true)}/>
    </div>
</div>
{
   isLoggedIn && <div className="btn">
<button>Next</button>
</div>
}


</div>
        </>
       
    )

    
    }
  



export default Avatar