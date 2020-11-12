import React, { useState } from "react";
import "./style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllJokes from "./AllJokes";
import AllScrape from "./AllScrape";
import Login from "./Login";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";

const Header = ({ isLoggedIn, loginMsg, isAdmin, loginName }) => {
  return (
    <ul className="header" id="header" >
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/jokes">
          Jokes
        </NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink activeClassName="selected" to="/scrape">
              Scrape
            </NavLink>
          </li>
        </>
      )}
      {isAdmin && (
        <>
          <li>
            <NavLink activeClassName="selected" to="/admin">
              Admin
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink activeClassName="selected" to="/login-out">
          {loginMsg}
        </NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li className="floatRight">
            <span>Logged in as {loginName}</span>
          </li>
        </>
      )}
    </ul>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginName, setLoginName] = useState('');

  let history = useHistory();

  const setLoginStatus = (status, name) => {
    setIsLoggedIn(status);
    setLoginName(name);
    history.push("/");
  };

  const setAdminStatus = (status) => {
    setIsAdmin(status);
    history.push("/");
  };

  return (
    <div>
      <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        loginName={isLoggedIn ? loginName : ''}
      />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jokes">
            <Jokes />
          </Route>
          <Route path="/scrape">
            <Scrape />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login-out">
            <Login
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
              setAdminStatus={setAdminStatus}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="pageContent">
      <h2>Home</h2>
    </div>
  );
}

function Jokes() {
  return (
    <div className="pageContent">
      <h2>Jokes</h2>
      <AllJokes />
    </div>
  );
}

function Scrape() {
  return (
    <div className="pageContent">
      <h2>Scrape</h2>
      <AllScrape />
    </div>
  );
}

function Admin() {
  return (
    <div className="pageContent">
      <h2>Admin</h2>
    </div>
  );
}