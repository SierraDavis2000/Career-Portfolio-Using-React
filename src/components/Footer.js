import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/SierraDavis2000"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/images/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/sierra-davis-243977172/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/images/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;