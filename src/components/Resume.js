import React from "react";

function Resume() {
	return (
		<section>
			<div className="text-center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="text-center bottom-spacing">
				<a href={require("../assets/files/Sierra Davis' Resume.pdf")} download>
					<h5>Click Here to Download my Resume</h5>
				</a>
			</div>
			<div className = 'text-center'>
                <h4> Summary of My Proficiencies: </h4>
				<h5>Front-End</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Back-End</h5>
				<ol>
					<li>RESTFUL APIs</li>
					<li>NodeJS</li>
					<li>ExpressJS</li>
					<li>Model View Controller (MVC)</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Databases</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB/Mongoose</li>
                    <li>GraphQL</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;