import React from "react";
import { experiences, studies } from "../data/resume";
import { Link } from "react-router-dom";

function Resume (){
    return (
        <div>
            <h1>Resume: </h1>
            <ul>
                <h2>Experiencies </h2>
                {experiences.map(experiencie => (
                    <li key = {experiencie.id}>
                        <h3>Title: {experiencie.title}</h3>
                        <p>Company: {experiencie.company}</p>
                        <p>Date: {experiencie.date}</p>
                    </li>
            ))}
            </ul>
            <ul>
                <h2> Studies </h2>
                {studies.map(studie =>(
                    <li key={studie.id}>
                        <h3>Title: {studie.title}</h3>
                        <p>Institution: {studie.institution}</p>
                        <p>Date: {studie.date}</p>
                    </li>
                ))}

            </ul>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Resume