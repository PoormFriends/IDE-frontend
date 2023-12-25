import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import styles from "./InputField.module.css";
import "./TipTap.css";

function InputField({ message, setMessage, sendmessage }) {
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
        onClick={e => {
          if (message.length > 0) {
            sendmessage(e);
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
