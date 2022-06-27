import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';


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

            </ul>
          </div>

          <Routes>
            
           <Route path="/contact" element = {<Contact />} />
           <Route path="/AboutMe" element = {<AboutMe />} />

          </Routes>

        </Router>
        
      
      </header>
    
    </div>
  );
}


export default App;

//////////////////////////////////
mkdir pages//////////////////////
AboutMe.js file: ////////////////
/////////////////////////////////

export default function AboutMe(){

    return(

        <div>
            <h4>Desde About Me!</h4>
        </div>


    );

}

////////////////////////////////////////
file Contact.js/////////////////////////
////////////////////////////////////////
export default function Contact(){

    return(

        <div>
            <h4>Desde contact!</h4>
        </div>

    );

}



