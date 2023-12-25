const markdown = `
## heading

**BOLD**

*abcd*

\`\`\`js
code block
hihi
class User {
	private string name;
	private string password;
}
\`\`\`

> text
>> test2
`;

var contents = [
	{ id: "1", title: "react example", content: markdown },
	{ id: "2", title: "spring example", content: "spring ..." },
	{ id: "3", title: "java example", content: "java..." },
]

export function get_list() {
    return contents;        
}
