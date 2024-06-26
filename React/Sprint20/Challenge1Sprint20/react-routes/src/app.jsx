import React from "react";
import Home from "./components/home.jsx";
import Projects from "./components/projects.jsx";
import Resume from "./components/resume.jsx";
import{ Routes, Route} from 'react-router-dom';

function App(){
    return(
        
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
    )
};

export default App;