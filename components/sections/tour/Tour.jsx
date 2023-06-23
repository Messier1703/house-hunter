import React from "react";
import { tour } from "@/constants/tour";
import s from "./Tour.module.scss";
import YouTubeVideo from "@/components/UI/youtube/YouTube";

const Tour = () => {
    return (
        <div className={s.tour}>
            <div className="container">
                <div className={s.tour_wrapper}>
                    <div className={s.tour_text}>
                        <h6 className={s.tour_title}>Ready to Sell!</h6>
                        <h2 className={s.tour_subtitle}>
                            Let’s tour and see our house!
                        </h2>
                        <p className={s.tour_desc}>
                            Houses recommended by our partners that have been
                            curated to become the home of your dreams!
                        </p>
                        <p className={s.tour_details_title}>House Detail</p>
                        <div className={s.tour_house_stats}>
                        {tour.map((item) => (
                            <div className={s.tour_house_property} key={item.id}>
                                {item.icon}
                                <span className={s.tour_house_property_title}>{item.title}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className={s.tour_video}>
                        <div className={s.tour_video_btn}>
                            <svg width="37" height="9" viewBox="0 0 37 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="4.37345" cy="4.43964" rx="4.37345" ry="4.4394" fill="#FF4343" />
                                <ellipse cx="18.3686" cy="4.4394" rx="4.37345" ry="4.4394" fill="#FFA51F" />
                                <ellipse cx="32.3634" cy="4.4394" rx="4.37345" ry="4.4394" fill="#13DA67" />
                            </svg>
                        </div>
                        <div className={s.tour_video_wrapper}>
                            <YouTubeVideo videoId="idJthveed1M" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
