import React from "react";
import "./Body.scss"

class Body extends React.Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="next-videos">
        <h2 className="next-videos__heading">Next Video</h2>
        {this.props.videos.map(video => (
          <button className="playlist" key={video.id}>
            <div className="playlist__media">
              <img className="playlist__media--image" src={video.image} alt="playlist"></img>
            </div>
            <div className="playlist__content">
              <h2 className="playlist__content--title">{video.title}</h2>
              <p className="playlist__content--author">{video.channel}</p>
            </div>
          </button>
        ))}
      </div>
    );
  }
}

export default Body;

