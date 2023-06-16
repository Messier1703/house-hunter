import React from 'react';
import Image from 'next/image';
import s from './Info.module.scss';

const Info = () => {
    return (
        <div className={s.info}>
            <div className="container">
                <h6 className={s.info_title}>See tips and trick from our partnership</h6>
                <h2 className={s.info_desc}>Find out more about selling and buying homes</h2>
                <div className={s.info_articles}>
                    <div className={s.info_articles_featured}>
                        <Image src="/cameron-williamson-pfp.png" className={s.info_articles_featured_pfp} width={32} height={32} />
                        <h6 className={s.info_articles_featured_name}>Cameron Williamson</h6>
                        <h2 className={s.info_articles_featured_title}>12 Things to know before buying a house</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;