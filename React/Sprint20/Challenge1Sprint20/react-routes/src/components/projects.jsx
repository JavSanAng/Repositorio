import React from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Projects (){
    return (
        <div>
            <h1>Projects: </h1>
            <ul>
            {projects.map(project => (
                <li key = {project.id}>
                    <h3>Name: {project.name}</h3>
                    <p>Description: {project.description}</p>
                    <img src={project.image} alt={project.name} />
                    <p><a href={project.url} target="_blank">Link to project</a></p>
                </li>
            ))}
            </ul>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Projects