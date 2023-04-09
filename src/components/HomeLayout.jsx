import React from "react";

function Layout({ children, className }) {
	return (
		<div className={`w-full h-full bg-light z-0 p-32 ${className}`}>
			{children}
		</div>
	);
}

export default Layout;
