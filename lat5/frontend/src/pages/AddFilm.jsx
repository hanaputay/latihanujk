import React from "react";
import { Card } from "react-bootstrap";
import FilmForm from "../components/FilmForm";

const AddFilmPage = () => {
    return (
        <Card className="p-4">
            <FilmForm />
        </Card>
    )
};

export default AddFilmPage;