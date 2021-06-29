import './App.css';
import HomePage from './HomePage';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Details from './Details';
function App() {
  return (
    <Router>

      <Switch>
        <Route path="/details/:id" exact component={Details} />
           
      <Route  exact path="/">
      <HomePage/>

      </Route>
      </Switch>
    </Router>
  );
}

export default App;
