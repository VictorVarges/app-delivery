import { use } from 'chai';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import Login from '../page/Login';

function Routs () {
  return(
    <Switch>
      <Route exact path="/">
       <Redirect to="/login" />
      </Route> 
      <Route exact path='/login' component={Login} />

    </Switch>
  );  
}

export default Routs;