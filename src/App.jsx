import Home from './pages/Home';
import Navbar from './layout/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/series' exact><Home /></Route>
        <Route path='/movies' exact></Route>
        <Route path='/popular' exact></Route>
        <Route path='/mylist' exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
