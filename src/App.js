import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mail from './components/Mail';
import Emaillist from './components/Emaillist';
import Sendmail from './components/Sendmail';
import { useSelector } from 'react-redux';
import { selectMail } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

function App() {
  const isMessageOpen = useSelector(selectMail);
  const user = useSelector(selectUser)
  return (
    <Router>
      {!user ? (
        <Login/>
      ) : (
        <div className="app">
        <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>
              <Route path="/">
                <Emaillist/>
              </Route>
            </Switch>
          </div>
          {isMessageOpen && <Sendmail/>}
      </div>
      )}
    </Router>
  );
}

export default App;
