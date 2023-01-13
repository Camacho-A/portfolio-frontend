import { useLoaderData } from "react-router-dom"

function Projects(props) {
	const projects = useLoaderData()

	return projects.map((project) => (
		<div className="project">
			<div className="name">
				<h1>{project.name}</h1>
			</div>
			<img src={project.image} alt={project.name} />
			<a href={project.git}>
				<button>Github Repo</button>
			</a>
			<a href={project.live}>
				<button>Visit Site</button>
			</a>
		</div>
	))
}

export default Projects
