import {Card, Container, Table, Form, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

function yearRange(start, stop, step) {
    return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

function Holidays() {
    const sortOptions = ["holiday", "observed", "official"];
    const [holidays, setHolidays] = useState([]);
    const year = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(year);
    const allYears = "(all years)";
    const years = yearRange(2028, 2006, -1).concat([allYears]);

    useEffect(() => {
        fetchHolidays(selectedYear);
    }, []);

    async function fetchHolidays(year) {
        let response;
        if (year === allYears) {
            response = await axios.get(`https://www.hawaii.edu/its/ws/holiday/api/holidays`);
        } else {
            response = await axios.get(`https://www.hawaii.edu/its/ws/holiday/api/holidays/year/${year}`);
        }
        setHolidays(response.data);
        setSelectedYear(year);
    }

    return (
        <Container>
            <Card className="mx-0 my-0 px-0 py-0" style={{ textAlign: "center" }}>
                <Card.Header as="h4" className="uh-card-header">
                    <Row>
                        <Col xs={5} sm={6}>
                            <Form.Select
                                aria-label="Year select"
                                className="float-start"
                                defaultValue={selectedYear}
                                onChange={(event) => fetchHolidays(event.target.value)}>
                                {
                                    years.map((year, index) =>
                                        <option value={year} key={index}>{year}</option>)
                                }
                            </Form.Select>
                        </Col>
                        <Col xs={7} sm={4} className="float-end">
                            <Form.Control type="text" aria-label="Filter" placeholder="Type to filter text"/>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table responsive size={"sm"} borderless hover>
                        <thead>
                        <tr>
                            <th>Holiday</th>
                            <th>Observed</th>
                            <th>Official</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                holidays.map((holiday, index) => (
                                    <tr key={index}>
                                        <td>{holiday.observed}</td>
                                        <td>{holiday.official}</td>
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

export default Holidays;