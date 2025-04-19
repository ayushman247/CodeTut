import { useState } from "react";

const youtubeParser = (url) => {
  const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
};

const EmbedVideo = () => {
  const [url, setUrl] = useState("");
  const [src, setSrc] = useState("");

  const handleEmbed = () => {
    const id = youtubeParser(url);
    if (id) setSrc(`https://www.youtube.com/embed/${id}`);
    else setSrc(url);
  };

  return (
    <div className="p-2 bg-gray-200">
      <input
        type="text"
        placeholder="Enter video or page URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 mb-2"
      />
      <button onClick={handleEmbed} className="p-2 bg-blue-600 text-white w-full">Embed</button>
      {src && <iframe src={src} className="w-full h-64 mt-2" title="embed" />}
    </div>
  );
};

export default EmbedVideo;
