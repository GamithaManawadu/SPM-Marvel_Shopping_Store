import React, { useState, useRef, useEffect } from "react";

const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");
	const [isShow, setIsShow] = useState(true);

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date("July 04, 2021 00:00:00").getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance <= 0) {
				clearInterval(interval.current);
				setIsShow(false);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

	return (
		<>
			{isShow && (
				<section className="countdown-content">
					<h1>Save The Date : 04 July 2021</h1>
					<div className="countdown">
						<div className="days">
							<h1>{timerDays}</h1>
							<p>Days</p>
						</div>
						<div className="hours">
							<h1>{timerHours}</h1>
							<p>Hours</p>
						</div>
						<div className="minutes">
							<h1>{timerMinutes}</h1>
							<p>Minutes</p>
						</div>
						<div className="seconds">
							<h1>{timerSeconds}</h1>
							<p>Seconds</p>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Countdown;
