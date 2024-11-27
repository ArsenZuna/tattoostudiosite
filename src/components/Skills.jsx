import React, {useState, useEffect} from 'react';
//import useInView hook
import {useInView} from 'react-intersection-observer';
//react circular
import {CircularProgressbar} from 'react-circular-progressbar'
//react circular styles
import 'react-circular-progressbar/dist/styles.css'
//import motion
import {motion} from "framer-motion";
//import fadeIn
import {fadeIn} from "../variants";

const Skills = () => {
	const {ref, inView} = useInView({
		threshold: 0.2,
	});

	//full body tattoo state
	const [fullBody, setFullBody] = useState(0);
	const [oldSchool, setOldSchool] = useState(0);
	const [neoTradit, setNeoTradit] = useState(0);
	const [fineLine, setFineLine] = useState(0);

	//increase
	useEffect(() => {
		if (inView) {
			setTimeout(() => {
				if (fullBody < 91) {
					setFullBody(fullBody + 1);
				}
				if (oldSchool < 84) {
					setOldSchool(oldSchool + 1);
				}
				if (neoTradit < 95) {
					setNeoTradit(neoTradit + 1);
				}
				if (fineLine < 80) {
					setFineLine(fineLine + 1);
				}
			}, 65)
		} else {
			setFullBody(0);
			setOldSchool(0);
			setNeoTradit(0);
			setFineLine(0);
		}
	}, [inView, fullBody, oldSchool, neoTradit, fineLine]);

	//circular progressbar
	const styles = {
		path: {
			stroke: '#111111'
		},
		trail: {
			stroke: '#eeeeee'
		},
		text: {
			fill: '#111111',
			fontSize: '24px'
		}
	};

	return (
		<motion.section
			ref={ref}
			className='section'
			variants={fadeIn('up')}
			initial='hidden'
			whileInView={'show'}
			viewport={{once: false, amount: 0.1}}
		>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
					<div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
						{/* circular item */}
						<div>
							<CircularProgressbar
								value={fullBody}
								strokeWidth={1}
								styles={styles}
								text={`${fullBody}%`}
							/>
							{/* text */}
							<div className='uppercase font-light tracking-[1.2px] text-center'>Full Body Tattoo</div>
						</div>
					</div>
					<div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
						{/* circular item */}
						<div>
							<CircularProgressbar
								value={oldSchool}
								strokeWidth={1}
								styles={styles}
								text={`${oldSchool}%`}
							/>
							{/* text */}
							<div className='uppercase font-light tracking-[1.2px] text-center'>Old School Tattoo</div>
						</div>
					</div>
					<div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
						{/* circular item */}
						<div>
							<CircularProgressbar
								value={neoTradit}
								strokeWidth={1}
								styles={styles}
								text={`${neoTradit}%`}
							/>
							{/* text */}
							<div className='uppercase font-light tracking-[1.2px] text-center'>Neo Traditional Tattoo</div>
						</div>
					</div>
					<div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
						{/* circular item */}
						<div>
							<CircularProgressbar
								value={fineLine}
								strokeWidth={1}
								styles={styles}
								text={`${fineLine}%`}
							/>
							{/* text */}
							<div className='uppercase font-light tracking-[1.2px] text-center'>Fine Line Tattoo</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Skills;
