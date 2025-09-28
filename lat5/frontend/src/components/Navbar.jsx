import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
            <Container>
                <Navbar.Brand>
                    Aplikasi CRUD Film
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>
                            Daftar Film
                        </Nav.Link>
                        <Nav.Link as={Link} to='/add'>
                            Tambah Film
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;