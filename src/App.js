import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='main'>
      <div className='left'>
        <div className='navbar'>
        <br/>
        <h2 className='name'>KITHMINI MADANAYAKE</h2><br/><br/><br/>
        <button className='button1'>Home</button><br/><br/><br/>
        <button className='button1'>About</button><br/><br/><br/>
        <button className='button1'>Skills</button><br/><br/><br/>
        <button className='button1'>Works</button><br/><br/><br/>
        <button className='button1'>Contacts</button>
        <span className='email'>kithminimadanayake@gmail.com</span>
        </div>


        <Routes>
          <Route exact path= '/a' element={<Home/>}>
          </Route>

          <Route path= '/About' element= {<About/>}>
          </Route>

          <Route path= '/Skills' element= {<Skills/>}>
          </Route>

          <Route path= '/Works' element = {<Works/>}>
          </Route>

          <Route path= '/Contact' element = {<Contact/>}>
          </Route>

          </Routes>
      </div>

      <div className='right'>
          <Home/>
        </div>
      </div>
    </Router>
  );
}

export default App;


