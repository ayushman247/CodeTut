import Editor from "@monaco-editor/react";
import { useState } from "react";

const EditorTabs = ({ html, css, js, setHtml, setCss, setJs }) => {
  const [activeTab, setActiveTab] = useState("HTML");

  const editorConfig = {
    HTML: {
      language: "html",
      value: html,
      onChange: setHtml,
    },
    CSS: {
      language: "css",
      value: css,
      onChange: setCss,
    },
    JS: {
      language: "javascript",
      value: js,
      onChange: setJs,
    },
  };

  const { language, value, onChange } = editorConfig[activeTab];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex bg-gray-300">
        {["HTML", "CSS", "JS"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 ${activeTab === tab ? "bg-white font-bold" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage={language}
          value={value}
          onChange={onChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
};

export default EditorTabs;
