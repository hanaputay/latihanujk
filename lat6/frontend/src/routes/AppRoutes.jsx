import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddFilmPage from "../pages/AddFilmPage";
import EditFilmPage from "../pages/EditFilmPage";
import { Container  } from "react-bootstrap";

const AppRoutes = () => {
    return (
        <Container className="mt-4">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddFilmPage />} />
                <Route path="/edit/:id" element={<EditFilmPage />} />
            </Routes>
        </Container>
    );
};

export default AppRoutes;