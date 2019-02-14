import React from "react";
import Button from './Button';

const Rating = ({rating}) => {
    const nonRating = 5 - rating;
    const rateElms = [];
    const nonRateElms = [];
    for (let i = 0; i < rating; i++) {
        rateElms.push(
            <span key={"rating"+i}role="img" aria-label="like">❤️</span>
        )
    }

    for (let j = 0; j < nonRating; j++) {
        nonRateElms.push(
            <span key={"unrating"+j} role="img" aria-label="dislike">💙</span>
        )
    }

    return(
        <div className="ratingInfo">
            <Button type="button"> Send Message </Button>
            <div className="ratingContainer">
                {rateElms}
                {nonRateElms}
            </div>
        </div>
    )
}

export default Rating;