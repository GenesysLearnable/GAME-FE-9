
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BkArrow from '../GameLevel/img/bk-arrow.png'

function Avatar() {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ayo-ayo.onrender.com/api/v1/avatar-list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setAvatars(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='load'>Loading...</div>;
  }

  if (error) {
    return <div className='load'>Error: {error.message}</div>;
  }

  
// console.log(avatars);
  return (
    <div className='container'>

<Link to="/Nickname">
<img src={BkArrow} alt="" />
</Link>


     <h3>Select your Avatar</h3>
      <div className='img-container'>
        
      {
        avatars.map((data, id) => {
            return (
                
                <div>
 <img src={data.avatar_url} alt=""  key={id} onClick={() => setIsLoggedIn(true)}/>
                </div>
              
            )
           
        })
      }
      </div>
      {
        isLoggedIn && <div className="btn">
        <Link to="/Level">
        <button >Next</button>
        </Link>
        </div>
      }
      
     
    </div>
  );
};

export default Avatar;
