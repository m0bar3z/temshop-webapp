import React from 'react'
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap'

import mainLogo from '../../assets/images/logo.svg'

export const MainNavbar = () => {
    return (
        <Navbar className="bg-success h5"  expand="lg">
            <Container fluid className="mx-6">
                <Navbar.Brand href="#home" className="text-dark h1">
                    <img src={mainLogo} height="40px" />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home" className="text-dark">
                    فروشگاه تم
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/income" className="ms-5 text-dark">کسب درآمد</Nav.Link>
                    <Nav.Link href="/login" className="text-dark">ورود</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}