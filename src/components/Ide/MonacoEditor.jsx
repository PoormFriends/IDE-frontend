/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

export default function MonacoEditor({ onValueChange }) {
  const [code, setCode] = useState("");

  const handleEditorChange = value => {
    setCode(value);
  };

  const handleButtonClick = () => {
    onValueChange(code);
  };
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
        onChange={handleEditorChange}
      />
      <button type="button" onClick={handleButtonClick}>
        show value
      </button>
    </>
  );
}
