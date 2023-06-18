import React from "react";
import { tourIcons } from "@/constants/tour";
import s from "./Tour.module.scss";

const Tour = () => {
    return (
        <div className={s.tour}>
            <div className="container">
                <div className={s.tour_wrapper}>
                    <div className={s.tour_text}>
                        <h6 className={s.tour_title}>Ready to Sell!</h6>
                        <h2 className={s.tour_desc}>
                            Let’s tour and see our house!
                        </h2>
                        <p className={s.tour_details}>
                            Houses recommended by our partners that have been
                            curated to become the home of your dreams!
                        </p>
                        <p>House Detail</p>
                        {tourIcons.map((item) => (
                                <div className={s.tour_house}>
                                    <div>
                                        {item.bedroom}<span>4 Bedrooms</span>
                                        {item.carport}<span>1 Carport</span>
                                    </div>
                                    <div>
                                        {item.bathroom}<span>2 Bathrooms</span>
                                        {item.floors}<span>2 Floors</span>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className={s.tour_video}>
                        <svg width="37" height="9" viewBox="0 0 37 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="4.37345" cy="4.43964" rx="4.37345" ry="4.4394" fill="#FF4343" />
                            <ellipse cx="18.3686" cy="4.4394" rx="4.37345" ry="4.4394" fill="#FFA51F" />
                            <ellipse cx="32.3634" cy="4.4394" rx="4.37345" ry="4.4394" fill="#13DA67" />
                        </svg>
                        <video src="https://www.youtube.com/watch?v=_VTtXA2Cy-o&t=872s" controls autoplay />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
