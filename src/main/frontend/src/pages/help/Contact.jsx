import {Card, Container, Table} from "react-bootstrap";
import {Mail, Info} from "lucide-react";

function Contact() {
    return (
        <Container>
            <Card className="mx-0 my-0 px-0 py-0" style={{ textAlign: "left" }}>
                <Card.Header as="h5" className="uh-card-header">Contact</Card.Header>
                <Card.Body>
                    <Table responsive bordered>
                        <tbody>
                            <tr>
                                <td>For General Help/How-To Questions</td>
                                <td><Mail size={18} strokeWidth={3}/> Send email: <a href="mailto:duckart@hawaii.edu">duckart@hawaii.edu</a></td>
                            </tr>
                            <tr>
                                <td>Reporting Technical Issues/Problems</td>
                                <td><Mail size={18} strokeWidth={3}/> Send email: <a href="mailto:duckart@hawaii.edu">duckart@hawaii.edu</a></td>
                            </tr>
                            <tr>
                                <td>Information Technology Services</td>
                                <td><Info size={18} strokeWidth={3}/> See: <a href="https://www.hawaii.edu/its" target="_blank">www.hawaii.edu/its</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Contact;