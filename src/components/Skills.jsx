
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import '../components/Skill.css'
// import html from '../components/html.jpeg'
// import css from '../components/css.jpeg'
// import boots from '../components/boots.jpeg'
// import reactLogo from '../components/react.jpeg' // 'react' is a reserved keyword
// import java from '../components/java.png'
// import msoffice from '../components/ms office.jpeg'

// const Skills = () => {
//   return (

    // <div className='skills-section'>
    //   <div className='text-title text-center'>
    //     <h1>Skills</h1>
    //   </div>
    //   <div className='container'>
    //     <div className='row'>
    //       {/* HTML Card */}
    //       <div className="col-md-6 mb-3">
    //         <div className="card">
    //           <div className="row g-0">
    //             <div className="col-md-4">
    //               <img src={html} className="img-fluid rounded-start" alt="HTML" />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">HTML</h5>
    //                 <p className="card-text">
    //                   HTML (HyperText Markup Language) is the foundation of web development, allowing me to structure content and create semantic, accessible web pages.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* CSS Card */}
    //       <div className="col-md-6 mb-3">
    //         <div className="card">
    //           <div className="row g-0">
    //             <div className="col-md-4">
    //               <img src={css} className="img-fluid rounded-start" alt="CSS" />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">CSS</h5>
    //                 <p className="card-text">
    //                   Strong proficiency in CSS allows me to create responsive, visually appealing, and user-friendly layouts. I utilize Flexbox, Grid, and media queries for modern design techniques.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* Bootstrap Card */}
    //       <div className="col-md-6 mb-3">
    //         <div className="card">
    //           <div className="row g-0">
    //             <div className="col-md-4">
    //               <img src={boots} className="img-fluid rounded-start" alt="Bootstrap" />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">Bootstrap</h5>
    //                 <p className="card-text">
    //                   I have extensive experience using Bootstrap to build responsive, mobile-first websites with reusable components and grid systems, enhancing UI/UX design.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
          
    //                 {/* java Card */}
    //                 <div className="col-md-6 mb-3">
    //         <div className="card">
    //           <div className="row g-0">
    //             <div className="col-md-4">
    //               <img src={java} className="img-fluid rounded-start" alt="java" />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">Javascript</h5>
    //                 <p className="card-text">
    //                 JavaScript is a versatile language for building dynamic, interactive web applications. With skills in front-end and back-end development, I can create responsive interfaces and integrate APIs efficiently.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>


    //       {/* React Card */}
    //       <div className="col-md-6 mb-3">
    //         <div className="card">
    //           <div className="row g-0">
    //             <div className="col-md-4">
    //               <img src={reactLogo} className="img-fluid rounded-start" alt="React" />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">React</h5>
    //                 <p className="card-text">
    //                   React is my go-to JavaScript library for building dynamic, single-page applications. I use hooks, state management, and component-based architecture to create fast, interactive web apps.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* ms Card */}
    //       <div className="col-md-6 mb-3">
    //         <div className="card">
    //           <div className="row g-0">
    //             <div className="col-md-4">
    //               <img src={msoffice} className="img-fluid rounded-start" alt="msoffice" />
    //             </div>
    //             <div className="col-md-8">
    //               <div className="card-body">
    //                 <h5 className="card-title">MS Office</h5>
    //                 <p className="card-text">
    //                 Proficient in Microsoft Office, including Word, Excel, PowerPoint, and Outlook. Skilled in creating and formatting documents, analyzing data with advanced Excel functions, designing engaging presentations, and managing emails and calendars efficiently. 
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
 
    //     </div>
    //   </div>
    // </div>
    //     
