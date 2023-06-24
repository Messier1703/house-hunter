import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import s from './Main.module.scss';
import { firstHouses } from '@/constants/firstHouses';
import { partnerships } from '@/constants/Partnerships';
import { mainStats } from '@/constants/mainStats';

const Main = () => {
    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.main_wrapper}>
                    <motion.h1
                        className={s.main_title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Good Living Better live{' '}
                        <span className={s.main_title_outlined}>your dreams</span>{' '}
                        easily here
                    </motion.h1>
                    <motion.p
                        className={s.main_desc}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Everything you need about finding your place to live will be here,
                        where it will be easier for you. Our furniture is made from selected
                        and best quality materials that are suitable for your dream home.
                    </motion.p>
                    <div className={s.main_search}>
                        <div className={s.main_search_logo}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z" fill="#F2994A" />
                            </svg>
                        </div>
                        <motion.input
                            type="text"
                            placeholder="Search for the location you want!"
                            className={s.main_search_input}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <motion.button
                            className={s.main_search_btn}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <span>Search</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z" fill="white" />
                            </svg>

                        </motion.button>
                    </div>
                    <div className="main_partnerships">
                        <motion.h3
                            className={s.main_partnerships_title}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Our Partnership
                        </motion.h3>
                        <div className={s.main_partnerships_logos}>
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
            <div className={s.main_houses}>
                {firstHouses.map((item) => (
                    <motion.div
                        className={s.main_houses_card}
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        id={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    />
                ))}
            </div>
            <div className={s.main_stats}>
                {mainStats.map((item) => (
                    <motion.div
                        className={s.main_stats_card}
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <Image
                            className={s.main_stats_img}
                            src={item.img}
                            width={56}
                            height={56}
                        />
                        <div className={s.main_stats_text}>
                            <h4 className={s.main_stats_title}>{item.title}</h4>
                            <p className={s.main_stats_details}>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Main;
