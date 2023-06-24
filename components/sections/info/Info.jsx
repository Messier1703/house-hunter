import React from "react";
import Image from "next/image";
import { articles } from "@/constants/articles";
import s from "./Info.module.scss";

const Info = () => {
    return (
        <div className={s.articles}>
            <div className="container">
                <h6 className={s.articles_title}>
                    See tips and trick from our partnership
                </h6>
                <h2 className={s.articles_desc}>
                    Find out more about selling and buying homes
                </h2>
                <div className={s.articles_wrapper}>
                    <div className={s.articles_cards}>
                        {articles.map((item) => (
                            <div className={s.articles_card}>
                                <Image
                                    src={item.img}
                                    width={200}
                                    height={144}
                                    className={s.articles_card_img}
                                />
                                <div className={s.articles_card_info}>
                                    <div className={s.articles_card_name}>
                                        <Image
                                            src={item.pfp}
                                            width={40}
                                            height={40}
                                        />
                                        <p>{item.name}</p>
                                    </div>
                                    <h2 className={s.articles_card_title}>
                                        {item.title}
                                    </h2>
                                    <div className={s.articles_card_read}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                                                fill="#888B97"
                                            />
                                        </svg>
                                        <p className={s.articles_card_time}>
                                            {item.readTime} min read |{" "}
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={s.articles_featured}
                        style={{
                            backgroundImage: "url(/featured-article-bg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                        }}
                    >
                        <div className={s.articles_featured_name}>
                            <Image
                                src="/cameron-williamson-pfp.png"
                                className={s.articles_featured_pfp}
                                width={32}
                                height={32}
                            />
                            <h6>Cameron Williamson</h6>
                        </div>
                        <h2 className={s.articles_featured_title}>
                            12 Things to know before buying a house
                        </h2>
                        <div className={s.articles_featured_time}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                                    fill="#F2F2F2"
                                />
                            </svg>
                            <p>8 min read | 25 Apr 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
