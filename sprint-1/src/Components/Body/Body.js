import React from "react";
import "./Body.scss"
import { v4 as uuidv4 } from 'uuid';
// import Image1 from "../../assets/Images/video-list-0.jpg";
import Image2 from "../../assets/Images/video-list-1.jpg";
import Image3 from "../../assets/Images/video-list-2.jpg";
import Image4 from "../../assets/Images/video-list-3.jpg";
import Image5 from "../../assets/Images/video-list-4.jpg";
import Image6 from "../../assets/Images/video-list-5.jpg";
import Image7 from "../../assets/Images/video-list-6.jpg";
import Image8 from "../../assets/Images/video-list-7.jpg";
import Image9 from "../../assets/Images/video-list-8.jpg";


class Body extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.
    state = {
      data: [
        {
          video: Image2,
          title: "Become A Travel Pro In 8 Easy Lesson",
          author: "Scotty Cranmer",
          id: uuidv4()
        },
        {
          video: Image3,
          title: "need to be updated",
          author: "Scotty Cranmer",
          id: uuidv4()
        },
        {
          video: Image4,
          title: "Travel Health Useful Medical Information...",
          author: "Scotty Cranmer",
          id: uuidv4()
        },
        {
          video: Image5,
          title: "Cheap Airline Tickets Great Ways To Save",
          author: "Emily Harper",
          id: uuidv4()
        },
        {
          video: Image6,
          title: "Take A Romantic Break In A Boutique Hotel",
          author: "Ethan Owen",
          id: uuidv4()
        },
        {
          video: Image7,
          title: "Choose The Perfect Accommodations",
          author: "Lydia Perez",
          id: uuidv4()
        },
        {
          video: Image8,
          title: "Cruising Destination Ideas",
          author: "Timothy Austin",
          id: uuidv4()
        },
        {
          video: Image9,
          title: "Train Travel On Track For Safety",
          author: "Scotty Cranmer",
          id: uuidv4()
        },
      ]
    };

    
  render() {
    return (
      <div className="next-videos">
        <h2 className="next-videos__heading">Next Video</h2>
        {this.state.data.map(todo => (
          <div className="playlist" key={todo.id}>
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

