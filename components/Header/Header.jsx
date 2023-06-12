import React from 'react';
import Image from 'next/image';
import s from './Header.module.scss';

const Header = () => {
	return (
		<div className='container'>
			<div className={s.header}>
				<a href="#" className="header_logo">
					<Image src='/logo.png' width={71} height={51} />
				</a>
				<div className={s.header_links}>
					<a href="#" className={s.header_link}>Home</a>
					<a href="#" className={s.header_link}>Property</a>
					<a href="#" className={s.header_link}>Property</a>
					<button className={s.header_btn}>Sign up!</button>
				</div>
			</div>
		</div>
	);
};

export default Header;