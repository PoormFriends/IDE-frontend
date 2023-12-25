import React from "react";
import Container from "@mui/material/Container";
import parser from "html-react-parser";
import styles from "./MessageContainer.module.css";

function MessageContainer({ messageLists, user }) {
  return (
    <div className={styles.message_container_wrap}>
      {messageLists &&
        messageLists.map(list => {
          let messageContainer = null;

          if (list.nickname === "system") {
            messageContainer = (
              <div className={styles.system_message_container}>
                <p className={styles.system_message}>{list.message}</p>
              </div>
            );
          } else if (list.nickname === user) {
            messageContainer = (
              <div className={styles.my_message_container}>
                <div className={styles.my_message}>{parser(list.message)}</div>
                <div className={styles.my_nickname}>{list.nickname}</div>
              </div>
            );
          } else {
            messageContainer = (
              <div className={styles.your_message_container}>
                <div className={styles.your_nickname}>{list.nickname}</div>
                <div className={styles.your_message}>
                  {parser(list.message)}
                </div>
              </div>
            );
          }

          return (
            <Container
              key={list.time}
              sx={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            >
              {messageContainer}
            </Container>
          );
        })}
    </div>
  );
}

export default MessageContainer;
