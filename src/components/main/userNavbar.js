import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { customerActions, sellerActions } from '../../actions'

export const UserNavbar = () => {
    
    let dispatch = useDispatch()

    let authUser = useSelector(state => state.authentication)
    
    const logoutHandler = () => {
        console.log('logout time')
        authUser && authUser.loggedIn 
            && authUser.user.position === 1 && dispatch(customerActions.logout()) 
    }    

    return (
        <>
            <Navbar className="bg-success h5"  expand="lg">
                <Container fluid className="mx-6 my-3">
                    
                    <Nav>
                        <Nav.Link href="#home" className="text-dark">
                            خوش آمدید!
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="" className="ms-5 text-dark">داشبورد</Nav.Link>
                        <NavDropdown title="username">
                            <NavDropdown.Item href="#action3">تنظیمات</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  onClick={logoutHandler}>
                                خروج
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}