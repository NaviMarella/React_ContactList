import React from 'react';
import Rating from "../components/Rating";
import "./DetailsContainer.css";

const DetailsContainer = ({person}) => {
    const { rating, img, Description, Likes = [], Dislikes = []} = person || {};
    return !person ? null : (
        <div>
            <div className="personHeader">
                <div className="imageContainer">
                    <img alt="" src={img} />
                </div>
                <Rating rating={rating}/>
            </div>
            <div className="descriptionContainer">
                {Description}
            </div>
            <div className="likesContainer">
                {
                    <div className="likesitem">
                        <span>{"Likes"}</span>
                        <span>{"Dislikes"}</span>
                    </div>
                }
                {
                    Likes.map((like,index) => {
                        return (
                            <div key={index} className="likesitem">
                                <span>{Likes[index]}</span>
                                <span>{Dislikes[index]}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DetailsContainer;
