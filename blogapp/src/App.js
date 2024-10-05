import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import Foo1 from './components/Foo1';

import CardList from './components/CardList';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Details from './components/Details';


function App() {
  return (
      <Router>
        
    <div className="App">
      <Nav1></Nav1>
        {/* <div className="container mt-5">
        <div className="row"> */}
          
    
    <Routes>
      <Route path="/" element={<CardList> </CardList>}></Route>
      <Route path="/checkout/:id" element={<Details></Details>}></Route>
     
    </Routes>
    {/* <Cards></Cards> */}
    
    {/* </div>
    </div> */}
    <Foo1></Foo1>
    </div>
    </Router>
  
    
  );
}

export default App;
