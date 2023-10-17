
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

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

function Nav( props: nav_props) {

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

export default function App() {

  const [mode, setMode] = useState( 'WELCOME' );
  const [id, setId] = useState( 0 );
  const [ nextId, setNextId ] = useState( 4 );
  const [ topics, setTopics ] = useState( [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ] );

  let content = null;
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
  }
  else if( mode === 'CREATE' ) {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id:nextId, title: _title, body: _body };
      const newTopics = [ ...topics ];
      newTopics.push( newTopic );
      setTopics( newTopics );
    }}></Create>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode( 'WELCOME' );
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode( 'READ' );
        setId( id );
      }}></Nav>
      { content }
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode( 'CREATE' );
      }}>
        Create
      </a>
    </div>
  )
}
