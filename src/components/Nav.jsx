import React from 'react';
import { Link } from 'react-scroll';  // Import from react-scroll
import { navData } from "../data";

const Nav = () => {
	const { items } = navData;

	return (
		<nav>
			<ul className='flex gap-x-[58px]'>
				{items.map((item, index) => {
					return (
						<li key={index}>
							{/* Use Link from react-scroll */}
							<Link
								className='link hover:border-b-2 hover:border-dark transition duration-400 cursor-pointer'
								to={item.href}  // Set the target section's ID as the 'to' prop
								smooth={true}   // Enable smooth scrolling
								duration={500}  // Set the scroll duration in milliseconds
								spy={true}      // Automatically add the "active" class when the section is in view
								offset={-100}   // Optional: adjust the scroll position if you have a fixed header
							>
								{item.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
