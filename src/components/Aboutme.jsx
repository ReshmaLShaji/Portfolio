import React from 'react'
import '../components/About.css'
import pic from '../components/Sree.jpg'
const Aboutme = () => {
  return (
    <div>
       <img src={pic} alt="profile" className='pic'/>
    <div className='about'>
    <span className='a'> About Me</span>
    <p>Hello! I’m a Python full stack developer with a passion for creating beautiful and intuitive web applications. My studies have equipped me with a solid foundation in both development and design, and I’m excited to apply my knowledge in a professional environment.

Creativity and problem-solving are my driving forces, and I thrive in collaborative settings where ideas come to life. I have proficiency in Python, Django, and front-end technologies like HTML, CSS, and JavaScript, enabling me to build visually appealing and user-friendly interfaces.

As a dedicated learner, I keep myself updated on industry trends and best practices, always striving to enhance my skills and deliver high-quality results. As I embark on this career journey, I look forward to tackling new challenges and contributing to innovative projects.</p>


<div><p>Thank you for visiting my portfolio!</p></div>
    </div>
    </div>
   
  )
}

export default Aboutme