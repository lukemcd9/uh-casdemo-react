import {Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as api from "../../service/api.js";

function Campuses() {

    const [filter, setFilter] = useState("");
    const [campuses, setCampuses] = useState([]);

    async function fetchCampuses() {
        const response = await api.instance.get("/campuses");
        setCampuses(response.data);
    }

    const filterCampuses = campuses.filter((holiday) => {
        return Object.values(holiday).some((value) =>
            value.toString().toLowerCase().includes(filter.toLowerCase())
        );
    });

    useEffect(() => {
        fetchCampuses();
    }, []);

    return (
        <Container>
            <Card className="mx-0 mb-3 px-0 py-0">
                <Card.Header className="uh-card-header">
                    <Row>
                        <Col xs={4} sm={2}>
                            <h5 className="pt-1">Campuses</h5>
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
                    <Table responsive size={"sm"} bordered hover align="left" className="">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>ID</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                filterCampuses.map((campus, index) => (
                                    <tr key={index}>
                                        <td>{campus.description}</td>
                                        <td>{campus.code}</td>
                                        <td>{campus.id}</td>
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

export default Campuses;