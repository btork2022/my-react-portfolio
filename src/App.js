
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 1. [ ] App
//   2. [ ] Header
//   4. [ ] Home
//   5. [ ] Project Gallery
//   6. [ ] Project
//   7. [ ] Contact
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <Routes>
             <Route path="/" element={<Home name={"Ben"} title={"Front-end Web Develper"}/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/project" element={<Project/>}/>

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
