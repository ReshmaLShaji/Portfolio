import React from 'react'
import logos from '../components/image.png'
import '../components/Home.css'

 const Home = () => {
   return (
    <div className='intro'>
    
    <div className='introContent'>
    <img src={logos} alt="profile" className='logos'/>
      <span className='hi'>Hi,there</span><br />
      <span className='introText'>I'm <span className='introName'>Reshma</span><br /><span className='introLast'>Front-end Developer</span></span>
      {/* <img src={logos} alt="profile" className='logos'/> */}
      <div className='resumes'>
      <button type="button" class="btn"> My Resume</button>
      </div>
    </div>
  
  </div>
  
    
   )
 }

export default Home