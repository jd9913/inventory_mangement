import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>container in app.js</h1>
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
