import { useEffect, useRef } from "react";
import { debounce } from "lodash";

const Preview = ({ html, css, js }) => {
  const iframeRef = useRef();

  const updatePreview = debounce(() => {
    const document = iframeRef.current.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
      </html>
    `);
    document.close();
  }, 500); // wait 500ms after typing stops

  useEffect(() => {
    updatePreview();
    return () => updatePreview.cancel();
  }, [html, css, js]);

  return <iframe ref={iframeRef} className="w-full h-full border-0" title="Live Preview" />;
};

export default Preview;
