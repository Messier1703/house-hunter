import React from 'react';
import s from './Reviews.module.scss';

const Reviews = () => {
    return (
        <div className={s.reviews}>
            <div className="container">
                <h6 className={s.reviews_title}>See Our Review</h6>
                <h2 className={s.reviews_desc}>What Our User Say About Us</h2>
                <div className={s.reviews_swiper_slide}>
                    
                </div>
            </div>
        </div>
    );
};

export default Reviews;