import { Nav, NavDropdown, Container, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css';
import content from '../content';

export const Navbar_ = () => {

    return (
        <div >
            {/* This is the navigation having first as active might be fine, but not sure I like the hover design and greyed out of link3 */}
            <Navbar className='shadow-lg' expand="lg" style={{ background: content.color.BrandColor, }}>
                <Container>
                    <Navbar.Brand href="/" className='rounded-circle shadow' style={{ background: content.color.LightShade }}> <img
                        src={content.logo}
                        width="70"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" classname="mr-auto ">
                        <Nav className="order-2 mx-5">
                            <NavDropdown title="Account" id="profile-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>



                        <Nav >
                            <Nav.Link href="/recipe">Daily Recipe</Nav.Link>
                            <Nav.Link href="/new_recipe">Create new recipie</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div >
    )


}
