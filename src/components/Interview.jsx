import React, {useState} from 'react';
//import data
import {interviewData} from "../data";
//import modal video
import ModalVideo from "react-modal-video";
//import modal video css
import '../modalVideo.scss'
//import motion
import {motion} from "framer-motion";
//import fadeIn
import {fadeIn} from "../variants";
//
import Garage from '../img/interview/garage.mp4'

const Interview = () => {
	//destructure data
	const {title, btnText, btnIcon} = interviewData;

	//open state
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.section
			variants={fadeIn('down')}
			initial='hidden'
			whileInView={'show'}
			viewport={{once: false, amount: 0.2}}
			className='section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]'>
			<div className='container mx-auto h-full'>
				<div className='flex flex-col justify-center h-full'>
					<div className='flex flex-col items-start max-w-[880px]'>
						{/* title */}
						<motion.h3 variants={fadeIn('down')}
							className='text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8'>
							{title}
						</motion.h3>
						<motion.div variants={fadeIn('down')}>
							{/* play button */}
							<div onClick={() => {setIsOpen(true)}} className='flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition'>
								{/* border */}
								<div
									className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
									{/* inner */}
									<div className='bg-white w-full h-full rounded-full flex justify-center items-center'>
										<div className='pl-1'>
											{btnIcon}
										</div>
									</div>
								</div>
								{/*btn text*/}
								<div className='font-primary uppercase'>
									{btnText}
								</div>
							</div>
						</motion.div>
						{/*btn*/}
						<ModalVideo channel='custom' url={Garage} autoplay isOpen={isOpen} videoId='_garage_art_studio_1' onClose={() => {setIsOpen(false)}}/>
					</div>
				</div>
			</div>
		</motion.section>
	)
};

export default Interview;
