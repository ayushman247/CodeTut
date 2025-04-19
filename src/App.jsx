import { useState } from "react";
import Split from "react-split";
import EditorTabs from "./components/EditorTabs";
import Preview from "./components/Preview";
import EmbedVideo from "./components/EmbedVideo";
import TopMenu from "./components/TopMenu";

function App() {
  const [html, setHtml] = useState("<!-- write your html here -->");
  const [css, setCss] = useState("/* write your css here */");
  const [js, setJs] = useState("/* write your js here */");

  return (
    <div className="flex flex-col h-screen">
      <TopMenu html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJs={setJs} />
      <div className="flex flex-1">
      <Split className="split" minSize={300} gutterSize={8}>
          <div className="w-full flex flex-col">
            <EmbedVideo />
            <EditorTabs html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJs={setJs} />
          </div>
          <div className="w-full">
            <Preview html={html} css={css} js={js} />
          </div>
        </Split>
      </div>
    </div>
  );
}

export default App;
