import {Card, Container} from "react-bootstrap";
import {Link} from "react-router";

function Admin() {
    return (
        <Container>
            <Card className="mx-0 mb-3 px-0 py-0">
                <Card.Header as="h5" className="uh-card-header">Administration</Card.Header>
                <Card.Body className="text-left">
                    <Link to="/admin/roles">Application Roles</Link>
                    <br/>
                    <Link to="/admin/campuses">Campuses</Link>
                    <br/>
                    <Link to="/admin/holidays">Holidays</Link>
                    <br/>
                    <br/>
                    <Link to="/user">Login Attributes</Link>
                    <br/>
                    <br/>
                    <Link to="/">Font Experiments</Link>
                    <br/>
                    <Link to="/">Feedback Experiments</Link>
                    <br/>
                    <br/>
                    <Link to="/">Throw IOException</Link>
                    <br/>
                    <Link to="/">Throw FileNotFoundException</Link>
                    <br/>
                    <Link to="/">Throw RuntimeException</Link>
                    <br/>
                    <Link to="/">Throw Exception</Link>
                    <br/>
                    <Link to="/">Throw Error via Javascript</Link>
                    <br/>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Admin;