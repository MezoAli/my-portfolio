import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, LinkedInIcon, GithubIcon } from "./Icons";
import { motion } from "framer-motion";

function Navbar() {
	const router = useRouter();
	return (
		<header className="w-full px-32 py-8 font-medium flex justify-between items-center">
			<nav>
				<Link href="/" className="relative mr-4 group">
					Home
					<span
						className={`absolute h-[1px] inline-block left-0 bottom-0 bg-dark group-hover:w-full transition-[width] ease duration-300 ${
							router.asPath === "/" ? "w-full" : "w-0"
						}`}
					>
						&nbsp;
					</span>
				</Link>
				<Link href="/about" className="relative mx-4 group">
					About
					<span
						className={`absolute h-[1px] inline-block left-0 bottom-0 bg-dark group-hover:w-full transition-[width] ease duration-300 ${
							router.asPath === "/about" ? "w-full" : "w-0"
						}`}
					>
						&nbsp;
					</span>
				</Link>
				<Link href="/projects" className="relative mx-4 group">
					Projects
					<span
						className={`absolute h-[1px] inline-block left-0 bottom-0 bg-dark group-hover:w-full transition-[width] ease duration-300 ${
							router.asPath === "/projects" ? "w-full" : "w-0"
						}`}
					>
						&nbsp;
					</span>
				</Link>
				<Link href="/contact" className="relative ml-4 group">
					Contact
					<span
						className={`absolute h-[1px] inline-block left-0 bottom-0 bg-dark group-hover:w-full transition-[width] ease duration-300 ${
							router.asPath === "/contact" ? "w-full" : "w-0"
						}`}
					>
						&nbsp;
					</span>
				</Link>
			</nav>

			<nav className="flex items-center justify-center flex-wrap">
				<motion.a
					href=""
					target="_blank"
					className="w-6 mx-3"
					whileHover={{ y: -3 }}
					whileTap={{ scale: 0.8 }}
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					href=""
					className="w-6 mx-3"
					target="_blank"
					whileHover={{ y: -3 }}
					whileTap={{ scale: 0.8 }}
				>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					href=""
					target="_blank"
					className="w-6 mx-3"
					whileHover={{ y: -3 }}
					whileTap={{ scale: 0.8 }}
				>
					<GithubIcon />
				</motion.a>
			</nav>
			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	);
}

export default Navbar;
