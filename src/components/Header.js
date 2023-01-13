import { Link } from "react-router-dom"

function Header(props) {
	//inline style for the nav tag

	return (
		<header>
			<h1>My Portfolio Page</h1>
			<nav className="nav">
				<Link to="/">
					<div>HOME</div>
				</Link>
				<Link to="/about">
					<div>ABOUT</div>
				</Link>
				<Link to="/projects">
					<div>PROJECTS</div>
				</Link>
			</nav>
		</header>
	)
}

export default Header
