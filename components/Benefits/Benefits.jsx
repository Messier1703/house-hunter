import React from 'react';
import { perks } from '@/constants/perks';
import Image from 'next/image';
import s from './Benefits.module.scss';

const Benefits = () => {
    return (
        <div className={s.benefits}>
            <div className="container">
                <div className={s.benefits_wrapper}>
                    <div className={s.benefits_list}>
                        <Image src="/dot-ornament.png" className={s.benefits_dot_ornament} width={90} height={100} />
                        <Image src="/rectangle-deco.png" className={s.benefits_rectangle_deco} width={32} height={1} />
                        <h6 className={s.benefits_list_title}>Benefit</h6>
                        <h3 className={s.benefits_list_desc}>Benefit You Get When Using Our Services</h3>
                        <h2 className={s.benefits_list_number}>600+</h2>
                        <p className={s.benefits_list_info}>Home Furniture throughout Indonesia</p>
                        <h2 className={s.benefits_list_number}>135+</h2>
                        <p className={s.benefits_list_info}>Staff ready to help you</p>
                    </div>
                    <div className={s.benefits_perks}>
                        {perks.map((item) => (
                            <div className={s.benefits_perks_card}>
                                {item.icon}
                                <div>
                                    <h3 className={s.benefits_perks_card_title}>{item.title}</h3>
                                    <p className={s.benefits_perks_card_desc}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;