import Link from "next/link";

function Navbar() {
	return (
		<header className="w-full px-32 py-8 font-medium flex justify-between items-center">
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</nav>
			<h2>Logo</h2>
			<nav>
				<Link href="" target="_blank">
					F
				</Link>
				<Link href="" target="_blank">
					L
				</Link>
				<Link href="" target="_blank">
					G
				</Link>
				<Link href="" target="_blank">
					T
				</Link>
			</nav>
		</header>
	);
}

export default Navbar;
