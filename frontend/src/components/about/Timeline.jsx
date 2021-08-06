import React from "react";
import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";

const Timeline = () => {
	return (
		<div className="timeline-content-container">
			<h1>International Conference on Application Frameworks 2021</h1>

			<motion.div
				className="timeline"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 1 }}
			>
				<ul>
					<TimelineItem />
					<TimelineItem />
					<TimelineItem />
					<TimelineItem />
					<TimelineItem />
				</ul>
			</motion.div>
		</div>
	);
};

export default Timeline;
