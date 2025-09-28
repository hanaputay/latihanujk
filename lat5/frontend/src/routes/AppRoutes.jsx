import React from "react";
import AddFilmPage from "../pages/AddFilm";
import EditFilmPage from "../pages/EditFilm";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

const AppRoutes = () => {
    return (
        <Container className="my-4">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/add" element={<EditFilmPage />}/>
                <Route path="/edit/:id" element={<EditFilmPage />}/>
            </Routes>
        </Container>
    )
}

export default AppRoutes