import React from "react";
import "./Body.scss"
import Image1 from "../../assets/Images/video-list-0.jpg";
import Image2 from "../../assets/Images/video-list-1.jpg";
import Image3 from "../../assets/Images/video-list-2.jpg";
import Image4 from "../../assets/Images/video-list-3.jpg";
import Image5 from "../../assets/Images/video-list-4.jpg";
import Image6 from "../../assets/Images/video-list-5.jpg";
import Image7 from "../../assets/Images/video-list-6.jpg";
import Image8 from "../../assets/Images/video-list-7.jpg";
import Image9 from "../../assets/Images/video-list-8.jpg";


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          video: Image1,
          title: "BMX Rampage: 2018 Highlights",
          author: "Red Cow",
          id: 1
        },
        {
          video: Image2,
          title: "Become A Travel Pro In 8 Easy Lesson",
          author: "Scotty Cranmer",
          id: 2
        },
        {
          video: Image3,
          title: "need to be updated",
          author: "Scotty Cranmer",
          id: 3
        },
        {
          video: Image4,
          title: "Travel Health Useful Medical Information...",
          author: "Scotty Cranmer",
          id: 4
        },
        {
          video: Image5,
          title: "Cheap Airline Tickets Great Ways To Save",
          author: "Emily Harper",
          id: 5
        },
        {
          video: Image6,
          title: "Take A Romantic Break In A Boutique Hotel",
          author: "Ethan Owen",
          id: 6
        },
        {
          video: Image7,
          title: "Choose The Perfect Accommodations",
          author: "Lydia Perez",
          id: 7
        },
        {
          video: Image8,
          title: "Cruising Destination Ideas",
          author: "Timothy Austin",
          id: 8
        },
        {
          video: Image9,
          title: "Train Travel On Track For Safety",
          author: "Scotty Cranmer",
          id: 9
        },
      ]
    };
  }
  render() {
    return (
      <div className="next-videos">
        <h2>Next Video</h2>
        {this.state.data.map(todo => (
          <div className="playlist">
            <div className="playlist__media">
              <img className="playlist__media--image" src={todo.video} alt="playlist"></img>
            </div>
            <div className="playlist__content">
              <h2 className="playlist__content--title">{todo.title}</h2>
              <p className="playlist__content--author">{todo.author}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Body;

