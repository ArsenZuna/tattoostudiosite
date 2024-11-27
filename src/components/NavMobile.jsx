import React from 'react';
//import nav data
import {navData} from "../data";
//import components
import Socials from "./Socials.jsx";
import {Link} from "react-scroll";

const NavMobile = () => {
	//destructure data
	const {items} = navData;

	return (
		<nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
			<ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
				{items.map((item, index) => {
					return (
						<li key={index}>
							{/* Use Link from react-scroll */}
							<Link
								className='text-2xl font-primary link hover:border-b-2 hover:border-dark transition duration-400 cursor-pointer'
								to={item.href}  // Set the target section's ID as the 'to' prop
								smooth={true}   // Enable smooth scrolling
								duration={100}  // Set the scroll duration in milliseconds
								spy={true}      // Automatically add the "active" class when the section is in view
							>
								{item.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className='text-2xl'>
				<Socials/>
			</div>
		</nav>
	)
};

export default NavMobile;
