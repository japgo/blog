import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import './Article.css';


import { ArticleList, ArticleRenderer } from './ArticleRenderer';



export function Article() {
	return (
		<div>
			<Topics />
		</div>
	)
}

function Topic() {
	return (
		<div>
			<ArticleRenderer />
		</div>
	)
}

function Topics() {

	return (
		<div className="layout">
			<div className="container">
				<div className="list">
					<h2>Ariticle</h2>
					<ul>
						<ArticleList />
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