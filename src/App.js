import './App.css';

function Header( props ) {
	console.log( 'props', props )
	return (
		<header>
			<h1><a href='/'>{props.title}</a></h1>
		</header>
	)
}

function Nav() {
	return (
		<nav>
			<ol>
				<li><a herf='/read/1'>html</a></li>
				<li><a herf='/read/2'>css</a></li>
				<li><a herf='/read/3'>js</a></li>
			</ol>
		</nav>
	)
}

function Article( props ) {
	return ( 
		<article>
			<h2>{props.title}</h2>
			{props.body}
		</article>
	)
}
function App()
{
	return(
		<div>
			<Header title='REACT'></Header>
			<Nav></Nav>
			<Article title='Welcome' body='Hello, Web'></Article>
		</div>
	)
}

export default App;
