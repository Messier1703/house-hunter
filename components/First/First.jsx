import React from "react";
import Image from "next/image";
import s from "./First.module.scss";
import { firstHouses } from "@/constants/firstHouses";
import { partnerships } from "@/constants/Partnerships";

const First = () => {
    return (
        <div className={s.first}>
            <div className="container">
                <div className={s.first_wrapper}>
                    <h1 className={s.first_title}>
                        Good Living Better live{" "}
                        <span className={s.first_title_outlined}>
                            your dreams
                        </span>{" "}
                        easily here
                    </h1>
                    <p className={s.first_desc}>
                        Everything you need about finding your place to live
                        will be here, where it will be easier for you. Our
                        furniture is made from selected and best quality
                        materials that are suitable for your dream home
                    </p>
                    <div className={s.first_search}>
                        <div className={s.first_search_logo}>
                            <svg
                                width="18"
                                height="22"
                                viewBox="0 0 18 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 0C11.3869 0 13.6761 0.993372 15.364 2.76159C17.0518 4.5298 18 6.92801 18 9.42865C18 13.934 15.0975 18.081 9.402 21.8776C9.28181 21.9575 9.14237 22 9 22C8.85763 22 8.71819 21.9575 8.598 21.8776C2.9025 18.081 0 13.934 0 9.42865C0 6.92801 0.948211 4.5298 2.63604 2.76159C4.32387 0.993372 6.61305 0 9 0ZM9 6.28576C8.20435 6.28576 7.44129 6.61689 6.87868 7.20629C6.31607 7.7957 6 8.5951 6 9.42865C6 10.2622 6.31607 11.0616 6.87868 11.651C7.44129 12.2404 8.20435 12.5715 9 12.5715C9.79565 12.5715 10.5587 12.2404 11.1213 11.651C11.6839 11.0616 12 10.2622 12 9.42865C12 8.5951 11.6839 7.7957 11.1213 7.20629C10.5587 6.61689 9.79565 6.28576 9 6.28576Z"
                                    fill="#F2994A"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for the location you want!"
                            className={s.first_search_input}
                        />
                        <button className={s.first_search_btn}>
                            <span>Search</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="first_partnerships">
                        <h3 className={s.first_partnerships_title}>
                            Our Partnership
                        </h3>
                        <div className={s.first_partnerships_logos}>
                            {partnerships.map((item) => (
                                <Image
                                    alt="Company Logo"
                                    key={item.id}
                                    width={100}
                                    height={64}
                                    src={item.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.first_houses}>
                {firstHouses.map((item) => (
                    <div
                        className={s.first_houses_card}
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            
                        }}
                        id={item.id}
                    />
                ))}
            </div>
            <div className={s.first_stats}>
                <div className={s.first_stats_card}>
                    <Image src="/stats-pic.png" width={171} height={121} className={s.first_stats_card_img}/>
                    <div>
                        <h2 className={s.first_stats_title}>1K+ People</h2>
                        <p className={s.first_stats_details}>Successfully Getting Home</p>
                    </div>
                </div>
                <div className={s.first_stats_card}>
                    <Image src="/stats-villa.png" width={57} height={57} className={s.first_stats_card_img}/>
                    <div>
                        <h2 className={s.first_stats_title}>1K+ People</h2>
                        <p className={s.first_stats_details}>Successfully Getting Home</p>
                    </div>
                </div>
                <div className={s.first_stats_card}>
                    <Image src="/stats-pfp.png" width={121} height={121} className={s.first_stats_card_img}/>
                    <div>
                        <h2 className={s.first_stats_title}>1K+ People</h2>
                        <p className={s.first_stats_details}>Successfully Getting Home</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;
