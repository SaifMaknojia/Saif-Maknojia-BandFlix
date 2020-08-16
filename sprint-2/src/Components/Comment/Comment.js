import React from "react";
import formImage from '../../assets/Images/Mohan-muruge.jpg';
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import "./Comment.scss"



// function noComments(){
//     axios.get("https://project-2-api.herokuapp.com/videos?api_key=091d11f6-aea8-47f2-8134-f3c324c8e1ad")
//     .then(res =>{
//         console.log(res)
//     }).catch(err => {
//         console.log('hello' + err)
//     })
// }

// noComments();

class Comment extends React.Component {
    
    state = {
        featuredVideos: null,
        data: []      
    }

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
                {this.state.data.map(todo => (
                    <div className="feedback" key={todo.id}>
                        <div className="feedback__comment">
                            <div className="feedback__comment--back-img"></div>
                         </div>
                        <div className="comment-holder-2">
                            <div className="feedback__heading">
                                <h2 className="feedback__heading--name">{todo.name}</h2>
                                <h2 className="feedback__heading--date">{todo.date}</h2>
                            </div>
                            <div className="feedback__para">
                                <p className="feedback__para--content">{todo.review}</p>
                            </div>
                        </div>
                    </div>    
                ))}

            </section>
        )
    }
}


export default Comment;
