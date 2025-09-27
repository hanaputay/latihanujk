import React from "react";
import FilmForm from "../components/FilmForm";
import { Card } from "react-bootstrap";

const EditFilmPage = () => {
    return (
        <Card className="p-4">
            <FilmForm />
        </Card>
    )
};

export default EditFilmPage;