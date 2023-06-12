import React from 'react';
import s from './Second.module.scss';

const Second = () => {
    return (
        <div>
            <div className={s.second}>
                <div className="container">
                    <div className={s.second_nav}>
                        <h6 className={s.second_desc}>Our Recommendation</h6>
                        <h2 className={s.second_title}>Featured House</h2>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;