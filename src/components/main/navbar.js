import React from 'react'
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap'

export const MainNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid className="mx-5">
                <Navbar.Brand href="#home">فروشگاه تم</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/income">کسب درآمد</Nav.Link>
                    <Nav.Link href="/login">ورود</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}