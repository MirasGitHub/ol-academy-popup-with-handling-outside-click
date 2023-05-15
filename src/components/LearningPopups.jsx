import React, { useEffect, useRef, useState } from "react";
import "./LearningPopups.css";
import Popup from "./Popup";

const LearningPopups = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mainContainer">
			{isOpen && <Popup handleClose={() => setIsOpen(!isOpen)} />}

			<button className="btn" onClick={() => setIsOpen(!isOpen)}>
				Open Popup
			</button>
		</div>
	);
};

export { LearningPopups };
