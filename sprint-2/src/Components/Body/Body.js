import React from "react";
import "./Body.scss";
import { Link } from 'react-router-dom';

class Body extends React.Component {
  state = {
    data: []
  };

  render() {
    const myStyle = {
      color: "black",
      textDecoration: "none"
    }
    const videos = this.props.videos.filter(v => v.id !== this.props.currentVideo.id);
    return (
      <div className="next-videos">
        <h2 className="next-videos__heading">Next Video</h2>
        {videos.map(video => (
          <Link style={{myStyle}} to={`/videos/${video.id}`} key={video.id}>
            <div className="playlist" key={video.id}>
              <div className="playlist__media">
                <img className="playlist__media--image" src={video.image} alt="playlist"></img>
              </div>
              <div className="playlist__content">
                <h2 className="playlist__content--title">{video.title}</h2>
                <p className="playlist__content--author">{video.channel}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Body;

