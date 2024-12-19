import {Card, Container, Table} from "react-bootstrap";

function Faq() {
    return (
        <Container>
            <Card className="mx-0 my-0 px-0 py-0" style={{ textAlign: "left" }}>
                <Card.Header as="h4" style={{ color:"#bd9319" }}>Faq</Card.Header>
                <Card.Body>
                    <Table responsive size={"sm"} borderless>
                        <tbody>
                            <tr>
                                <td>For General Help/How-To Questions</td>
                                <td>Send email: duckart@hawaii.edu</td>
                            </tr>
                            <tr>
                                <td>Reporting Technical Issues/Problems</td>
                                <td>Send email: duckart@hawaii.edu</td>
                            </tr>
                            <tr>
                                <td>Information Technology Services</td>
                                <td>See: www.hawaii.edu/its</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Faq;