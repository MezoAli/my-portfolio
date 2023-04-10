import { motion } from "framer-motion";

const Skill = ({ name, x = 0, y = 0 }) => {
	return (
		<motion.div
			className={`flex cursor-pointer justify-center items-center bg-dark text-light rounded-full py-3 px-6 absolute font-semibold`}
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x, y }}
			transition={{ duration: 1.5 }}
		>
			{name}
		</motion.div>
	);
};

function Skills() {
	return (
		<>
			<h2 className="mt-40 font-bold text-center text-5xl w-full mb-10">
				Skills
			</h2>
			<div className="flex justify-center items-center h-screen w-full rounded-full relative bg-circularLight">
				<Skill name="Web" />
				<Skill name="HTML" x="-20vw" y="2vw" />
				<Skill name="CSS" x="-5vw" y="-10vw" />
				<Skill name="Bootstrap" x="20vw" y="6vw" />
				<Skill name="TailwindCSS" x="0vw" y="12vw" />
				<Skill name="SASS" x="-20vw" y="-15vw" />
				<Skill name="Javascript" x="15vw" y="-12vw" />
				<Skill name="Typescript" x="32vw" y="-5vw" />
				<Skill name="Chakra UI" x="0vw" y="-20vw" />
				<Skill name="React JS" x="-25vw" y="18vw" />
				<Skill name="Next Js" x="-25vw" y="18vw" />
				<Skill name="Firebase" x="18vw" y="18vw" />
			</div>
		</>
	);
}

export default Skills;
