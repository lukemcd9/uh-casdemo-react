import { useEffect, useState } from 'react';
import './App.css'
import {Card, Container, Table} from "react-bootstrap";
import Link from "./Link.jsx";
import {instance} from "./api.js"

function App() {
    const url = "/user";
    const [user, setUser] = useState(null);
    useEffect(() => {
        instance.get(url).then(response => setUser(response.data));
    }, [url]);
  return (
    <Container>
        {user ? (
                <>
                    <Link backend href="/logout">Logout</Link>
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
                                {Object.keys(user.attributes.map).sort().map((key, index) =>(
                                    <tr key={index}>
                                        <td>{key}</td>
                                        <td>{user.attributes.map[key].toString()}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </>
            ) :
                <>
                    <Link backend href="/login">Login</Link>
                    <h3>You are not logged in</h3>
                </>
        }
    </Container>
  )
}

export default App
