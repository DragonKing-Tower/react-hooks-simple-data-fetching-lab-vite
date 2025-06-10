// create your App component here
import React, { useState, useEffect } from "react";

function App() {
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(true);

	async function handleClick() {
		setLoading(true);
		try {
			console.log("getting dog");
			const data = await fetch("https://dog.ceo/api/breeds/image/random");
			const dog = await data.json();
			setImage(dog.message);
		} catch (error) {
			console.log(`Error: ${error}`);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		handleClick();
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<img src={image} alt="random dog"></img>
			)}
			<button onClick={handleClick}>New Dog</button>
		</div>
	);
}

export default App;
