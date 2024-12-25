import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import {useCurrentUser} from "../context/UserContext.jsx";
import {useEffect, useState} from "react";
import {instance} from "../service/api.js";

function Home() {
    const { currentUser } = useCurrentUser();
    const [message, setMessage] = useState();

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await instance.get("/message/1");
            setMessage(response.data);
        }

        fetchMessage();
    }, []);


    return (
        <Container className="h-auto">
            <Row>
                <Col xs={12}>
                    <div className="pb-4 py-5 px-4 rounded-3 text-center my-3"
                         style={{backgroundColor: "#f5f8ff", border: "1px solid #e5e5e5"}}>
                        <h1 className="display-4 dropshadow">
                            Identity <span className="amp">&amp;</span> Access Management <br/>
                            CAS Demonstration
                        </h1>
                        {/*Dangerously setting html is okay here since this is coming directly from our database rather than user input*/}
                        <p className="lead" dangerouslySetInnerHTML={{ __html: message?.text }}/>
                        { currentUser ?
                            <Button size="lg" variant="outline-primary" href={`${import.meta.env.VITE_HOME}/logout`}>Logout</Button>
                            : <Button size="lg" variant="success" href={`${import.meta.env.VITE_HOME}/login`}>UH Login Here</Button>
                        }
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <CardGroup>
                    <Card className="bg-transparent border-0 py-1">
                        <Card.Header className="bg-transparent border-0 lead">Contact Information</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Here are the university website and email addresses to contact us with questions or comments.
                                Please do not hesitate to contact us with any questions you might have about the application.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-transparent border-0">
                            <Button variant="outline-primary">View</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="bg-transparent border-0 py-1">
                        <Card.Header className="bg-transparent border-0 lead">Frequently Asked Questions</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                We have assembled responses to a number of common questions you might have about the process,
                                including where you can find the source code for this application.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-transparent border-0">
                            <Button variant="outline-primary">View</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    );
}

export default Home;