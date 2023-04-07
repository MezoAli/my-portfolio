import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 512 512"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h512v512H0z" />
		<path
			fill="currentColor"
			d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
		/>
	</svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 209"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v209H0z" />
		<path
			fill="#55acee"
			d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
		/>
	</svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 256"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v256H0z" />
		<g fill="none">
			<rect width={256} height={256} fill="#fff" rx={60} />
			<rect width={256} height={256} fill="#0A66C2" rx={60} />
			<path
				fill="#fff"
				d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
			/>
		</g>
	</svg>
);

export const SunIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<g strokeDasharray="2">
				<path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.2s"
						values="4;2"
					/>
				</path>
				<path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.2s"
						dur="0.2s"
						values="4;2"
					/>
				</path>
			</g>
			<path
				fill="currentColor"
				d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
				opacity="0"
			>
				<set attributeName="opacity" begin="0.5s" to="1" />
			</path>
		</g>
		<g fill="currentColor" fillOpacity="0">
			<path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
				<animate
					id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="22" cy="2" r="3" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="3;12"
				/>
			</circle>
			<circle cx="22" cy="2" r="1">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="1;10"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="6"
			fill="currentColor"
			mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
		>
			<set attributeName="opacity" begin="0.5s" to="0" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.1s"
				dur="0.4s"
				values="6;10"
			/>
		</circle>
	</svg>
);

export const MoonIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
		<g
			fill="none"
			stroke="currentColor"
			strokeDasharray="2"
			strokeDashoffset="2"
			strokeLinecap="round"
			strokeWidth="2"
		>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.2s"
					dur="0.2s"
					values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.2s"
					dur="0.2s"
					values="2;0"
				/>
			</path>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.5s"
					dur="0.2s"
					values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.5s"
					dur="1.2s"
					values="2;0"
				/>
			</path>
			<animateTransform
				attributeName="transform"
				dur="30s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			/>
		</g>
		<g fill="currentColor">
			<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<g
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
			<set attributeName="opacity" begin="0.6s" to="0" />
		</g>
		<mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="18" cy="6" r="12" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="12;3"
				/>
			</circle>
			<circle cx="18" cy="6" r="10">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="10;1"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="10"
			fill="currentColor"
			mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
			opacity="0"
		>
			<set attributeName="opacity" begin="0.6s" to="1" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.6s"
				dur="0.4s"
				values="10;6"
			/>
		</circle>
	</svg>
);

