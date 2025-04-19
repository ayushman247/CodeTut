import JSZip from "jszip";
import { saveAs } from "file-saver";

const TopMenu = ({ html, css, js, setHtml, setCss, setJs }) => {
  const clear = () => {
    setHtml("");
    setCss("");
    setJs("");
  };

  const download = () => {
    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("styles.css", css);
    zip.file("index.js", js);
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "project.zip");
    });
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">CodeTut</h1>
      <div className="space-x-2">
        <button onClick={clear} className="px-4 py-2 bg-red-500 rounded">New Project</button>
        <button onClick={download} className="px-4 py-2 bg-green-500 rounded">Download</button>
      </div>
    </div>
  );
};

export default TopMenu;
