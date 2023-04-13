import Layout from "@/components/HomeLayout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import MoutazAli from "../../../public/image.jpeg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
	const ref = useRef();

	const motionValue = useMotionValue(0);
	const springVlaue = useSpring(motionValue, { duration: 3000 });
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (inView) {
			motionValue.set(value);
		}
	}, [motionValue, value, inView]);

	useEffect(() => {
		springVlaue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springVlaue, value]);

	return <span className="inline-block text-5xl font-bold" ref={ref}></span>;
};

function About() {
	return (
		<>
			<Head>
				<title>Moutaz Ali | About Page</title>
				<meta
					name="descreption"
					content="passionate web developer focusing on front-end web development especially React js and Next js"
				/>
			</Head>
			<main className="flex flex-col justify-center items-center w-full">
				<Layout className="pt-8">
					<motion.h2
						className="text-6xl font-bold w-full py-4 text-center mb-12"
						initial={{ opacity: 0, y: -50 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.5, duration: 1 },
						}}
					>
						Passion Fuel Perpose !
					</motion.h2>
					<div className="grid grid-cols-8 gap-16 w-full mb-8">
						<div className="col-span-3 flex flex-col justify-start items-start">
							<h2 className="text-dark/75 uppercase mb-4 text-lg font-bold">
								Biography
							</h2>
							<p className="text-sm my-3">
								Hi, Iam Moutaz Ali, a Front-end web developer with a passion for
								creating beautiful, functional, and user-centered digital
								experiences. With 1 year of experience in the field. I am always
								looking for new and innovative ways to bring my clients visions
								to life.
							</p>
							<p className="text-sm my-3">
								I believe that design is about more than just making things look
								pretty - it is about solving problems and creating intuitive,
								enjoyable experiences for users.
							</p>
							<p className="text-sm my-3">
								Whether Iam working on a website, web application, or other
								digital product, I bring my commitment to design excellence and
								user-centered thinking to every project I work on. I look
								forward to the opportunity to bring my skills and passion to
								your next project.
							</p>
						</div>
						<div className="col-span-3 relative h-max border-2 border-dark rounded-2xl bg-light p-4 mt-8">
							<div className="absolute -z-10 w-[102%] h-[103%] bg-dark top-0 -right-2 rounded-2xl" />
							<Image
								src={MoutazAli}
								alt="moutaz ali"
								className="w-full h-auto rounded-2xl"
							/>
						</div>
						<div className="col-span-2 flex flex-col items-end justify-between">
							<div className="flex flex-col items-end justify-center">
								<span className="inline-block text-5xl font-bold">
									+<AnimatedNumbers value={15} />
								</span>
								<h2 className="text-xl font-medium text-dark/75">Projects</h2>
							</div>
							<div className="flex flex-col items-end justify-center">
								<span className="inline-block text-5xl font-bold">
									+<AnimatedNumbers value={10} />
								</span>
								<h2 className="text-xl font-medium text-dark/75">
									Technologies
								</h2>
							</div>
							<div className="flex flex-col items-end justify-center">
								<span className="inline-block text-5xl font-bold">
									+<AnimatedNumbers value={1} />
								</span>
								<h2 className="text-xl font-medium text-dark/75">
									Of Experience
								</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
}

export default About;
