import { useEffect, useRef, useState } from "react";

export function App() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [intro, setIntro] = useState(true);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex(
				(index + 1) % document.querySelectorAll(".carousel-item").length,
			);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [index]);

	return (
		<>
			<div className={"intro-screen " + (intro ? "" : "hidden")}>
				<h2>Would you like an introduction?</h2>
				<button
					onClick={() => {
						audioRef.current?.play();
						setIntro(false);
					}}
				>
					Yes
				</button>
				<button
					onClick={() => {
						alert("Ok boomer. you got no swag");
						setIntro(false);
					}}
				>
					No
				</button>
			</div>
			<audio
				ref={audioRef}
				src="https://cdn.hackclubber.dev/slackcdn/0bd73f51047fd53aedcb3e3f73d49e08.mp3"
				loop
			></audio>

			<h1>Welcome to Cat Jam !! :3</h1>
			<p>
				We are a team of 6 people on{" "}
				<a href="https://hackclub.com/slack/" target="_blank" rel="noreferrer">
					Hack Club Slack
				</a>{" "}
				trying to get socks for{" "}
				<a
					href="https://hackclub.slack.com/archives/C08DPRYMWF8"
					target="_blank"
					rel="noreferrer"
				>
					#sock
				</a>
				!! Join us for the fun!
				<br>
				What are we making? Probably a search engine, a piano simulator, or an online code editor.
			</p>

			<div className="carousel">
				<div
					className="carousel-inner"
					style={{ transform: `translateX(-${index * 100}%)` }}
				>
					<div className="carousel-item">
						<img
							src="https://ca.slack-edge.com/T0266FRGM-U07AZFQLPQ8-fc1c1ed8ba36-512"
							alt="KittyCat"
						/>
						<p>KittyCat - The cat of our team</p>
					</div>
					<div className="carousel-item">
						<img
							src="https://ca.slack-edge.com/T0266FRGM-U0266FRGP-0e1376df084b-512"
							alt="zrl"
						/>
						<p>zrl - The one who makes things happen</p>
					</div>
					<div className="carousel-item">
						<img
							src="https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-eb76cc600228-512"
							alt="phthallo"
						/>
						<p>phthallo - The member of our team</p>
					</div>
					<div className="carousel-item">
						<img
							src="https://ca.slack-edge.com/T0266FRGM-U082RFNDVKQ-g74b68349225-512"
							alt="DJ_Laser"
						/>
						<p>DJ_Laser - The ??</p>
					</div>
					<div className="carousel-item">
						<img
							src="https://ca.slack-edge.com/T0266FRGM-U0829HRSQ76-e6aff3d33468-512"
							alt="PianoMan0"
						/>
						<p>PianoMan0 - The guy who- shhh.....</p>
					</div>
					<div className="carousel-item">
						<img
							src="https://ca.slack-edge.com/T0266FRGM-U07FEFY2DNC-d223a7106aa4-512"
							alt="crabby605"
						/>
						<p>crabby605 - The ultimate guy who made this website :p</p>
					</div>
				</div>
			</div>
		</>
	);
}
