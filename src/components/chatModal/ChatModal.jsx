import React from "react";
import MessageContainer from "./MessageContainer";
import InputField from "./InputField";
import styles from "./ChatModal.module.css";

function ChatModal({
  location,
  message,
  setMessage,
  messageLists,
  userId,
  publish,
  chatList,
}) {
  return (
    <div className={styles.chat_box}>
      <MessageContainer
        messageLists={messageLists}
        userId={userId}
        chatList={chatList}
      />
      <InputField
        location={location}
        message={message}
        setMessage={setMessage}
        sendMessage={publish}
      />
    </div>
  );
}

export default ChatModal;
