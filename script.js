class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Heading 1
## Heading 2
[Link Text](https://www.example.com)
\`Inline Code\`

\`\`\`
// Code Block
function sampleFunction() {
  // Your code here
}
\`\`\`

- List Item 1
- List Item 2

> Blockquote Text

![Image Alt Text](https://via.placeholder.com/150)

**Bold Text**
`,
    };
  }

  handleInputChange = (e) => {
    this.setState({ markdown: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="editor-container">
          <textarea id="editor" value={this.state.markdown} onChange={this.handleInputChange}></textarea>
        </div>
        <div className="preview-container">
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown, { breaks: true }) }}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('app'));
