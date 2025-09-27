import React from "react";
import FilmForm from "../components/FilmForm";
import { Card } from "react-bootstrap";

const AddFilmPage = () => {
    return (
        <Card className="p-4">
            <FilmForm />
        </Card>
    )
};

export default AddFilmPage;