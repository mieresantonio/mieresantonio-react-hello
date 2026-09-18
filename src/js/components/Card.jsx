import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, text, image }) => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img className="card-img-top" src={image} alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
				</div>
				<div className="card-footer">
					<button className="btn btn-primary" type="button">
						Find Out More!
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default Card;