import {Card, Container, Table} from "react-bootstrap";

function Faq() {
    return (
        <Container>
            <Card className="mx-0 my-0 px-0 py-0" style={{ textAlign: "left" }}>
                <Card.Header as="h5" className="uh-card-header">FAQ</Card.Header>
                <Card.Body>
                    <Table responsive bordered>
                        <tbody>
                            <tr>
                                <td colSpan="2" align="left" valign="top"><b>General Questions</b></td>
                            </tr>
                            <tr>
                                <td align="left" valign="top">Q: Who can answer some basic questions about the
                                    application?
                                </td>
                                <td align="left" valign="top">A: Send an email to <a
                                    href="mailto:its-iam-help@lists.hawaii.edu">ITS Identity &amp; Access Management
                                    Group</a></td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="left" valign="top"><b>Resources</b></td>
                            </tr>
                            <tr>
                                <td align="left" valign="top">Q: Can I get the source code for this project?</td>
                                <td align="left" valign="top">A: Sure thing. It is available at this <a
                                    href="https://github.com/lukemcd9/uh-casdemo-react" target="_git_repo">github repository.</a>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="left" valign="top"><b>Technologies</b></td>
                            </tr>
                            <tr>
                                <td align="left" valign="top">Q: What did you use to create the site?</td>
                                <td align="left" valign="top">
                                    <ul className="list-unstyled">
                                        <li>Apache Maven</li>
                                        <li>Apache Tomcat</li>
                                        <li>Java</li>
                                        <li>Node.js</li>
                                        <li>
                                            Spring Boot
                                            <a href="https://docs.spring.io/spring-boot/"
                                               target="_spbt">(Guide)</a>
                                        </li>
                                        <li>
                                            Spring Framework
                                            <a href="https://docs.spring.io/spring-framework/reference/6.1/index.html"
                                               target="_sprgu">(Guide)</a>
                                            <a href="http://docs.spring.io/spring/docs/6.1.12/javadoc-api/"
                                               target="_sprapi">(API)</a>
                                        </li>
                                        <li>
                                            Spring Security
                                        </li>
                                        <li>
                                            Spring Data JPA
                                            <a href="https://docs.spring.io/spring-data/jpa/reference/jpa.html"
                                               target="_sprdatgu">(Guide)</a>
                                            <a href="https://docs.spring.io/spring-data/jpa/docs/3.4.1/api/index.html"
                                               target="_sprdatapi">(API)</a>
                                        </li>
                                        <li>
                                            Spring Data Commons
                                            <a href="https://docs.spring.io/spring-data/jpa/reference/data-commons/index.html"
                                               target="_sprdatcogu">(Guide)</a>
                                            <a href="https://docs.spring.io/spring-data/jpa/reference/data-commons/api/java/index.html"
                                               target="_sprdatapi">(API)</a>
                                        </li>
                                        <li>
                                            Bootstrap
                                            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                                               target="_bootstrap">(Guide)</a>
                                        </li>
                                        <li>
                                            Vite
                                            <a href="https://vite.dev/guide/"
                                               target="_vite">(Guide)</a>
                                        </li>
                                        <li>
                                            React JS
                                            <a href="https://react.dev/learn"
                                               target="_react">(Guide)</a>
                                            <a href="https://react.dev/reference/react" target="_reactapi">(API)</a>
                                        </li>
                                        <li>
                                            React Router
                                            <a href="https://reactrouter.com/home"
                                               target="_reactrouter">(Guide)</a>
                                            <a href="https://api.reactrouter.com/v7/" target="_reactrouterapi">(API)</a>
                                        </li>
                                        <li>
                                            React Bootstrap
                                            <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction"
                                               target="_reactboot">(Guide)</a>
                                            <a href="https://react-bootstrap.netlify.app/docs/components/accordion"
                                               target="_reactbootapi">(API)</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Faq;