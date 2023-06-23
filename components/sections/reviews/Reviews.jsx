import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { reviews } from "@/constants/reviews";
import s from "./Reviews.module.scss";

function Reviews() {
    return (
        <div className={s.reviews}>
            <div className="container">
                <Image
                    src="/rectangle-deco.svg"
                    width={32}
                    height={1}
                    className={s.reviews_rectangle_deco} />
                <h6 className={s.reviews_title}>See Our Review</h6>
                <h2 className={s.reviews_desc}>What Our User Say About Us</h2>
            </div>
            <div className={s.reviews_swiper_wrapper}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={56}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    loop
                    speed={1100}
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // }}
                    className="swiper"
                    breakpoints={{
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 400,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className={s.reviews_swiper_slide}
                                style={{
                                    backgroundImage: "url(/forest-house.png)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className={s.reviews_swiper_slide_content}>
                                    <h2 className={s.reviews_swiper_slide_title}>{item.title}</h2>
                                    <p className={s.reviews_swiper_slide_desc}>{item.desc}</p>
                                    <div className={s.reviews_swiper_slide_user}>
                                        <Image src={item.pfp} width={40} height={40} />
                                        <div>
                                            <p>{item.name}</p>
                                            <p>{item.role}</p>
                                        </div>
                                        <p>{item.rating}</p>
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