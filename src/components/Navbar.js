import React from 'react'
import "../css/navbar.css"
import video from "../assests/bgvideo.mp4"
function Navbar() {
  return (
    <div>
    
      <video src={video} autoPlay muted loop>
      </video>
      <div className='navbar'>
        <div className="absolute">
          <div className='left'>
              <div className='logo'>
                Trinal
              </div>
          </div>
          <div className='right'>
            <ul className='top'>
                <li className='tags'>Home</li>
                <li className='tags'>About</li>
                <li className='tags'>Service</li>
                <li className='tags'>Contact Us</li>
            </ul>
          </div>
          <div className="mid">
            <div className="centreit">
          <div className="content">
              <h1>Trinal web</h1>
              <p>Connecting WEB 3.0 in the Novel Era of Internet</p>
              </div>
          </div>
      </div>
     
    </div>
    
  </div>
    
  </div>
  )
}

export default Navbar