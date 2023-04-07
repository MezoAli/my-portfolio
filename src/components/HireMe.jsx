import Link from "next/link";
import { CircularText } from "./Icons";

function HireMe() {
	return (
		<div className="fixed left-4 bottom-4 flex justify-center items-center overflow-hidden">
			<div className="relative w-48 h-auto flex justify-center items-center">
				<CircularText className="animate-spin-slow" />
				<Link
					href="mailto:moutaz.ali.dev@gmail.com"
					className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm bg-dark text-light p-1 rounded-full hover:bg-light hover:text-dark
                    border border-dark"
				>
					{" "}
					Hire Me
				</Link>
			</div>
		</div>
	);
}

export default HireMe;
