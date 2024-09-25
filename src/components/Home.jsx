import React from 'react'
import logos from '../components/image.png'
import '../components/Home.css'

 const Home = () => {
   return (
    <div className='intro'>
    
    <div className='introContent'>
      <span className='hi'>Hi,there</span><br />
      <span className='introText'>I'm <span className='introName'>Reshma</span><br /><span className='introLast'>Fullstack Developer</span></span>
      <img src={logos} alt="profile" className='logos'/>
    </div>
  
  </div>
  
    
   )
 }

export default Home