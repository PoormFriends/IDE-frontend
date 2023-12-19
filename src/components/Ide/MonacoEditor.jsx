/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Editor from "@monaco-editor/react";
import { EditorContext } from "../../contexts/EditorContext";

export default function MonacoEditor() {
  const { setEditor } = useContext(EditorContext);

  const handleEditorChange = value => {
    setEditor(value);
  };

  return (
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
  );
}
