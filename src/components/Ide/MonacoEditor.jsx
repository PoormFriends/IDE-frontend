import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

export default function MonacoEditor() {
  const editorRef = useRef(null);

  const handleEditorDidMount = editor => {
    editorRef.current = editor;
  };

  function showValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    } else {
      console.log("Editor is not mounted yet");
    }
  }
  return (
    <>
      <Editor
        defaultLanguage="java"
        width="100%"
        height="60vh"
        options={{
          padding: { top: 15, bottom: 15 },
          fontSize: 13,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
        onMount={handleEditorDidMount}
      />
      <button type="button" onClick={showValue}>
        show value
      </button>
    </>
  );
}
