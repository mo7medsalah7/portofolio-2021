import WrapperSection from "../WrapperSection";
import Card from "./Card";
import ParadisoScreen from "../../public/paradiso.png";
import NetflixCloneScreen from "../../public/netflix-clone.png";
console.log(ParadisoScreen);

const worksDetails = [
	{
		projectName: "Paradiso",
		projectLink: "https://paradiso-gate.herokuapp.com/",
		projectDesc: "app for movies exploring.",
		projectScreen: `${ParadisoScreen}`,
	},
	{
		projectName: "Netflix Clone",
		projectLink: "https://netflix-clone-phi-ruby.vercel.app/",
		projectDesc: "A clone for the netflix main header.",
		projectScreen: `${NetflixCloneScreen}`,
	},
	{
		projectName: "Quiz App",
		projectLink: "https://quizzy-eazy-app.herokuapp.com/",
		projectDesc: "A React quiz app.",
		projectScreen: `${NetflixCloneScreen}`,
	},
	{
		projectName: "Paradiso",
		projectLink: "https://paradiso-gate.herokuapp.com/",
		projectDesc: "app for movies exploring.",
		projectScreen: `${ParadisoScreen}`,
	},
	{
		projectName: "Netflix Clone",
		projectLink: "https://netflix-clone-phi-ruby.vercel.app/",
		projectDesc: "A clone for the netflix main header.",
		projectScreen: `${NetflixCloneScreen}`,
	},
	{
		projectName: "Quiz App",
		projectLink: "https://quizzy-eazy-app.herokuapp.com/",
		projectDesc: "A React quiz app.",
		projectScreen: `${NetflixCloneScreen}`,
	},
];

function Works() {
	return (
		<WrapperSection>
			<div className="m-auto">
				<div className=" sectionTitle border-blue-500 border-r-8  m-auto">
					<h2 className="text-base sm:text-lg md:text-3xl lg:text-5xl">
						Works
					</h2>
				</div>
			</div>

			<div className="text-left ">
				<header>
					<div className="flex items-center space-x-4 font-bold my-10">
						{" "}
						<svg
							viewBox="0.5 -0.2 1023 1024.1"
							xmlns="http://www.w3.org/2000/svg"
							className="w-16 h-16"
						>
							<path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
							<path d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
						</svg>{" "}
						<span>Nextjs & React</span>
					</div>
				</header>
				<div className="container mx-auto shadow-md shadow-grey-400">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{worksDetails.map((project) => {
							return (
								<>
									<Card project={project} />{" "}
								</>
							);
						})}
					</div>
				</div>
			</div>
		</WrapperSection>
	);
}

export default Works;
