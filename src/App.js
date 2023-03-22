// Importing libraries and components
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    // wrapping all in router component 
    <Router>
      <div className='App'>

        {/* rendering Header component*/}
          <Header/>

          {/* using Switch for correct component rendering*/}
          <Routes>
            {/* routing the homepage*/}
            <Route path="/" element={<Home />} />
            
            {/* Routing the project gallery page*/}
            <Route path="/project" element={<Gallery />} />
            
              {/* contact page routing */}
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
      </div>
    </Router>
  );
}

export default App;









// COMMENTING DEFAULT CODE
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
