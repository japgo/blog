
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

interface header_props {
  title: string;
  onChangeMode(): any;
}

interface article_props {
  title: string;
  body: string;
}

interface topic {
  id: number;
  title: string;
  body: string;
}

interface nav_props {
  topics: topic[];
  onChangeMode( id: number ): any;
}

interface create_props {
  onCreate( title:string, body:string ): any;
}

interface update_props {
  title: string;
  body: string;
  onUpdate( title:string, body:string ): any;
}




function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Begon's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            {/*<NavLink to="/about">About</NavLink>
            <NavLink to="/article">Article</NavLink>*/}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/article">Article</Nav.Link>
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
            <Nav.Link href="/link">
              Link
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Header( props: header_props ) {
  return (
      <header>
        <h1>
          <a href="/" onClick={ (event) => {
            event.preventDefault();
            props.onChangeMode();
          }}>
            {props.title}
          </a>
        </h1>
      </header>
  )
}

function _Nav_( props: nav_props) {

  const lis = [];
  for( let i = 0; i < props.topics.length; i++ ) {
    let t = props.topics[ i ];
    lis.push( 
      <li key={t.id}>
        <a href={'/read/' + t.id} onClick={ event => {
          event.preventDefault();
          props.onChangeMode( t.id );
        }}>
          {t.title}
        </a>
      </li> 
    );
  }

  return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
  )
}

function Article( props:article_props ) {
  return (
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  )
}

function Create( props: create_props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const target = event.target as typeof event.target & {
          title: { value: string };
          body: { value: string };
        }

        const title = target.title;
        const body = target.body;

        props.onCreate( title.value, body.value );
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

function Update( props: update_props ) {
  const [ title, setTitle ] = useState( props.title );
  const [ body, setBody ] = useState( props.body );

  return (
    <article>
      <h2>
        Update
      </h2>
      <form onSubmit = { event => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
          title: { value: string };
          body: { value: string };
        }

        const title = target.title;
        const body = target.body;

        props.onUpdate( title.value, body.value );
      }}>
        <p><input type="text" name="title" placeholder="title" value = { title } onChange= { event => {
          setTitle( event.target.value );
        } }/></p>
        <p><textarea name="body" placeholder="body" value = { body } onChange = { event => {
          setBody( event.target.value );
        } }/></p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>
  );
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function TopNavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
          <Nav.Link href="/blog">Home</Nav.Link>
          <Nav.Link href="/blog/topics">Topics</Nav.Link>
          <Nav.Link href="/blog/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>



      <Routes>
        <Route path="/blog" element={<Home/>} />
        <Route path="/blog/topics/*" element={<Topics />} />
        <Route path="/blog/contact" element={<Contact />} />
        <Route path="/blog/*" element={ 'Not Found' } />
      </Routes>
    </div>
  )
}


export default function App() {

  const [ mode, setMode ] = useState( 'WELCOME' );
  const [ id, setId ] = useState( 0 );
  const [ nextId, setNextId ] = useState( 4 );
  const [ topics, setTopics ] = useState( [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ] );

  let content = null;
  let contextControl = null;
  if( mode === 'WELCOME' ) {
    content = <Article title="Welcome" body="Hello, World!"></Article>
  }
  else if( mode === 'READ' ) {
    let title = "", body = "";
    for( let i = 0; i < topics.length; i++ ) {
      if( topics[ i ].id === id ) {
        title = topics[ i ].title;
        body = topics[ i ].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li><a href={"/update/" + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type = "button" value = "Delete" onClick = { () => {
        const newTopics = [];
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics( newTopics );
        setMode( 'WELCOME' );
      }} /></li>
    </>

  }
  else if( mode === 'CREATE' ) {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id:nextId, title: _title, body: _body };
      const newTopics = [ ...topics ];
      newTopics.push( newTopic );
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  }
  else if( mode === 'UPDATE' ) {
    let title = "", body = "";
    for( let i = 0; i < topics.length; i++ ) {
      if( topics[ i ].id === id ) {
        title = topics[ i ].title;
        body = topics[ i ].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={ ( title, body ) => {
      const newTopics = [ ...topics ];
      const updatedTopic = { id: id, title: title, body: body };
      for( let i = 0; i < newTopics.length; i++ ) {
        if( newTopics[ i ].id === id ) {
          newTopics[ i ]=updatedTopic;
          break;
        }
      }
      setTopics( newTopics );
      setMode( 'READ' );
    }}></Update>
  }

  return (
    <div>
      <NavScrollExample />
      <TopNavBar />
      <Header title="WEB" onChangeMode={() => {
        setMode( 'WELCOME' );
      }}></Header>
      <_Nav_ topics={topics} onChangeMode={(id) => {
        setMode( 'READ' );
        setId( id );
      }}></_Nav_>

      { content }

      <ul>
        <li>
          <a href="/create" onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}


{/*
export default function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/topics">Topics</NavLink></li>
        <li><NavLink to = "/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path = "/" element={<Home/>} />
        {/*<Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={ 'Not Found' } />
      </Routes>
    </div>
  )
}
*/}