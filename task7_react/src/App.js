import React from 'react';
import './App.css';

import imageSrc1 from './assets/image-hero.jpg';
import imageSrc2 from './assets/image-interactive.jpg';
import imageSrc3 from './assets/image-deep-earth.jpg';
import imageSrc4 from './assets/image-night-arcade.jpg';
import imageSrc5 from './assets/image-soccer-team.jpg';
import imageSrc6 from './assets/image-grid.jpg';
import imageSrc7 from './assets/image-from-above.jpg';
import imageSrc8 from './assets/image-pocket-borealis.jpg';
import imageSrc9 from './assets/image-curiosity.jpg';
import imageSrc10 from './assets/image-fisheye.jpg';
import imageSrc11 from './assets/icon-facebook.svg';
import imageSrc12 from './assets/icon-twitter.svg';
import imageSrc13 from './assets/icon-pinterest.svg';
import imageSrc14 from './assets/icon-instagram.svg';


function App() {
  return (
    <div className='MyPage'>
    
    <nav className='nav-bar'>

    <h1 className='logo'>Loopstudios</h1>
    <ul className='links'>
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>

    </ul>

    </nav>
      <div className='main1'>
        <img src={imageSrc1} alt="image-hero" />
        <p>
        Immersive experiences that deliver
        </p>
      </div>

      <div className='main2'>
         <img src={imageSrc2} alt="image-interactive" />
        <div>
        <p className='p1'>The leader in interactive VR</p>
        <p className='p2'>
        Founded in 2011, Loopstudios has been producing world-class virtual reality 
        projects for some of the best companies around the globe. Our award-winning 
        creations have transformed businesses through digital experiences that bind 
        to their brand.
        </p>
        </div> 
       
      
       </div>

       <div className='main3'>
       <p>Our creations</p>
       <button>See all</button>
       </div>

       <div className='main4'>
       <div className='imges'>
       <div className='img1'>
       <img src={imageSrc3} alt="image-deep-earth" />
       <p>Deep earth</p>
       </div>
       <div className='img1'>
       <img src={imageSrc4} alt="image-deep-earth" />
       <p>Night arcade</p>
       </div><div className='img1'>
       <img src={imageSrc5} alt="image-deep-earth" />
       <p>Soccer team VR</p>
       </div><div className='img1'>
       <img src={imageSrc6} alt="image-deep-earth" />
       <p>The grid</p>
       </div><div className='img1'>
       <img src={imageSrc7} alt="image-deep-earth" />
       <p>From up above VR</p>
       </div><div className='img1'>
       <img src={imageSrc8} alt="image-deep-earth" />
       <p>Pocket borealis</p>
       </div><div className='img1'>
       <img src={imageSrc9} alt="image-deep-earth" />
       <p>The curiosity</p>
       </div>
       <div className='img1'>
       <img src={imageSrc10} alt="image-deep-earth" />
       <p>Make it fisheye</p>
       </div>
       </div>
       
       
       <div className='namesOfImges'>
       
      
       </div>
       

       </div>

       <footer className='footer'>
        <div className='section1'>
           <h1 className='logo2'>Loopstudios</h1>
           <ul className='links2'>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>

           </ul>
        </div>
        <div className='section2'>
        <div className='img'>
        <img src={imageSrc11} alt="icon-facebook" />
        <img src={imageSrc12} alt="icon-twitter" />
        <img src={imageSrc13} alt="icon-pinterest" />
        <img src={imageSrc14} alt="icon-instagram" />

        </div>
        
        <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
         
       </footer>
      
    </div>
  );
}

export default App;
