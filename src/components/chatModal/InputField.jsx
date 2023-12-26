import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import styles from "./InputField.module.css";
import "./TipTap.css";

function InputField({ message, setMessage, sendMessage }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: () => {
      const html = editor.getHTML();
      setMessage(html);
    },
  });

  return (
    <div className={styles.input_wrapper}>
      <div className={styles.text_editor}>
        <EditorContent editor={editor} />
      </div>
      <button
        type="button"
        className={styles.submit_btn}
        onClick={() => {
          if (message.length > 0) {
            sendMessage(message);
            editor.commands.clearContent();
          }
        }}
      >
        전송
      </button>
    </div>
  );
}

export default InputField;
