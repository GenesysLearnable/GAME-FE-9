import React, {useState} from 'react'
import BkArrow from './img/bk-arrow.png'
import Coin from './img/Dollar Coin.png'
import Add from './img/add.png'
import Avatar1 from './img/Avatar (1).png'
import Avatar2 from './img/Avatar (2).png'
import { Link } from 'react-router-dom'


const Levels = [
  {
    id: 1,
    Level: 'Amateur',
    Text1: 'Stake fee',
    Stake1: 0,
    Text2: 'Reward',
    Stake2: 2000,

  },
  {
    id: 2,
    Level: 'Intermediate',
    Text1: 'Stake fee',
    Stake1: 500,
    Text2: 'Reward',
    Stake2: 1000,

  },
  {
    id: 3,
    Level: 'Master',
    Text1: 'Stake fee',
  
    Stake1: 1500,
    Text2: 'Reward',
    Stake2: 3000,

  }

];



const GameLevelWrapper = () => {

const [selectedLevel, setSelectedLevel] = useState(null);


const handleClick = (id) => {
   const Info = Levels.find((Info) => Info.id === id);
  setSelectedLevel(Info)
}

const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};


  return (
    <div className="levelWrapper">
      <div className="top-container">

        <Link to="/menu">
          <img src={BkArrow} alt="" />
        </Link>
  
        <button>
          <img src={Coin} alt="" />
          <span>2000</span>
          <img src={Add} alt="" />
        </button>
      </div>
      <h4>Choose your challenge</h4>
      <div className="level-content">

          {Levels.map((Info) => {
            return(
                <div key={Info.id} className='level-box' onClick={() => handleClick(Info.id)}>
                <h3>{Info.Level}</h3>
                <div className='box-content'>
                <h4>{Info.Text1}</h4>
                <span className='stake-fee'><img src={Coin} alt="" />{Info.Stake1}</span>
           
           <h4>{Info.Text2}</h4>
           <span className='reward'><img src={Coin} alt="" />{Info.Stake2}</span>
                </div>
                <button onClick={openModal}>Play</button>
           </div>
             
            );
  
           
             
})};
       
          
        </div>
        { isOpen &&  (
         <div className='pop-up-container'>
         <h1>{selectedLevel.Level} Challenge</h1>
         <div className='pop-content'>
          <div className='player'>
            <img src={Avatar1} alt="" />
            <h3>Smart</h3>
          </div>
          <h1>VS</h1>
          <div className='player'>
          <img src={Avatar2} alt="" />
            <h3>Lisa</h3>
          </div>
         </div>
        
         <div className='stake'>
         <h4>{selectedLevel.Text1}:</h4>
         <img src={Coin} alt="" />
         <p>{selectedLevel.Stake1}</p>
         </div>
    <div className='reward'>
    <h4>{selectedLevel.Text2}:</h4>
    <img src={Coin} alt="" />
    <p>{selectedLevel.Stake2}</p>
    </div>
   
    <span className='reward'></span>
         <button onClick={closeModal} className='cancel'>Cancel</button>
         <Link to="/dashboard"><button >Continue</button></Link>
         
    </div>
        )}
       
      </div>
     
  )
}
export default GameLevelWrapper;
