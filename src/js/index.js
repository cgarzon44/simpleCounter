//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function SimpleCounter(props) {
	return (
		<>
			<div className="bigCounter">
				<div className="calendar">
					<i className="far fa-clock"></i>{" "}
				</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		</>
	);
}

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};

// 	//render your react application

let counter = 0;
setInterval(function() {
	const Four = Math.floor(counter / 1000);
	const Three = Math.floor(counter / 100);
	const Two = Math.floor(counter / 10);
	const One = Math.floor(counter / 1);

	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={One}
			digitTwo={Two}
			digitThree={Three}
			digitFour={Four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
