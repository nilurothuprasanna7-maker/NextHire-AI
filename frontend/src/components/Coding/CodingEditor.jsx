import { useState } from "react";
import "./CodingEditor.css";

function CodingEditor() {
  const [language, setLanguage] = useState("Java");
  const [code, setCode] = useState("");

  const runCode = () => {
    alert("✅ Code Executed Successfully! (Demo Mode)");
  };

  const submitCode = () => {
    if (code.trim() === "") {
      alert("Please write your solution before submitting.");
      return;
    }

    alert("🎉 Solution Submitted Successfully!");
  };

  return (
    <div className="coding-editor">

      <div className="editor-top">

        <h2>Code Editor</h2>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>Java</option>
          <option>Python</option>
          <option>C++</option>
          <option>JavaScript</option>
        </select>

      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`Write your ${language} solution here...`}
      />

      <div className="editor-buttons">

        <button
          className="run-btn"
          onClick={runCode}
        >
          ▶ Run Code
        </button>

        <button
          className="submit-btn"
          onClick={submitCode}
        >
          📤 Submit Solution
        </button>

      </div>

    </div>
  );
}

export default CodingEditor;