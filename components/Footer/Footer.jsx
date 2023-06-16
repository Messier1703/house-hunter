import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={s.footer}>
			<div className="container">
				<div className={s.footer_wrapper}>
					<div>
						<Image src="/logo.png" width={71} height={51} foot />
						<p className={s.footer_desc}>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
						<p className={s.footer_subscribe}>Subscribe to our newsletter!</p>
						<div className={s.footer_search}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM19 6L12.5 10.47C12.348 10.5578 12.1755 10.604 12 10.604C11.8245 10.604 11.652 10.5578 11.5 10.47L5 6H19Z" fill="#27AE60" />
							</svg>
							<input type="text" className={s.footer_search_input} />
							<button className={s.footer_search_btn}>Subscribe Now</button>
						</div>
						<div className={s.footer_policies}>
							<p className={s.footer_policies_tos}>Terms & Conditions</p>
							<p className={s.footer_policies_privacy}>Privacy Policy</p>
						</div>
					</div>
					<div className={s.footer_links}>
						<div className={s.footer_links_property}>
							<h6 className={s.footer_links_title}>Property</h6>
							<Link href="#" className={s.footer_links_link}>House</Link>
							<Link href="#" className={s.footer_links_link}>Apartment</Link>
							<Link href="#" className={s.footer_links_link}>Villa</Link>
						</div>
						<div className={s.footer_links_article}>
							<h6 className={s.footer_links_title}>Article</h6>
							<Link href="#" className={s.footer_links_link}>New Article</Link>
							<Link href="#" className={s.footer_links_link}>Popular Article</Link>
							<Link href="#" className={s.footer_links_link}>Most Read</Link>
							<Link href="#" className={s.footer_links_link}>Tips & Tricks</Link>
						</div>
						<div className={s.footer_links_contact}>
							<h6 className={s.footer_links_title}>Contact</h6>
							<a href="#" className={s.footer_links_link}>Medan, South Sumatera</a>
							<a href="#" className={s.footer_links_link}>(62) 81312120001</a>
							<a href="#" className={s.footer_links_link}>halo@homedesk.com</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;