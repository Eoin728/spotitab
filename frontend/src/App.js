import LoginPage from './Pages/LoginPage';

import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';




function App() {
  return (

    <div className="App">
  
      <Router>
  
    
      <Routes>
     
      <Route path = "/" exact element = { <LoginPage/> } />
  
      </Routes>
  
    </Router>
    </div>
  );
}

export default App;
