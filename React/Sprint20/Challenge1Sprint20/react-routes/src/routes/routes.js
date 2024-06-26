import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/home';
import Projects from '../components/projects';
import Resume from '../components/resume';

const AppRouter = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
        </Router>
    );
};

export default AppRouter;
