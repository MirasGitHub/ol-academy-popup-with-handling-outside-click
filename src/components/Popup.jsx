import React, { useEffect, useRef } from "react";

const Popup = ({ handleClose }) => {
	const popupRefWrapper = useRef(null);

	const popupRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			if (popupRef.current && popupRefWrapper.current) {
				if (
					popupRefWrapper.current.contains(e.target) &&
					!popupRef.current.contains(e.target)
				) {
					handleClose();
				}
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
	return (
		<div className="popup-wrapper" ref={popupRefWrapper}>
			<div className="popup" ref={popupRef}>
				<h2>PopUp</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.{" "}
				</p>
				<button className="btn" onClick={handleClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Popup;
