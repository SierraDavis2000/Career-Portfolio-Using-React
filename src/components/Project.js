import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	
	const viewProject = useState(props)[0].projects;

	const name = viewProject.name;
	const description = viewProject.description;
	const image = viewProject.image;
	const deployLink = viewProject.deployed;
	const gitRepo = viewProject.github;

	


	return (
		<Card className="card" style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
                //add image 
				src={require(`../assets/images/${image}`)}
				className="card-image"
			/>
			<div className="text-center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={deployLink} target="_blank" className="card-link">
						Link to Deployed App
					</Card.Link>
					<br></br>
					<Card.Link href={gitRepo} target="_blank" className="card-link">
						Link to Project Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;