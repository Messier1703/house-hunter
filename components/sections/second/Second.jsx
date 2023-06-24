import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";
import { secondNav } from "@/constants/SecondNav";
import Image from "next/image";
import s from "./Second.module.scss";
import { featuredHouses } from "@/constants/featuredHouses";

const Second = () => {
    return (
        <div className={s.featured}>
            <div className="container">
                <div className={s.featured_wrapper}>
                    {/* <Image
                        src="/rectangle-deco.png"
                        width={32}
                        height={1}
                        className={s.rectangle_deco}
                    /> */}
                    <div className={s.featured_nav}>
                        <div>
                            <h6 className={s.featured_desc}>
                                Our Recommendation
                            </h6>
                            <h2 className={s.featured_title}>
                                Featured House
                            </h2>
                        </div>
                        <div className={s.featured_nav_buttons}>
                            {secondNav.map((item) => (
                                <button
                                    key={item.id}
                                    className={s.featured_nav_btn}
                                >
                                    {item.img}
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                        <div className={s.featured_swiper_nav}>
                            <button
                                className={`${s.featured_swiper_next} ${s.featured_swiper_nav_btn}`}
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.5077 22.1645C17.778 22.165 18.04 22.0703 18.2481 21.8967C18.3653 21.799 18.4621 21.679 18.5331 21.5436C18.604 21.4081 18.6478 21.2599 18.6617 21.1075C18.6757 20.955 18.6597 20.8012 18.6145 20.655C18.5693 20.5088 18.4959 20.373 18.3985 20.2554L13.2157 14.0159L18.2134 7.76475C18.3095 7.64567 18.3813 7.50867 18.4246 7.3616C18.4679 7.21453 18.4819 7.0603 18.4657 6.90777C18.4496 6.75524 18.4037 6.60742 18.3306 6.47281C18.2575 6.3382 18.1587 6.21945 18.0399 6.12339C17.9202 6.01741 17.78 5.93748 17.6282 5.8886C17.4763 5.83972 17.316 5.82295 17.1574 5.83935C16.9988 5.85574 16.8453 5.90495 16.7065 5.98388C16.5677 6.0628 16.4466 6.16975 16.3508 6.298L10.7631 13.2825C10.593 13.4908 10.5 13.7521 10.5 14.0217C10.5 14.2913 10.593 14.5526 10.7631 14.7609L16.5475 21.7454C16.6636 21.8863 16.811 21.9976 16.9778 22.0705C17.1447 22.1433 17.3262 22.1755 17.5077 22.1645Z" />
                                </svg>
                            </button>
                            <button
                                className={`${s.featured_swiper_prev} ${s.featured_swiper_nav_btn}`}
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11.6589 5.83552C11.3886 5.83499 11.1266 5.92971 10.9185 6.10326C10.8014 6.20098 10.7045 6.321 10.6336 6.45644C10.5626 6.59188 10.5189 6.74007 10.5049 6.89254C10.4909 7.04501 10.507 7.19875 10.5521 7.34496C10.5973 7.49118 10.6707 7.62699 10.7681 7.74462L15.9509 13.9841L10.9532 20.2353C10.8571 20.3543 10.7854 20.4913 10.7421 20.6384C10.6988 20.7855 10.6848 20.9397 10.7009 21.0922C10.717 21.2448 10.7629 21.3926 10.836 21.5272C10.9091 21.6618 11.0079 21.7806 11.1267 21.8766C11.2464 21.9826 11.3866 22.0625 11.5385 22.1114C11.6903 22.1603 11.8506 22.177 12.0092 22.1607C12.1678 22.1443 12.3213 22.0951 12.4601 22.0161C12.5989 21.9372 12.72 21.8303 12.8158 21.702L18.4035 14.7175C18.5736 14.5092 18.6667 14.2479 18.6667 13.9783C18.6667 13.7087 18.5736 13.4474 18.4035 13.2391L12.6191 6.25459C12.5031 6.11371 12.3556 6.00235 12.1888 5.92954C12.022 5.85673 11.8404 5.82452 11.6589 5.83552Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.featured_swiper_wrapper}>
                <Swiper
                    loop
                    navigation={{
                        prevEl: `.${s.featured_swiper_prev}`,
                        nextEl: `.${s.featured_swiper_next}`,
                    }}
                    slidesPerView={1}
                    speed={700}
                    modules={[Navigation]}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    className="swiper"
                    spaceBetween={0}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 200
                        },
                        800: {
                            slidesPerView: 2
                        },
                        1100: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {featuredHouses.map((item) => (
                        <SwiperSlide key={item.id} className={s.featured_swiper_slide}>
                            <div className={s.featured_swiper_slide_house}>
                                <Image
                                    src={item.img}
                                    width={340}
                                    height={382}
                                />
                                <h3
                                    className={
                                        s.featured_swiper_slide_title
                                    }
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={
                                        s.featured_swiper_slide_price
                                    }
                                >
                                    {item.price}
                                </p>
                                <div
                                    className={
                                        s.featured_swiper_slide_seller
                                    }
                                >
                                    <Image
                                        className={
                                            s.featured_swiper_slide_pfp
                                        }
                                        src={item.pfp}
                                        width={40}
                                        height={40}
                                    />
                                    <div
                                        className={
                                            s.featured_swiper_slide_seller_info
                                        }
                                    >
                                        <h3
                                            className={
                                                s.featured_swiper_slide_name
                                            }
                                        >
                                            {item.sellerName}
                                        </h3>
                                        <p
                                            className={
                                                s.featured_swiper_slide_address
                                            }
                                        >
                                            {item.address}
                                        </p>
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

export default Second;
