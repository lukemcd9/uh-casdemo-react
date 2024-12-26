import {Col, Container, Spinner} from "react-bootstrap";

export default function Loading() {
    return (
        <Container className="align-content-center mx-auto">
            <Col className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Col>
        </Container>
    );
}