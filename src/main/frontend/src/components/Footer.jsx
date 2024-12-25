import {Container, Navbar} from "react-bootstrap";

function Footer() {
    return (
        <Navbar className="footer" bg="white" data-bs-theme="light">
            <Container fluid className="text-center justify-content-center">
                <span className="text-muted" style={{ fontSize: "1.6em" }}>University of Hawai&#699;i</span>
            </Container>
        </Navbar>
    );
}

export default Footer