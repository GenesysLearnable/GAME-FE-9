
import React, { useState } from "react";
import BkArrow from '../../components/img/back_arrow.png'
import './NickName.css';

export const NickName = () => {
  const [newName, setNewName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();


  }
  return (

      <div className='loginContainer'>
        <div className='header'>
        <a href="Login"><img src={BkArrow} alt="" /></a>
          <h3 className="nickName">Your Nickname</h3>
          
        </div>

        <form onSubmit = {handleSubmit}>
          <div className='input'>
            <div className='inputItems'>
              <input value= {newName} type='text' placeholder='Enter your Nickname'/>
            </div>
            <button className="submitButton" type="submit">Next</button>

          </div>

          
        </form>
      </div>
  )
}

export default NickName;
