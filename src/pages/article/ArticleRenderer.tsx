import { NavLink, useParams } from "react-router-dom";
import { MarkdownRenderer } from "../../utils/MarkdownRenderer"
import { get_list } from "../../utils/ArticleRepository"

const markdown = `
## heading

**BOLD**

*abcd*

\`\`\`js
code block
class User {
	private string name;
	private string password;
}
\`\`\`

> text
>> test2
`;

var conten = [
	{ id: "1", title: "react example", content: markdown },
	{ id: "2", title: "spring example", content: "spring ..." },
	{ id: "3", title: "java example", content: "java..." },
]


export function ArticleList() {
	var lis = [];
    var contents = get_list(); 
	for (var i = 0; i < contents.length; i++) {
		lis.push(
			<li key={contents[i].id}><NavLink to={"/article/" + contents[i].id}>{contents[i].title}</NavLink></li>
		)
	}
	
	return (
		<div>
			{lis}
		</div>
	)
}

export function ArticleRenderer() {
	var params = useParams();
	var topic_id = params.topic_id;
	var selected_topic = {
		title: 'Sorry',
		content: 'Not Found'
	};

    var contents = get_list();
	for (var i = 0; i < contents.length; i++) {
		if (contents[i].id === topic_id) {
			selected_topic = contents[i];
			break;
		}
	}

	return (
		<div>
			<h1>{selected_topic.title}</h1>
			<MarkdownRenderer content = {selected_topic.content} />
		</div>
	);
}
