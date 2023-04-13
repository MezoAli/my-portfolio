import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ company, companyLink, time, position, address, work }) => {
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
				<h3 className="font-bold capitalize text-2xl">
					{position}&nbsp;
					<a
						href={companyLink}
						alt="company"
						target="_blank"
						className="text-primary capitalize"
					>
						@{company}
					</a>
				</h3>
				<span className="text-dark/75 capitalize font-medium">
					{time} | {address}
				</span>
				<p className="font-medium w-full">{work}</p>
			</motion.div>
		</li>
	);
};

function Experience() {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-32">
			<h2 className="mt-40 font-bold text-center text-5xl w-full mb-20">
				Experience
			</h2>
			<div ref={ref} className="w-[75%] relative mx-auto">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute w-[3px] bg-dark left-9 top-1 origin-top h-full"
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4">
					<Details
						company="SIMMI foundation"
						companyLink="https://simmifoundation.org/home/home.php"
						position="React js Developer"
						time="Oct.2022 - Feb.2023"
						address="India (Remote)"
						work="we were a team of Front-end developers and Back-end developers responsible for developing a site for the company"
					/>
					<Details
						company="SIMMI foundation"
						companyLink="https://simmifoundation.org/home/home.php"
						position="Senior React js Developer"
						time="Feb.2023 - March.2023"
						address="India (Remote)"
						work="I were responsible for the Front-end developers and in conjugation with Devops engineers we were focusing of CI/CD of the website"
					/>
					<Details
						company="Eraasoft"
						companyLink="https://www.eraasoft.com/"
						position="Next js Developer"
						time="Jan.2023 - now"
						address="Egypt (Remote)"
						work="I have developing a HR managment system along with the Back-end developers with all features including creating branchs,departments,employees with all CRUD opeartions and assigning tasks and check in and out from work and vacations and download reports for the employees"
					/>
					<Details
						company="Viatris"
						companyLink="https://www.viatris.com/en"
						position="Oncology Key Account Manager"
						time="Jan.2018 - now"
						address="Egypt"
						work="Responsible for promoting the company products in Upper Egypt,negeoting with the key accounts for avilability of our products in the accounts and marketing our products to all potenial customers"
					/>
				</ul>
			</div>
		</div>
	);
}

export default Experience;
