// Importing libraries and components
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Header from './components/Header';

function App() {
  return (
    // wrapping all in router component 
    <Router>
      <div className='App'>

        {/* rendering Header component*/}
          <Header/>

          {/* using Switch for correct component rendering*/}
          <Switch>
            {/* routing the homepage*/}
            <Route exact path="/"> 
              <Home />
            </Route>
            {/* Routing the project page*/}
            <Route path="/project">
              <Project />
            </Route>
              {/* contact page routing */}
            <Route path="/contact">
             <Contact />
            </Route>
          </Switch>
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
