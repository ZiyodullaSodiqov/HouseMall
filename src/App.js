import './App.css';
import Main from './pages/Main';
import Nav from './pages/Nav';
import Creator from './pages/Founder';
import Home from './pages/Home';
import Slv from './pages/Solve';
import Problem from './pages/Problems'
import About from './pages/About';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/nav" component={Nav} />
        <Route path="/found" component={Creator} />
        <Route path="/search" component={Home} /> 
      </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;
