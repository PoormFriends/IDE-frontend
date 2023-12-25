import React, { useContext, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
// import { useLocation } from "react-router-dom";
import { EditorContext } from "../../contexts/EditorContext";

export default function MonacoEditor({ userCode }) {
  const { setEditor } = useContext(EditorContext);
  // const location = useLocation();
  const monacoRef = useRef(null);

  const handleEditorDidMount = editor => {
    monacoRef.current = editor;
  };

  const handleEditorChange = value => {
    setEditor(value);
  };

  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.setValue(userCode);
    }
    // setEditor(userCode);
    // handleEditorChange(userCode);
  }, [userCode]);

  return (
    <Editor
      defaultLanguage="java"
      defaultValue={userCode}
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
      onMount={handleEditorDidMount}
    />
  );
}
