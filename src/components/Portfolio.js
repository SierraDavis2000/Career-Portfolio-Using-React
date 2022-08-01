import React from 'react';
import Project from './Project';

function Portfolio() {
	const projects = [
		{
			name: 'Home Garden Manager',
			description:
				'A site that allows plant enthusiasts to easily find care instructions for plants they own, as well as contribute to the plant database, and create logs to track their plant watering activity.',
			image: 'garden-image.png',
			github: 'https://github.com/SierraDavis2000/Home-Garden-Manager',
			deployed: 'https://warm-harbor-34559.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast.',
			image: 'weather-image.png',
			github: 'https://github.com/SierraDavis2000/Weather-Dashboard',
			deployed: 'https://sierradavis2000.github.io/Weather-Dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password based on user criteria.',
			image: 'password-image.png',
			github: 'https://github.com/SierraDavis2000/Password-Generator',
			deployed: 'https://sierradavis2000.github.io/Password-Generator/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter and save notes.',
			image: 'notetaker-image.png',
			github: 'https://github.com/SierraDavis2000/Note-Taker-Application-Featuring-Express.js',
			deployed: 'https://whispering-woodland-26598.herokuapp.com/',
		},
		{
			name: 'Networking Sustainability',
			description: 'A networking and event posting website with a focus on ecological gardening and sustainability in the Ottawa Region.',
			image: 'eventapp-image.png',
			github: 'https://github.com/jennasaikaly/sustainability-event-app',
			deployed: 'http://networking-sustainability-app.herokuapp.com/',
		}
	];

	return (
		<section >
			<div className="center">
				<h1 className="page-header">Sierra's Project Portfolio: </h1>
			</div>
			<br></br>
			<br></br>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
				
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
