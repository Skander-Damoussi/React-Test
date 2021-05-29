import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Fakta from './components/Fakta';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Fakta" component={Fakta} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="hello">
    <h1>Prestandatest</h1>
    <p>Denna hemsida är skapad i syfte att prestandamäta lätta Vue.JS applikationers påverkan under körtid samt lära oss grunderna i hur ramverket är uppbyggt. Vi har i första hand valt att fokusera på dokumentationen bakom ramverket för att bygga en grundlig nivå för att i slutfasen skapa en enkel applikation.</p>
  </div>
)

export default App;
