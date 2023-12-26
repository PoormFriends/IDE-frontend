import React from "react";
import MessageContainer from "./MessageContainer";
import InputField from "./InputField";
import styles from "./ChatModal.module.css";

function ChatModal({ message, setMessage, messageLists, userId, publish }) {
  return (
    <div className={styles.chat_box}>
      <MessageContainer messageLists={messageLists} userId={userId} />
      <InputField
        message={message}
        setMessage={setMessage}
        sendMessage={publish}
      />
    </div>
  );
}

export default ChatModal;
