/* eslint-disable react/prop-types */
/* React-Query 학습 후 전역상태는 React-Query로 변경 예정
일단, Context API 밖에 몰라서 이렇게 진행했습니다. */
import { React, createContext, useMemo, useState } from "react";

export const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [editor, setEditor] = useState("");
  const editorValue = useMemo(() => {
    return { editor, setEditor };
  }, [editor]);

  return (
    <EditorContext.Provider value={editorValue}>
      {children}
    </EditorContext.Provider>
  );
}
