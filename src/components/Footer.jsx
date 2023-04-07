import Link from "next/link";

function Footer() {
	return (
		<footer className="flex items-center justify-between p-8 border-t-2 border-dark">
			<span>{new Date().getFullYear()} &copy; All Right Reserved</span>
			<div className="flex items-center">
				{" "}
				Build With <span className="text-primary text-3xl">&#9825;</span>
				By{" "}
				<a
					className="underline"
					href="https://github.com/MezoAli"
					target="_blank"
				>
					Moutaz Ali
				</a>
			</div>
			<a
				href="https://api.whatsapp.com/send?phone=00201007176747"
				className="underline text-green-600"
			>
				Chat with Me On Whatsapp
			</a>
		</footer>
	);
}

export default Footer;
