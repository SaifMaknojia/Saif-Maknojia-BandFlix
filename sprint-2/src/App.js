import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";

// import Body from "./Components/Body/Body";
// import Hero from "./Components/Hero/Hero";
// import Main from "./Components/Main/Main";
// import Comment from "./Components/Comment/Comment";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './Components/Upload/Upload';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Upload" component={Upload} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

