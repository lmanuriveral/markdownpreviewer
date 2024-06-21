import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; // Importar 'marked' de la manera correcta
import './App.css';

// Configurar marked para soportar saltos de línea con retornos de carro
marked.setOptions({
  breaks: true, // Esta opción asegura que los retornos de carro se interpreten como <br>
  gfm: true,
  tables: true,
});

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    // Esto es para asegurarnos de que las tablas se rendericen correctamente
    marked.setOptions({
      breaks: true,
      gfm: true,
      tables: true,
    });
  }, []);

  return (
    <div className="App">
      <h1 className='title'>Markdown Previewer</h1>
      <div className="editor-preview-container">
        <textarea
          id="editor"
          className="editor"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

const initialMarkdown = `# Heading
## Sub-heading
[Link](https://www.example.com)
\`inline code\`
\`\`\`
code block
\`\`\`
- List item
> Blockquote
![Image](https://www.example.com/image.jpg)
**Bold text**

| Wild Header | Crazy Header | Another Header? |
|-------------|--------------|-----------------|
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

Here's a new line  
And another one.`;

export default App;
