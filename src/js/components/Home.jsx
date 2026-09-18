import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const cardsData = [
	{
		id: 1,
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		image: "https://placehold.co/500x325",
	},
	{
		id: 2,
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
		image: "https://placehold.co/500x325",
	},
	{
		id: 3,
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		image: "https://placehold.co/500x325",
	},
	{
		id: 4,
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
		image: "https://placehold.co/500x325",
	},
];

const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="row">
				{cardsData.map((card) => (
					<Card key={card.id} title={card.title} text={card.text} image={card.image} />
				))}
			</div>
			<p className="text-center">
				Hecho por{" "}
				<a href="https://github.com/mieresantonio">Antonio Mieres</a>, con amor!
			</p>
			<footer className="text-center text-light bg-dark py-3 mt-4">
				<p className="mb-0">Copyright &copy; Your Website 2026</p>
			</footer>
		</div>
	);
};

export default Home;