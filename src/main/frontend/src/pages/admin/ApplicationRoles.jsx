import {Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as api from "../../service/api.js";

function ApplicationRoles() {

    const [filter, setFilter] = useState("");
    const [applicationRoles, setApplicationRoles] = useState([]);

    async function fetchApplicationRoles() {
        const response = await api.instance.get("/roles");
        setApplicationRoles(response.data);
    }

    const filterApplicationRoles = applicationRoles.filter((holiday) => {
        return Object.values(holiday).some((value) =>
            value.toString().toLowerCase().includes(filter.toLowerCase())
        );
    });

    useEffect(() => {
        fetchApplicationRoles();
    }, []);

    return (
        <Container>
            <Card className="mx-0 mb-3 px-0 py-0">
                <Card.Header className="uh-card-header">
                    <Row>
                        <Col xs={4} sm={2}>
                            <h5 className="pt-1">Application Roles</h5>
                        </Col>
                        <Col xs={6} sm={4} className="float-end offset-sm-6">
                            <Form.Control
                                type="text"
                                aria-label="Filter"
                                placeholder="Type to filter text"
                                value={filter}
                                onChange={(event) => setFilter(event.target.value)}/>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table responsive bordered hover align="left">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filterApplicationRoles.map((role, index) => (
                                <tr key={index}>
                                    <td>{role.description}</td>
                                    <td>{role.id}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ApplicationRoles;