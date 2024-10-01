import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import pizza1 from './images/pizza1.jpg';
import pizza2 from './images/pizza2.jpg';
import pizza3 from './images/pizza3.jpg';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';
import menu4 from './images/menu4.jpg';

import { Container, Row, Form, Nav, Navbar, NavDropdown, Carousel,Col, Card, Badge, Modal} from 'react-bootstrap';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <Container>
    <Row>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
    <Row>
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container fluid>
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
             Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="primary" onClick={handleShow}>
            Profile <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
           </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>

    <Row>
    <Carousel>
      <Carousel.Item>
      <img src={pizza1} text="First slide" />
        <Carousel.Caption>
          <h3>Neapolitan Pizza</h3>
          <p>If you're looking for traditional Italian pizza, the Neapolitan is the best option!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza3} text="Second slide" />
        <Carousel.Caption>
          <h3>Cheese Pizza</h3>
          <p>Cheese lovers, this is for you!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza2} text="Third slide" />
        <Carousel.Caption>
          <h3>Pepperoni Pizza</h3>
          <p>
          For those who love a bit of spice!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Row>

    <Row className='mt-5'>
      <Col> 
      <Card >
      <Card.Img variant="top" src={menu1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      <Col> 
      <Card >
      <Card.Img variant="top" src={menu2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      <Col> 
      <Card >
      <Card.Img variant="top" src={menu3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col> 
      <Card >
      <Card.Img variant="top" src={menu4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere
          
          </Button>  
      </Card.Body>
    </Card>
    </Col>
    </Row>
    
   </Container>
  );
}

export default App;
