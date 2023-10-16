import React, { ReactPropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { Context } from 'vm';

interface header_props {
  title: string;
}

function Header( props: header_props ) {
  return (
      <header>
        <h1>
          <a href="/">{props.title}</a>
        </h1>
      </header>
  )
}

function Nav() {
  return (
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
  )
}

function Article() {
  return (
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
  )
}

export default function MyApp() {
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  )
}
