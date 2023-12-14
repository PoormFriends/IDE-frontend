import React from "react";
import { Editor } from "@monaco-editor/react";

export default function MonacoEditor() {
  return (
    <Editor
      defaultLanguage="java"
      width="100%"
      height="100%"
      options={{
        padding: { top: 15, bottom: 15 },
        fontSize: 13,
        minimap: { enabled: false },
        scrollbar: {
          vertical: "auto",
          horizontal: "auto",
        },
      }}
    />
  );
}
