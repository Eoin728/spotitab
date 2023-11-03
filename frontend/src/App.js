import LoginPage from './Pages/LoginPage';
import SongsPage from './Pages/SongsPage';
import './App.css';
import { HashRouter as Router,Route,Routes} from 'react-router-dom';




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
