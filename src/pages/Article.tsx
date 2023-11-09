import React from 'react'
import { BrowserRouter, NavLink, Route, Routes, useParams } from 'react-router-dom';
import './Article.css'

var contents = [
	{ id: "1", title: "react example", content: "text..." },
	{ id: "2", title: "spring example", content: "spring ..." },
	{ id: "3", title: "java example", content: "java..." },
]

export function Article() {
	return (
			<div>
				<Topics />
			</div>
	)
}

function Topic() {
		var params = useParams();
		var topic_id = params.topic_id;
		var selected_topic = {
			title: 'Sorry',
			content: 'Not Found'
		};

		for (var i = 0; i < contents.length; i++) {
			if (contents[i].id === topic_id) {
				selected_topic = contents[i];
				break;
			}
		}

		return (
			<div>
				<h3>{selected_topic.title}</h3>
				{selected_topic.content}
			</div>
		)
}

function Topics() {
		var lis = [];
		for (var i = 0; i < contents.length; i++) {
			lis.push(
				<li key={contents[i].id}><NavLink to={"/article/" + contents[i].id}>{contents[i].title}</NavLink></li>
			)
		}

		return (
			<div className="layout">
				<div className="container">
					<div className="list">
						<h2>Topics</h2>
						<ul>
							{lis}
						</ul>
					</div>
					<div className="content">
						<Routes>
							<Route path="/:topic_id" element={<Topic />} />
						</Routes>
					</div>
				</div>
			</div>
		)
}



/*
class Article extends React.Component {
	
	Topic = () => {
		var params = useParams();
		var topic_id = params.topic_id;
		var selected_topic = {
			title: 'Sorry',
			content: 'Not Found'
		};

		for (var i = 0; i < contents.length; i++) {
			if (contents[i].id === topic_id) {
				selected_topic = contents[i];
				break;
			}
		}

		return (
			<div>
				<h3>{selected_topic.title}</h3>
				{selected_topic.content}
			</div>
		)
	}

	Topics = () => {
		var lis = [];
		for (var i = 0; i < contents.length; i++) {
			lis.push(
				<li key={contents[i].id}><NavLink to={"/article/" + contents[i].id}>{contents[i].title}</NavLink></li>
			)
		}

		return (
			<div className="layout">
				<div className="container">
					<div className="list">
						<h2>Topics</h2>
						<ul>
							{lis}
						</ul>
					</div>
					<div className="content">
						<Routes>
							<Route path="/:topic_id" element={<this.Topic />} />
						</Routes>
					</div>
				</div>
			</div>
		)
	}

	
	render() {
		return (
			<div>
				<this.Topics />
			</div>
		)
	}
}

export default Article */