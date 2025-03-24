import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./views/components/header";
import Footer from "./views/components/footer";
import HomePage from "./views/homepage";
import Projekti from "./views/projects"; // Make sure this matches your file structure
import ProjectDetails from "./views/etc/projectsDetails"; // New component for individual project page

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projekti" element={<Projekti />} />
                        {/* Route for individual project details */}
                        <Route path="/projekti/:id" element={<ProjectDetails />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

