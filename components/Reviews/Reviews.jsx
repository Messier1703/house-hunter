import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from "next/image";
import { reviews } from "@/constants/reviews";
import s from "./Reviews.module.scss";

const Reviews = () => {
    return (
        <div className={s.reviews}>
            <div className="container">
                <Image
                    src="/rectangle-deco.svg"
                    width={32}
                    height={1}
                    className={s.reviews_rectangle_deco}
                />
                <h6 className={s.reviews_title}>See Our Review</h6>
                <h2 className={s.reviews_desc}>What Our User Say About Us</h2>
            </div>
            <div className={s.reviews_swiper}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={360}
                    loop
                    speed={1100}
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // }}
                    breakpoints={{
                        1009: {
                            slidesPerView: 3,
                        },
                        595: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={s.reviews_swiper_slide}>
                                <Image
                                    src={item.img}
                                    width={740}
                                    height={400}
                                    className={s.reviews_swiper_slide_img}
                                />
                                <div className={s.reviews_swiper_slide_content}>
                                    <h2
                                        className={s.reviews_swiper_slide_title}
                                    >
                                        Best! I got the house I wanted through
                                        Hounter
                                    </h2>
                                    <p className={s.reviews_swiper_slide_desc}>
                                        Through this website I can get a house
                                        with the type and specifications I want
                                        very easily, without a complicated
                                        process to be able to find information
                                        on the house we want.
                                    </p>
                                    <div
                                        className={s.reviews_swiper_slide_user}
                                    >
                                        <Image
                                            src={item.pfp}
                                            width={104}
                                            height={104}
                                        />
                                        <div>
                                            <h3
                                                className={
                                                    s.reviews_swiper_slide_user_name
                                                }
                                            >
                                                {item.name}
                                            </h3>
                                            <p
                                                className={
                                                    s.reviews_swiper_slide_user_role
                                                }
                                            >
                                                {item.role}
                                            </p>
                                        </div>
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                                                fill="#F59E0B"
                                            />
                                        </svg>
                                        <h4
                                            className={
                                                s.reviews_swiper_slide_rating
                                            }
                                        >
                                            {item.rating}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
