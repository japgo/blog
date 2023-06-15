//import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';

// function App2() {
// 	// const img = "https://imgur.com/k0kaIV0";
	
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload. Wow!!!!!!
// 				</p>
// 				<MyButton/>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// function MyButton() {
// 	const [ count, setCount ] = useState( 0 );

// 	function handleClick() {
// 		alert( 'first ' + count );
// 		setCount( count + 1 );
// 		alert( 'second ' + count );
// 	}

// 	return (
// 		< button onClick = { handleClick } >
// 			I'm a button.
// 			Clicked { count } times
// 		</ button >
// 	)
// }

function App()
{
	return(
		<div className="App">
			<div className="black-nav">
				<h4 className="item">Blog123</h4>
				<h4 className='item'>menu12123123</h4>
			</div>
			<div className='main-page'> 
				<div id='side_left' className='left-menu'> left menu </div>
				<div className='content'> main content </div>
			</div>
		</div>
	)
}

export default App;
// export default Main;
