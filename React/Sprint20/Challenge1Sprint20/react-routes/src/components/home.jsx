import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Welcome to my portfolio!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum tempore saepe asperiores laborum quas ratione, nihil officiis expedita voluptate dolor voluptatibus dolores modi voluptatum cumque, voluptates fugit? Consequuntur, id deleniti.</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Home
