import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface MarkdownRenderProps {
	content: string;
}

export function MarkdownRenderer( _props: MarkdownRenderProps) {
	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]}
			components={{
				code({ node, className, children }) {
					return (
						<SyntaxHighlighter
							showLineNumbers
							style={vscDarkPlus}
							wrapLines={true}
							language={"java"}
							PreTag="div"
						>
							{String(children)
								.replace(/\n$/, "")
								// .replace(/\n&nbsp;\n/g, "")
								// .replace(/\n&nbsp\n/g, "")
							}
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
			{_props.content}
		</ReactMarkdown>
	)
}

