import React from "react";
import { tour } from "@/constants/tour";
import s from "./Tour.module.scss";
import Image from "next/image";
import YouTubeVideo from "@/components/UI/youtube/YouTube";
import { motion } from "framer-motion";

const Tour = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={s.tour}>
            <div className="container">
                <motion.div
                    className={s.tour_wrapper}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={s.tour_text}>
                        <motion.h6
                            className={s.tour_title}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            Ready to Sell!
                        </motion.h6>
                        <motion.h2
                            className={s.tour_subtitle}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            Let’s tour and see our house!
                        </motion.h2>
                        <motion.p
                            className={s.tour_desc}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            Houses recommended by our partners that have been curated to become the home of your dreams!
                        </motion.p>
                        <motion.p
                            className={s.tour_details_title}
                            variants={variants}
                            transition={{ duration: 0.5 }}
                        >
                            House Detail
                        </motion.p>
                        <div className={s.tour_flex}>
                            <motion.div
                                className={s.tour_house_stats}
                                variants={variants}
                                transition={{ duration: 0.5 }}
                            >
                                {tour.map((item) => (
                                    <motion.div
                                        className={s.tour_house_property}
                                        key={item.id}
                                        variants={variants}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {item.icon}
                                        <span className={s.tour_house_property_title}>{item.title}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div
                                className={s.tour_user}
                                variants={variants}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className={s.tour_user_pfp}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Image src="/dianne-russell-pfp.png" width={56} height={56} alt="User Profile" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h2 className={s.tour_user_name}>Dianne Russell</h2>
                                    <p className={s.tour_user_role}>Manager Director</p>
                                </motion.div>
                                <motion.button
                                    className={s.tour_user_contact}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="fluent:call-20-filled">
                                            <path
                                                id="Vector"
                                                d="M8.38439 2.47925C8.90949 2.32093 9.47298 2.34723 9.98104 2.55377C10.4891 2.76032 10.9111 3.13465 11.1768 3.61445L11.2668 3.79325L12.06 5.55845C12.3011 6.09423 12.3793 6.68906 12.285 7.26897C12.1907 7.84888 11.928 8.38826 11.5296 8.82005L11.3712 8.97845L10.1184 10.146C9.89279 10.3596 10.062 11.1864 10.8792 12.6C11.6124 13.872 12.2112 14.466 12.504 14.4984H12.5556L12.6192 14.4864L15.0792 13.734C15.4098 13.6327 15.7626 13.6286 16.0955 13.7225C16.4283 13.8163 16.7271 14.0041 16.956 14.2632L17.0664 14.4012L18.6936 16.6572C19.0129 17.0993 19.1721 17.6369 19.1451 18.1816C19.118 18.7262 18.9063 19.2454 18.5448 19.6536L18.3984 19.8048L17.7468 20.4216C17.1627 20.9748 16.4322 21.3485 15.6419 21.4985C14.8516 21.6485 14.0349 21.5683 13.2888 21.2676C10.9668 20.3316 8.85719 18.1932 6.94079 14.874C5.02079 11.5464 4.2228 8.64605 4.5792 6.16205C4.68715 5.41103 4.99653 4.70328 5.47446 4.114C5.9524 3.52471 6.58104 3.0759 7.29359 2.81525L7.52519 2.73845L8.38439 2.47925V2.47925Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                    <span>Contact Now</span>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        className={s.tour_video}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className={s.tour_video_btn}>
                            <svg
                                width="37"
                                height="9"
                                viewBox="0 0 37 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse cx="4.37345" cy="4.43964" rx="4.37345" ry="4.4394" fill="#FF4343" />
                                <ellipse cx="18.3686" cy="4.4394" rx="4.37345" ry="4.4394" fill="#FFA51F" />
                                <ellipse cx="32.3634" cy="4.4394" rx="4.37345" ry="4.4394" fill="#13DA67" />
                            </svg>
                        </div>
                        <div className={s.tour_video_wrapper}>
                            <YouTubeVideo videoId="idJthveed1M" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Tour;