//     <div className="row row-cols-1 row-cols-md-2 g-4">   
//   <div class="col">
//     <div className="card">
//       <img src={html} className="card-img-top" alt="html"/>
//       <div className="card-body">
//         <h5 className="card-title">HTML</h5>
//         <p className="card-text"> HTML (HyperText Markup Language) is the foundation of web development, allowing me to structure content and create semantic, accessible web pages.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={css} class="card-img-top" alt="css"/>
//       <div className="card-body">
//         <h5 className="card-title">CSS</h5>
//         <p className="card-text"> Strong proficiency in CSS allows me to create responsive, visually appealing, and user-friendly layouts. I utilize Flexbox, Grid, and media queries for modern design techniques.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={boots} class="card-img-top" alt="boots"/>
//       <div className="card-body">
//         <h5 className="card-title">Bootstrap</h5>
//         <p className="card-text">I have extensive experience using Bootstrap to build responsive, mobile-first websites with reusable components and grid systems, enhancing UI/UX design.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={java} class="card-img-top" alt="java"/>
//       <div className="card-body">
//         <h5 className="card-title">Javascript</h5>
//         <p className="card-text"> JavaScript is a versatile language for building dynamic, interactive web applications. With skills in front-end and back-end development, I can create responsive interfaces and integrate APIs efficiently.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={reactLogo} class="card-img-top" alt="React"/>
//       <div className="card-body">
//         <h5 className="card-title">React.js</h5>
//         <p className="card-text"> React is my go-to JavaScript library for building dynamic, single-page applications. I use hooks, state management, and component-based architecture to create fast, interactive web apps.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card">
//       <img src={msoffice}class="card-img-top" alt="msoffice"/>
//       <div className="card-body">
//         <h5 className="card-title">MS Office</h5>
//         <p className="card-text">  Proficient in Microsoft Office, including Word, Excel, PowerPoint, and Outlook. Skilled in creating and formatting documents, analyzing data with advanced Excel functions, designing engaging presentations, and managing emails and calendars efficiently. </p>
//       </div>
//     </div>
//   </div>
// </div>





//   )
// }

// export default Skills
import React from 'react';
import '../components/Skill.css'
import html from '../components/html.jpeg'; // Update the path accordingly
 import css from '../components/css.jpeg'
 import boots from '../components/boots.jpeg'
 import reactLogo from '../components/react.jpeg' // 'react' is a reserved keyword
 import java from '../components/java.png'
 import msoffice from '../components/ms.jpg'


const Skills = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        
       
        <div className="col">
          <div className="card h-100">
            <img src={html} className="card-img-top" alt="html" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text">
                HTML (HyperText Markup Language) is the foundation of web development, allowing me to structure content and create semantic, accessible web pages.
              </p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card h-100">
            <img src={css} className="card-img-top" alt="css" />
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <p className="card-text">
                Strong proficiency in CSS allows me to create responsive, visually appealing, and user-friendly layouts. I utilize Flexbox, Grid, and media queries for modern design techniques.
              </p>
            </div>
          </div>
        </div>

      
        <div className="col">
          <div className="card h-100">
            <img src={boots} className="card-img-top" alt="Bootstrap" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text">
              Proficient in building responsive, mobile-first websites using Bootstrap’s grid system and components. Experienced in customizing themes, integrating with React.js, and ensuring cross-browser compatibility. Skilled in utilizing Bootstrap’s utilities for efficient styling and creating interactive elements like forms, modals, and tooltips.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100">
            <img src={java} className="card-img-top" alt="JavaScript" />
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">
                JavaScript is a versatile language for building dynamic, interactive web applications. With skills in front-end and back-end development, I can create responsive interfaces.
              </p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card h-100">
            <img src={reactLogo} className="card-img-top" alt="React.js" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">
                React is my go-to JavaScript library for building dynamic, single-page applications. I use hooks, state management, and component-based architecture to create fast, interactive web apps.
              </p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card h-100">
            <img src={msoffice} className="card-img-top" alt="MS Office" />
            <div className="card-body">
              <h5 className="card-title">MS Office</h5>
              <p className="card-text">
              Proficient in MS Word for creating, formatting, and editing documents. Skilled in using advanced features such as styles, tables, and references for structured documents. Experienced in MS PowerPoint for designing engaging presentations with multimedia elements and advanced features.


              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

