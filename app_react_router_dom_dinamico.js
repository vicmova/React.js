import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';

/*
 <Route path="/profile/:name" = indicamos que name es dinámico y la info que recibamos
 se cargará en el componente profile
*/

function App() {

  return (

    <div className="App">
      <header className="App-header">

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/contact">Contacto</Link>
              </li>

              <li>
              <Link to="/AboutMe">About Me</Link>
              </li>

              <li>
              <Link to="/profile">Profile</Link>
              </li>

            </ul>
          </div>

          <Routes>
            
           <Route path="/contact" element = {<Contact />} />
           <Route path="/AboutMe" element = {<AboutMe />} />
           <Route path="/profile/:name" element = {<Profile />} />

          </Routes>

        </Router>
        
      
      </header>
    
    </div>
  );
}


export default App;

/////////////////////////////////
Profile.js

import{ useParams } from 'react-router-dom';

export default function Profile(){

    const {name} = useParams();
    console.log(name);

    return(
        
        <div>
            <p>Desde Profile!</p>
        </div>

    );
}