// Import Statements
import Nav from "./Components/Nav";
import Homepage from './Components/Homepage';
import Destination from './Components/Destination';
import Career from './Components/Career';
import Skills from './Components/Skills';
import Technology from './Components/Technology';
import Mentorship from './Components/Mentorship';
import './style/common.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Car from './Components/Car';
import Feedback from './Components/Feedback';
import Eskill from './Components/Eskill';
import Fskill from './Components/Fskill';
import Login from './Components/Login';
import Signup from './Components/Signup';
// App Component
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/space-tourism/' element={ <Homepage /> }></Route>
          <Route exact path='/destination' element={ <Destination /> }></Route>
          <Route path="/car" element={<Car />}></Route> 
          <Route path="/career" element={<Career />}></Route> 
          <Route exact path='/mentorship' element={ <Mentorship /> }></Route>
          <Route exact path='/skills' element={<Skills/>}></Route>
          <Route path="/eskill" element={<Eskill />}></Route> 
          <Route path="/fskill" element={<Fskill />}></Route> 
          <Route exact path='/feedback' element={ <Feedback /> }></Route>
          <Route exact path='/login' element={ <Login /> }></Route>
          <Route exact path='/signup' element={ <Signup /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

