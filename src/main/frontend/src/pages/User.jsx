import {Card, Container, Table} from "react-bootstrap";
import {useCurrentUser} from "../context/UserContext.jsx";

function User() {
    const { currentUser } = useCurrentUser();
    return (
        <Container>
            <Card className="mx-0 my-0 px-0 py-0" style={{ textAlign: "left" }}>
                <Card.Header as="h4" style={{backgroundColor: "#f5f8ff", color:"#bd9319"}}>Login Details</Card.Header>
                <Card.Body>
                    <Table responsive size={"sm"} borderless hover>
                        <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(currentUser?.attributes.map).sort().map((key, index) =>(
                                <tr key={index}>
                                    <td>{key}</td>
                                    <td>{currentUser?.attributes.map[key].toString()}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default User
