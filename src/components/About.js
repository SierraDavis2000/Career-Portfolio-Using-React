import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="left">
				<img
                    //add photo
					src={require('../assets/images/Image - SierraDavis.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<br></br>
			<div>
				<p>
					I am a full stack developer and environmental scientist. I have completed both my Coding Bootcamp 
                    and my BSc Hons. at Carleton University in Ottawa, Ontario, Canada. I am using both my passion for 
                    environmental conservation and open source data sharing to create applications that will hopefully
                    help to bridge the knowledge gap between the academic community and the general public. 
				</p>
		
			</div>
		</section>
	);
}

export default About;