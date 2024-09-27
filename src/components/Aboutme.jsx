import React from 'react'
import '../components/About.css'
import pic from '../components/resh.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Aboutme = () => {
  return (
    <div className='whole'>
       <img src={pic} alt="profile" className='pic'/>
    <div className='about'>
    <span className='a'> About Me</span>
    <p>Hi! I'm a passionate Full-Stack Developer with a deep interest in crafting efficient, scalable, and dynamic web applications. My expertise spans a variety of modern web technologies, including HTML, CSS, Bootstrap, JavaScript, and ReactJS on the front end, along with Python on the back end.I’m excited about continuous learning and exploring new technologies, and I’m always looking for opportunities to collaborate on innovative projects.</p>
    <br />
    <p>Thank you for visiting my portfolio!</p>
    <p>Let’s build something amazing together!</p>
    </div>
    </div>
   
   
  )
}

export default Aboutme