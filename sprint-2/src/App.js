import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Body from "./Components/Body/Body"
import Hero from "./Components/Hero/Hero"
import Main from "./Components/Main/Main"
import Comment from "./Components/Comment/Comment"


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="body-container">
        <div className="body-container__left">
          <Main />
          <Comment />
        </div>
        <div className="body-container__right">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;

