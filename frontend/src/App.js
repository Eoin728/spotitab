import LoginPage from './Pages/LoginPage';
import SongsPage from './Pages/SongsPage';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom'


function App() {
  return (

    <div className="App">
  
      <Router>
  
    
      <Routes>
     
      <Route path = "/" exact element = { <LoginPage/> } />
      <Route path = "/songs"  element = {  <SongsPage/>} />
      </Routes>
  
    </Router>
    </div>
  );
}

export default App;

/*

*/