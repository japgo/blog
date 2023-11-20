
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
import About from './pages/About'
import Home from './pages/Home'
import { Article } from './pages/article/Article'


function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary .App">
      <Container fluid>
        <Navbar.Brand>Begon's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/about'>About</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/article'>Article</NavLink></Nav.Link>
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
  );
}

export default function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavScroll/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/article/*' Component={Article} />
        <Route path='/*' element={'Not Found'} />
      </Routes>
    </Router>
  );
}