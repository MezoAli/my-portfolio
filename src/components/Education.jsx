import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, info, place }) => {
	const ref = useRef();
	return (
		<li
			ref={ref}
			className="w-[75%] mx-auto my-8 first:mt-0 last:mb-0 flex flex-col items-center justify-between "
		>
			<LiIcon refernece={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h3 className="font-bold capitalize text-2xl">{type}</h3>
				<span className="text-dark/75 capitalize font-medium">
					{time} | {place}
				</span>
				<p className="font-medium w-full">{info}</p>
			</motion.div>
		</li>
	);
};

function Education() {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-32">
			<h2 className="mt-40 font-bold text-center text-5xl w-full mb-20">
				Education
			</h2>
			<div ref={ref} className="w-[75%] relative mx-auto">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute w-[3px] bg-dark left-9 top-1 origin-top h-full"
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4">
					<Details
						type="Level 2 Front-end Development"
						time="Aug.2022-now"
						place="Eraasoft, Egypt"
						info="related Skills includes React Js,Webpack & Redux"
					/>
					<Details
						type="React Development Cross Skilling"
						time="Aug.2022-Sept.2022"
						place="Udacity"
						info="related skills includes React and Redux"
					/>
					<Details
						type="Level 1 Front-end Development"
						time="June2021-Aug.2021"
						place="Eraasoft, Egypt"
						info="related skills includes HTML,CSS & Javascript"
					/>
					<Details
						type="Web Development Challenger Track"
						time="Oct.2020-Dec.2020"
						place="Udacity"
						info="related skills includes HTML,CSS & Javascript"
					/>
					<Details
						type="Bachelor Of Pharmaceutical Science"
						time="2008-2012"
						place="Assiut University, Egypt"
						info="related skills includes time management and statstics"
					/>
				</ul>
			</div>
		</div>
	);
}

export default Education;
