import {Card, Container, Table, Form, Row, Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import holidaysData from "../../assets/holidays.json";
import {MoveDown, MoveUp} from "lucide-react";

function yearRange(start, stop, step) {
    return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}

function Holidays() {
    const headers = [
        { column: "description", description: "Holidays" },
        { column: "observedDate", description: "Observed" },
        { column: "officialDate", description: "Official" },
    ];
    const [holidays, setHolidays] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [sortHeader, setSortHeader] = useState({column: "observedDate", ascending: false});
    const [filter, setFilter] = useState("");
    const allYears = "(all years)";
    const years = yearRange(2028, 2006, -1).concat([allYears]);

    useEffect(() => {
        fetchHolidays(selectedYear);
    }, [selectedYear]);

    useEffect(() => {
        if (holidays.length > 0) {
            const holidaysCopy = [...holidays];

            const sortedHolidays = holidaysCopy.sort((a, b) => {
                if (sortHeader.column === "description") {
                    return a.description.localeCompare(b.description);
                }
                return new Date(a[sortHeader.column]) - new Date(b[sortHeader.column]);
            });

            setHolidays(sortHeader.ascending ? sortedHolidays : sortedHolidays.reverse());
        }
    }, [sortHeader]);

    async function fetchHolidays(year) {
        let response = holidaysData;
        // if (year === allYears) {
        //     response = await axios.get(`https://www.hawaii.edu/its/ws/holiday/api/holidays`);
        // } else {
        //     response = await axios.get(`https://www.hawaii.edu/its/ws/holiday/api/holidays/year/${year}`);
        // }
        // setHolidays(response.data);
        let filteredHolidays;
        if (year !== allYears) {
            filteredHolidays = response.data.filter(holiday => holiday.officialYear === Number(year));
        } else {
            filteredHolidays = response.data;
        }
        const temp = filteredHolidays.map(h => Math.abs(new Date() - new Date(h.observedDate).getTime()));
        const idx = temp.indexOf(Math.min(...temp));
        filteredHolidays[idx].closest = true;
        setHolidays(filteredHolidays);
        setSelectedYear(year);
    }

    return (
        <Container>
            <Card className="mx-0 mb-3 px-0 py-0">
                <Card.Header className="uh-card-header">
                    <Row>
                        <Col xs={4} sm={2}>
                            <Form.Select
                                aria-label="Year select"
                                className="float-start"
                                defaultValue={selectedYear}
                                onChange={(event) => setSelectedYear(event.target.value)}>
                                {years.map((year, index) =>
                                        <option value={year} key={index}>{year}</option>)
                                }
                            </Form.Select>
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
                    <Table responsive size={"sm"} bordered hover align="left">
                        <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th id={header.column} key={index}
                                    className="clickable"
                                    onClick={(event) =>
                                        setSortHeader({ column: event.currentTarget.id, ascending: !sortHeader.ascending })}>
                                    {header.description}
                                    <Sorter column={header.column} sortHeader={sortHeader}/>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                            {
                                holidays.filter((holiday) =>
                                    Object.values(holiday)
                                        .some((value) => value.toString().toLowerCase().includes(filter.toLowerCase())))
                                    .map((holiday, index) => (
                                        <tr key={index}>
                                            <td>{holiday.description}</td>
                                            <td>{holiday.observedDateFull}</td>
                                            <td>{holiday.officialDateFull}</td>
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

function Sorter({ column, sortHeader, setSortHeader }) {
    if (column !== sortHeader.column) return null;
    return sortHeader.ascending ?
        <MoveUp size={16} strokeWidth={2.75}/>
        : <MoveDown size={16} strokeWidth={2.75}/>;
}

export default Holidays;