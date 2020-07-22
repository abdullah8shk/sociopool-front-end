import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route,Redirect} from'react-router-dom'
import AddUser from '../src/Component/AddUser'
import AddUserData from './Component/AddUserData'
import Dashboard from '../src/Component/Dashboard'
import FilterUserData from '../src/Component/FilterUserData'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact> <Redirect to='/dashboard'/></Route>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/addUser' exact component={AddUser} />
          <Route path='/addUserData' exact component={AddUserData} />
          <Route path='/filterUserData' exact component={FilterUserData} />
        </Switch>
    </BrowserRouter>

  );
}

export default App;
