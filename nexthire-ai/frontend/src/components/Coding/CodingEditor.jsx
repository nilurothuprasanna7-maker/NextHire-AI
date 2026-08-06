import { useState } from "react";
import "./CodingEditor.css";

function CodingEditor() {

  const [language, setLanguage] = useState("Java");

  const [code, setCode] = useState("");

  return (
    <div className="coding-editor">

      <div className="editor-top">

        <select
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
        >
          <option>Java</option>
          <option>Python</option>
          <option>C++</option>
          <option>JavaScript</option>
        </select>

      </div>

      <textarea
        value={code}
        onChange={(e)=>setCode(e.target.value)}
        placeholder="Write your solution here..."
      />

      <div className="editor-buttons">

        <button>
          ▶ Run Code
        </button>

        <button>
          📤 Submit
        </button>

      </div>

    </div>
  );
}

export default CodingEditor;