import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand className="nav-logo" as={Link} to="/home">TourX</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-link" as={Link}  to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/manage">Add Pakage</Nav.Link>
                        <Nav.Link as={Link} to="/booking">My Booking</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        
                        {!user.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user.email &&<button onClick={logOut}  className="log-out-btn">Log out</button>}

                        <Navbar.Text>
                            <a href="#login">{user.displayName}</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
        </Navbar>  
        </div>
    );
};

export default Header;