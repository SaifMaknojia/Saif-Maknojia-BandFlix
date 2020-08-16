import React, { Component } from "react";
import formImage from '../../assets/Images/Mohan-muruge.jpg';
import "./Comment.scss"




class Comment extends Component {
  render() {
    return (
      <section className="form-section">
        <h2 className="form-section--heading">3 comments</h2>
        <form className="form">
          <div className="form__logo">
            <img className="form__logo--img" src={formImage} alt="form pic"></img>
          </div>
          <div className="form-info">
            <label className="form-info__container--heading">Join The Conversation
                            <textarea type="text" name="name" className="form-info__container--textarea" />
            </label>
            <div className="form-info-button">
              <input className="form-info-button--input" type="submit" value="Comment" />
            </div>
          </div>
        </form>
        {this.props.comments.map(comment => (
          <div className="feedback" key={comment.id}>
            <div className="feedback__comment">
              <div className="feedback__comment--back-img"></div>
            </div>
            <div className="comment-holder-2">
              <div className="feedback__heading">
                <h2 className="feedback__heading--name">{comment.name}</h2>
                <h2 className="feedback__heading--date">{comment.date}</h2>
              </div>
              <div className="feedback__para">
                <p className="feedback__para--content">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}

      </section>
    )
  }
}


export default Comment;
