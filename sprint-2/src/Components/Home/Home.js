import React from 'react';
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Comment from "../Comment/Comment";
import Body from "../Body/Body";

function Home(){


    return(
        <div>
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
    )
}

export default Home;