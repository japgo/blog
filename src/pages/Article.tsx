import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import './Article.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const MarkDownStyle = styled.div`
	font-size: 1rem;
	line-height: 2.5rem;
`;

const markdown = `
## heading

**BOLD**

*abcd*

\`\`\`js
	code block
\`\`\`

> text
>> test2
`;

var contents = [
	{ id: "1", title: "react example", content: markdown },
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
			<h1>{selected_topic.title}</h1>
			<MarkDownStyle>
				<ReactMarkdown remarkPlugins={[remarkGfm]}
					components={{
						code({ node, className, children }) {
							return (
							  <SyntaxHighlighter
								style={nord}
								language="textile"
								PreTag="div"
							  >
								{String(children).replace(/\n$/, "")}
							  </SyntaxHighlighter>
							);
						  },
						// 인용문 (>)
						blockquote({ node, children }) {
							return (
								<div
									style={{
										background: "#f0f0f0",
										padding: "1px 15px",
										borderRadius: "10px",
									}}
								>
									{children}
								</div>
							);
						}
					}}
				>
					{selected_topic.content}
				</ReactMarkdown>
			</MarkDownStyle>

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