export const CircularText = ({ className, ...rest }) => (
	<svg
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		width="1080.000000pt"
		height="1080.000000pt"
		viewBox="0 0 1080.000000 1080.000000"
		preserveAspectRatio="xMidYMid meet"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<metadata>
			Created by potrace 1.16, written by Peter Selinger 2001-2019
		</metadata>
		<g
			transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
			fill="#000000"
			stroke="none"
		>
			<path
				d="M5670 8106 c0 -13 -3 -38 -6 -56 -7 -32 -8 -32 -50 -26 -37 5 -44 3
-44 -12 0 -9 -3 -34 -6 -54 -7 -37 -6 -37 35 -44 22 -4 41 -12 41 -18 0 -6 -9
-77 -21 -156 -24 -171 -20 -217 23 -265 47 -55 154 -79 227 -54 32 11 33 12
26 58 -9 61 -10 62 -54 55 -22 -3 -48 -1 -59 5 -42 23 -44 42 -22 199 12 81
22 148 23 148 1 1 35 -3 76 -8 40 -6 77 -6 81 -1 5 4 10 28 12 53 l3 45 -74
10 c-41 6 -76 15 -78 21 -2 6 0 37 5 68 l9 56 -74 0 c-70 0 -73 -1 -73 -24z"
			/>
			<path
				d="M5412 8031 l-63 -6 -42 -93 c-23 -51 -46 -93 -52 -94 -5 -1 -34 37
-63 85 l-54 87 -68 0 c-38 0 -71 -3 -73 -7 -3 -5 33 -65 79 -135 l83 -127 -70
-146 c-38 -80 -69 -147 -69 -150 0 -3 31 -5 69 -5 l68 0 49 110 c26 61 52 109
57 107 5 -1 35 -45 66 -97 l58 -95 66 1 c37 0 69 3 73 6 3 3 -32 66 -77 139
-45 74 -82 139 -82 144 0 6 28 69 62 142 63 136 66 144 54 141 -5 -1 -36 -4
-71 -7z"
			/>
			<path
				d="M6465 8005 c-67 -67 18 -175 103 -131 53 28 59 90 11 130 -39 33 -82
34 -114 1z"
			/>
			<path
				d="M4635 7920 c-71 -23 -136 -75 -168 -134 -30 -57 -30 -177 1 -257 55
-141 169 -206 309 -179 114 23 203 94 219 176 6 30 4 32 -39 43 -64 15 -65 15
-81 -22 -25 -60 -114 -97 -182 -75 -38 13 -88 70 -81 92 3 10 32 20 230 81
133 41 131 38 96 132 -38 101 -121 164 -214 162 -16 0 -57 -9 -90 -19z m148
-131 c44 -48 35 -59 -83 -96 -58 -18 -108 -33 -112 -33 -15 0 -8 86 8 109 23
32 92 63 129 56 17 -3 43 -19 58 -36z"
			/>
			<path
				d="M4018 7862 l-58 -38 126 -184 c135 -198 148 -219 141 -226 -3 -3
-123 47 -266 110 -144 64 -264 116 -267 116 -9 0 -122 -79 -129 -90 -6 -9 44
-85 322 -492 l94 -137 54 37 c30 20 54 41 55 45 0 4 -64 102 -142 217 -78 115
-139 212 -136 216 6 5 94 -33 455 -194 l111 -50 54 35 c29 20 57 39 61 43 7 6
-368 575 -407 617 -9 10 -24 4 -68 -25z"
			/>
			<path
				d="M6396 7822 c-2 -4 -59 -131 -126 -282 -67 -151 -128 -285 -136 -297
-18 -28 -63 -31 -100 -7 -13 9 -26 15 -27 13 -57 -84 -60 -92 -41 -107 39 -30
111 -56 156 -56 59 0 109 36 143 105 38 74 255 567 255 579 0 9 -27 23 -97 50
-12 5 -24 6 -27 2z"
			/>
			<path
				d="M6642 7620 c-37 -23 -69 -71 -78 -116 -8 -46 23 -111 89 -182 30 -33
58 -69 61 -80 15 -48 -38 -86 -86 -62 -55 29 -108 97 -108 139 0 29 -10 31
-66 17 -41 -10 -49 -16 -52 -38 -10 -88 139 -228 262 -244 94 -13 187 65 188
158 1 54 -18 92 -85 165 -30 32 -59 67 -64 78 -13 25 0 61 25 69 43 14 123
-43 142 -99 6 -19 13 -35 15 -35 2 0 27 5 55 11 61 13 65 32 22 100 -72 113
-231 173 -320 119z"
			/>
			<path
				d="M5955 7505 c-49 -48 -23 -123 48 -140 68 -17 127 52 101 120 -9 22
-57 45 -94 45 -19 0 -40 -9 -55 -25z"
			/>
			<path
				d="M7235 7049 c-165 -116 -304 -214 -308 -218 -11 -10 149 -240 212
-304 68 -70 138 -101 227 -101 64 0 81 4 157 42 204 101 292 260 239 430 -18
55 -138 249 -210 339 l-17 21 -300 -209z m335 -50 c71 -104 87 -170 57 -242
-25 -58 -128 -145 -204 -173 -111 -39 -189 -2 -283 136 l-38 57 201 141 c111
78 207 141 214 142 7 0 31 -27 53 -61z"
			/>
			<path
				d="M3626 6729 c-49 -58 -19 -139 50 -139 48 0 73 15 90 55 37 90 -77
159 -140 84z"
			/>
			<path
				d="M3486 6519 c-41 -48 -34 -109 15 -134 42 -22 67 -18 100 14 58 58 24
151 -55 151 -26 0 -40 -7 -60 -31z"
			/>
			<path
				d="M7533 6366 c-160 -60 -225 -186 -177 -346 30 -101 94 -170 170 -186
30 -6 32 -4 43 39 15 63 14 77 -8 77 -52 0 -110 103 -97 173 7 37 64 97 91 97
9 0 33 -57 70 -172 31 -95 58 -174 60 -176 2 -2 28 3 57 12 73 21 139 67 167
117 20 36 23 51 19 118 -6 92 -38 162 -98 213 -73 63 -185 76 -297 34z m212
-120 c64 -27 96 -121 59 -174 -22 -31 -73 -57 -79 -40 -32 85 -72 218 -67 222
10 10 52 6 87 -8z"
			/>
			<path
				d="M2946 6221 c-63 -41 -109 -144 -109 -241 0 -97 47 -160 131 -176 84
-16 141 24 207 146 22 40 50 77 62 83 32 14 73 -5 74 -35 4 -74 -13 -111 -72
-162 -46 -39 -46 -44 1 -106 18 -24 19 -24 53 -8 67 32 137 172 137 271 -1
152 -167 240 -274 146 -19 -16 -53 -65 -75 -109 -44 -83 -68 -106 -102 -95
-54 18 -38 133 26 183 14 11 25 22 25 26 0 3 -13 25 -28 50 l-29 45 -27 -18z"
			/>
			<path
				d="M7721 5730 l-264 -118 2 -79 c1 -43 6 -82 10 -86 4 -4 62 -24 127
-44 283 -84 448 -132 451 -130 1 1 -1 33 -5 71 l-7 69 -195 54 c-239 66 -226
61 -213 74 6 6 95 46 198 89 103 43 189 81 191 83 10 9 -9 137 -20 136 -6 0
-130 -54 -275 -119z"
			/>
			<path
				d="M2590 5586 l0 -76 245 0 c272 0 334 -8 365 -47 43 -55 16 -163 -50
-201 -16 -9 -30 -22 -30 -27 0 -6 20 -28 45 -49 54 -44 69 -42 120 17 48 55
69 130 63 221 -8 120 -61 189 -163 214 -22 6 -165 14 -317 17 l-278 7 0 -76z"
			/>
			<path
				d="M7605 5211 c-122 -32 -200 -148 -199 -296 1 -65 19 -111 62 -158 l26
-27 38 37 c21 20 38 40 38 45 0 4 -12 24 -26 45 -58 85 -1 206 103 220 22 3
43 1 45 -3 3 -5 -10 -85 -28 -179 -18 -93 -33 -175 -34 -182 0 -14 85 -33 148
-33 132 1 216 104 216 265 1 94 -20 144 -81 194 -72 59 -223 95 -308 72z m225
-176 c42 -22 63 -68 57 -123 -7 -60 -40 -93 -101 -99 -25 -3 -46 -2 -46 2 0
34 44 235 52 235 5 0 22 -7 38 -15z"
			/>
			<path
				d="M3242 5114 c-33 -23 -45 -60 -32 -100 21 -63 83 -83 134 -43 21 17
26 29 26 65 0 78 -69 120 -128 78z"
			/>
			<path
				d="M3306 4906 l-40 -33 22 -28 c29 -37 29 -89 0 -109 -30 -21 -266 -99
-281 -93 -7 2 -22 36 -35 75 l-23 70 -49 -16 c-28 -9 -50 -21 -50 -27 0 -6 10
-39 21 -74 12 -35 18 -66 13 -71 -5 -4 -33 -15 -61 -25 -29 -9 -53 -19 -53
-21 0 -3 13 -31 30 -64 l30 -59 41 14 c59 21 66 19 79 -21 13 -39 25 -41 92
-15 27 10 27 11 13 50 l-14 40 157 52 c140 46 162 57 200 94 39 40 42 46 42
97 0 68 -22 134 -57 170 -15 16 -29 28 -32 28 -3 0 -24 -15 -45 -34z"
			/>
			<path
				d="M7326 4630 c-29 -26 -66 -99 -66 -131 0 -6 104 -42 105 -36 0 1 5 11
11 21 25 47 29 46 349 -83 173 -70 309 -120 314 -115 9 11 52 116 49 119 -2 2
-145 59 -318 129 -359 143 -384 149 -444 96z"
			/>
			<path
				d="M3378 4522 c-25 -3 -28 -7 -28 -40 0 -69 8 -82 49 -82 104 0 164
-121 103 -208 -11 -15 -46 -43 -77 -61 -46 -28 -68 -35 -111 -35 -45 -1 -57 3
-84 29 -44 42 -57 94 -37 145 l15 39 -55 26 c-31 14 -57 25 -58 25 -12 0 -35
-79 -35 -122 0 -98 79 -221 167 -260 48 -21 129 -25 189 -9 60 16 159 84 190
131 71 107 59 241 -32 349 -45 53 -124 83 -196 73z"
			/>
			<path
				d="M7212 4360 c-90 -52 -152 -160 -152 -265 0 -136 143 -271 300 -283
85 -6 127 8 188 63 69 62 106 140 106 224 0 83 -22 129 -98 199 -105 96 -242
120 -344 62z m174 -119 c80 -37 144 -110 144 -166 0 -58 -55 -122 -113 -132
-70 -11 -202 77 -227 152 -9 29 -8 41 9 79 35 79 105 104 187 67z"
			/>
			<path
				d="M6734 4126 l-48 -43 92 -107 c51 -59 92 -112 92 -117 0 -5 -11 -7
-24 -3 -63 16 -166 -48 -208 -129 -16 -31 -19 -54 -16 -101 10 -156 177 -329
317 -328 107 1 211 98 211 197 0 42 7 44 36 8 l21 -27 52 44 c28 24 50 47 49
51 -6 15 -511 599 -518 599 -5 0 -30 -20 -56 -44z m214 -370 c35 -19 96 -83
116 -123 35 -70 12 -144 -54 -178 -43 -22 -82 -18 -127 13 -74 49 -123 125
-123 188 0 29 8 44 39 75 32 33 45 39 80 39 23 0 54 -6 69 -14z"
			/>
			<path
				d="M3687 4125 c-32 -40 -32 -43 -11 -66 22 -25 13 -38 -110 -155 -139
-133 -159 -180 -115 -271 43 -88 182 -183 269 -183 30 0 34 5 46 73 6 37 6 37
-27 37 -68 1 -162 64 -175 117 -7 28 19 63 48 63 22 0 71 -24 113 -55 113 -84
210 -86 279 -5 35 42 48 96 35 143 -22 81 -124 156 -195 143 l-33 -7 5 48 c5
40 2 54 -18 81 -12 19 -37 42 -53 52 l-31 19 -27 -34z m192 -256 c41 -41 41
-79 0 -113 -39 -33 -55 -33 -114 5 -27 17 -59 35 -72 40 -29 11 -23 26 31 68
54 43 112 43 155 0z"
			/>
			<path
				d="M4095 3698 c-55 -20 -57 -25 -29 -80 18 -36 30 -48 41 -44 59 23 111
13 163 -30 40 -34 54 -81 40 -133 -6 -23 -16 -41 -22 -41 -6 0 -78 41 -161 92
-117 71 -153 89 -166 81 -9 -5 -31 -38 -48 -72 -70 -134 -25 -258 120 -332 25
-14 68 -24 109 -27 59 -4 75 -1 123 22 139 69 221 264 165 395 -53 121 -226
210 -335 169z m45 -349 l101 -61 -22 -24 c-32 -34 -81 -48 -122 -35 -51 17
-91 64 -90 105 1 30 18 76 28 76 2 0 50 -28 105 -61z"
			/>
			<path
				d="M6303 3549 c-107 -34 -181 -108 -198 -197 -3 -19 -5 -35 -3 -37 2 -2
29 -6 61 -10 51 -7 57 -6 57 11 0 59 84 124 161 124 35 0 47 -6 83 -42 l41
-41 -172 -83 c-95 -45 -173 -86 -173 -89 0 -13 52 -110 76 -141 31 -42 99 -74
155 -74 95 1 208 66 256 147 24 41 28 59 28 124 0 67 -4 83 -38 151 -44 90
-98 142 -171 163 -64 19 -87 18 -163 -6z m241 -315 c10 -52 -18 -104 -73 -131
-29 -15 -53 -20 -70 -16 -31 7 -81 51 -81 70 0 11 185 109 211 112 4 1 10 -15
13 -35z"
			/>
			<path
				d="M4535 3363 c8 -156 18 -208 47 -239 22 -24 18 -29 -32 -38 -90 -16
-144 -87 -144 -192 -1 -71 24 -117 86 -157 34 -22 374 -125 382 -116 11 12
205 714 198 720 -16 15 -125 40 -131 31 -3 -6 -24 -74 -46 -151 l-40 -142 -30
7 c-16 3 -49 14 -73 25 -58 25 -72 61 -72 187 0 156 -1 158 -77 182 -36 11
-67 20 -70 20 -3 0 -2 -62 2 -137z m209 -373 c38 -11 71 -21 73 -24 8 -8 -50
-196 -60 -196 -6 0 -48 11 -94 25 -91 28 -113 48 -113 103 0 35 12 65 38 95
20 23 70 22 156 -3z"
			/>
			<path
				d="M5930 3402 c-36 -8 -66 -15 -67 -16 -1 -1 14 -68 33 -151 19 -82 34
-166 34 -187 0 -77 -50 -128 -125 -128 l-35 0 0 -65 0 -65 44 0 c54 0 104 32
129 83 10 20 22 37 27 37 4 0 10 -18 14 -40 6 -38 8 -40 34 -34 77 17 102 26
102 34 0 9 -118 531 -123 540 -1 3 -31 -1 -67 -8z"
			/>
		</g>
	</svg>
);

export const LinkArrow = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
		/>
	</svg>
);
