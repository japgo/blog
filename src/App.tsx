
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, NavLink, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { About } from './About'
import { Article } from './Article'


function NavScroll() {
const HOME_URL = process.env.REACT_APP_HOME_URL;
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href={HOME_URL}>Begon's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link href={HOME_URL+"/about"}>About</Nav.Link>
            <Nav.Link href={HOME_URL+"/article"}>Article</Nav.Link>
            <NavLink to={HOME_URL+"/about"}>About</NavLink>
            <NavLink to={HOME_URL+"/article"}>Article</NavLink>
            {/*<NavDropdown title="Article" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/article#spring">Spring</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>*/}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}


export default function App() {

const HOME_URL = process.env.REACT_APP_HOME_URL;
  return (
    <Router>
      <NavScroll/>
      <Routes>
        <Route path={HOME_URL+"/about"} element={<About/>} />
        <Route path={HOME_URL+"/article"} element={<Article/>} />
      </Routes>
    </Router>
  );
}