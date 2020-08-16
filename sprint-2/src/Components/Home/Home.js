import React, { Component } from 'react';
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import Comment from "../Comment/Comment";
import Body from "../Body/Body";
import axios from 'axios';

const API = "https://project-2-api.herokuapp.com/videos";
const API_KEY = '091d11f6-aea8-47f2-8134-f3c324c8e1ad';


class Home extends Component {
  state = {
    data: [],
    currentPlayingVideo: null
  };

  componentDidMount() {
    this.getYTVideo();
  }

  getYTVideo = () => {
    axios
      .get(`${API}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
        
      })
      .catch(err => {
        console.log(err);
      })
  }

  getVideoDetails(id) {
    axios.get(
      `${API}/${id}?api_key${API_KEY}`
    ).then(res => {
      console.log(res.data);
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Hero video={this.state.currentPlayingVideo}/>
        <div className="body-container">
          <div className="body-container__left">
            <Main />
            <Comment />
          </div>
          <div className="body-container__right">
            <Body videos={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
