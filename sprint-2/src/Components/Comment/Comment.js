import React from "react";
import formImage from '../../assets/Images/Mohan-muruge.jpg';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import "./Comment.scss"

const Api ="88fb5a67-de37-4846-8150-4456365820c7"
const ApiLink = `https://project-2-api.herokuapp.com`

class Comment extends React.Component {
    
    state = {
        data: []
        
    }

         componentDidUpdate(){
        axios.get(`${ApiLink}/videos?api_key=${Api}`)
        .then(res =>{
            
            console.log('hello')
        }).catch(err => {
            console.log('hello' + err)
        })
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


/*   {
                name: 'Micheal Lyons',
                date: '12/18/2018',
                review: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
                id: uuidv4()

            },
            {
                name: 'Gary Wong',
                date: '12/18/2018',
                review: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                id: uuidv4()
            },
            {
                name: 'Theodore Duncan',
                date: '11/15/2018',
                review: "How can someone be so good!!! You can tell he lives for this and loves to do it every day Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                id: uuidv4()
            } */