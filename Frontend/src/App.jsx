import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import axios from 'axios'
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
    return 1 + 1
  }`)
  
    const [ review, setReview ] = useState(``)
  useEffect(() => {
    prism.highlightAll()
  }, []) 

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }


  // return (
  //   <>
    {/* <main>
    <div className="left">
    <div className="code">
   
     { <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            /> 
     }


    
    
    
    
    </div>
    <div 
     onClick={reviewCode}
     className="review">Review</div>
    
    </div>
    <div className="right">
    <Markdown

rehypePlugins={[ rehypeHighlight ]}

>{review}</Markdown>

    </div>
</main>
    </>
  ) */
 
 
 
    return (
      <>
        {/* Title */}
        <header style={{
          backgroundColor: '#1e1e1e',
          padding: '1rem 2rem',
          color: 'white',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          borderBottom: '1px solid #333',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span role="img" aria-label="rocket">🤖</span> CodeCritic AI
        </header>
    
        <main style={{
          display: 'flex',
          height: 'calc(100vh - 72px)',
          backgroundColor: '#0f0f0f',
          color: 'white',
          fontFamily: '"Fira Code", monospace',
          overflow: 'hidden',
        }}>
          {/* Left Panel */}
          <div className="left" style={{
            flex: 1,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#1e1e1e',
            borderRight: '1px solid #333',
            overflow: 'hidden',
          }}>
            <div className="code" style={{
              flex: 1,
              overflowY: 'auto',
              backgroundColor: '#282c34',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: '0 0 15px rgba(0,0,0,0.5)',
            }}>
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                padding={16}
                style={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: 16,
                  backgroundColor: 'transparent',
                  outline: 'none',
                  minHeight: '100%',
                }}
              />
            </div>
    
            <button 
              onClick={reviewCode}
              className="review"
              style={{
                backgroundColor: '#4f46e5',
                padding: '12px 20px',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#4338ca'}
              onMouseLeave={e => e.target.style.backgroundColor = '#4f46e5'}
            >
              Review
            </button>
          </div>
    
          {/* Right Panel */}
          <div className="right" style={{
            flex: 1,
            padding: '2rem',
            backgroundColor: '#121212',
            overflowY: 'auto',
            color: '#e5e5e5',
          }}>
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </Markdown>
          </div>
        </main>
      </>
    )
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  }
}


export default App
