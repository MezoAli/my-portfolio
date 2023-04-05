import React from "react";

function HomeLayout({ children, className }) {
	return (
		<div className={`w-full h-full bg-light z-0 p-32 ${className}`}>
			{children}
		</div>
	);
}

export default HomeLayout;
