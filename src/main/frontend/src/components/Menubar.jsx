import {Container, Nav, Navbar} from "react-bootstrap";
import {useCurrentUser} from "../context/UserContext.jsx"
import {backendUrl} from "../api.js";

function Menubar() {
    const { currentUser } = useCurrentUser();

    return (
        <Navbar className="mb-4 border-1 border-bottom" bg="white" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#" style={{ color: "#bd9319"}}>
                    <img
                        src={`${import.meta.env.BASE_URL}/seal.jpg`}
                        width="50"
                        height="50"
                        alt="UH Seal"
                    />
                    UH CAS Demonstration
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#help">Help</Nav.Link>
                        {currentUser && <Nav.Link href={backendUrl("logout")}>Logout ({currentUser.username})</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;