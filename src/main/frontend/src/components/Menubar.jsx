import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useCurrentUser} from "../context/UserContext.jsx"
import sealUrl from "../assets/seal.jpg"
import {Link} from "react-router";
import hasRole from "../service/user.js";

function Menubar() {
    const { currentUser } = useCurrentUser();

    return (
        <Navbar expand="md" className="mb-4 border-1 border-bottom" bg="white" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: "#bd9319"}}>
                    <img
                        src={sealUrl}
                        width="50"
                        height="50"
                        alt="UH Seal"
                    />
                    UH CAS Demonstration
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Help" id="navbarHelpDropdown">
                            <NavDropdown.Item  as={Link} to="/contact">Contact</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to="/faq">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        { hasRole(currentUser, "ROLE_ADMIN") &&
                            <NavDropdown title="Admin" id="navbarAdminDropdown">
                                <NavDropdown.Item  as={Link} to="/admin/">Administration</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item  as={Link} to="/admin/roles">Application Roles</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/admin/campuses">Campuses</NavDropdown.Item>
                                <NavDropdown.Item  as={Link} to="/admin/holidays">Holidays</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item  as={Link} to="/user">Login Attributes</NavDropdown.Item>
                            </NavDropdown>
                        }
                        {currentUser && <Nav.Link href={`${import.meta.env.VITE_HOME}/logout`}>Logout</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;