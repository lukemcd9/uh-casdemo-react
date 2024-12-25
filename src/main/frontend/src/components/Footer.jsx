import {Container, Navbar} from "react-bootstrap";

function Footer() {
    return (
        <Navbar className="footer" bg="white" data-bs-theme="light">
            <Container fluid className="text-center justify-content-center">
                <span className="text-muted">
                    <span className="uh-branding-one">University</span>
                    <span className="uh-branding-two">of&nbsp;</span>
                    <span className="uh-branding-one">Hawai&#699;i</span>
                </span>
            </Container>
        </Navbar>
    );
}

export default Footer