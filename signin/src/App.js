// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

//styled components
import {StyledContainer} from './components/Styles';

import { BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <StyledContainer>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>


    </StyledContainer>
    </Router>
    
  );
}

export default App;
