
// const Home = ({name, title}) => {
    
//     return <div>
        
//         <section className="splash">
//             <section>
//             <img alt="" src="../assets/img/IMG-1977.JPG"/>
//             </section>
//             <section>
//                 <h1>My name is {name}</h1>
//                 <p>Title: {title}  </p>
//             </section>
//         </section>
//     </div>
// }

// export default Home;


import React from 'react';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-container">
      {/* Name and headshot */}
      <div className="name-container">
        <h1>John Doe</h1>
        <img
          src="../assets/img/IMG-1977.JPG"
          alt="John Doe"
          className="headshot"
        />
      </div>
      {/* Brand statement and indication of portfolio site */}
      <div className="brand-container">
        <p className="brand-statement">
          I am a Front-end web developer with experience in React, Node.js, Javascript, CSS & HTML.
        </p>
        <p className="portfolio-indicator">
          Welcome to my portfolio website!
        </p>
      </div>
    </div>
  );
}

export default Home;