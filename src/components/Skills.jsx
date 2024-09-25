
    import React from 'react';
    

const Skills = () => {
   const skills = ["HTML5", "CSS3", "JavaScript", "ReactJS", "Bootstrap"];
   return (
      <div className="skills">
         <h2>My Skills</h2>
         <ul>
            {skills.map(skill => (
               <li key={skill}>{skill}</li>
            ))}
         </ul>
      </div>
   );
};

export default Skills;
