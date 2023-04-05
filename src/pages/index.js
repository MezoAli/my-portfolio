import HomeLayout from "@/components/HomeLayout";
import Image from "next/image";
import Moutaz from "../../public/image.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
	return (
		<main className="flex items-center w-full text-dark min-h-screen">
			<HomeLayout className="pt-0">
				<div className="flex items-center justify-between w-full">
					<div className="w-1/2">
						<Image
							src={Moutaz}
							alt="Moutaz Ali"
							className="h-auto rounded-full"
						/>
					</div>
					<div className="w-1/2 pl-8 flex flex-col items-center self-center">
						<motion.h1
							className="text-4xl font-bold w-full py-4"
							initial={{ opacity: 0, y: -50 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.5, duration: 1 },
							}}
						>
							Turning Vision Into Reality With Code ...
						</motion.h1>
						<motion.p
							className="font-medium text-base my-4"
							initial={{ opacity: 0, y: 50 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.5, duration: 1 },
							}}
						>
							As a skilled front-end developer, I am dedicated to turning ideas
							into innovative web applications. Explore my latest projects and
							articles, showcasing my expertise in React.js and Next.js .
						</motion.p>
						<div className="flex items-center self-start">
							<Link
								href="/Moutaz-Ali-frontend.pdf"
								target="_blank"
								className="flex items-center justify-between text-lg text-light bg-dark py-2.5 px-6 rounded-lg text-semibold border border-solid hover:bg-light hover:text-dark hover:border-dark"
							>
								Resume
								<LinkArrow />
							</Link>
							<Link
								href="mailto:moutaz.ali.dev@gmail.com"
								className="ml-4 underline"
							>
								Contact via mail
							</Link>
						</div>
					</div>
				</div>
			</HomeLayout>
		</main>
	);
}
