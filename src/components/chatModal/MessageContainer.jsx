import React from "react";
import Container from "@mui/material/Container";
import parser from "html-react-parser";
import styles from "./MessageContainer.module.css";

function MessageContainer({ messageLists, userId }) {
  return (
    <div className={styles.message_container_wrap}>
      {messageLists &&
        messageLists.map(list => {
          let messageContainer = null;
          console.log({ list, userId });

          if (list.userId === "-1") {
            messageContainer = (
              <div className={styles.system_message_container}>
                <p className={styles.system_message}>{list.message}</p>
              </div>
            );
          } else if (list.userId === userId) {
            messageContainer = (
              <div className={styles.my_message_container}>
                <div className={styles.my_message}>{parser(list.message)}</div>
                <div className={styles.my_nickname}>{list.userNickname}</div>
              </div>
            );
          } else {
            messageContainer = (
              <div className={styles.your_message_container}>
                <div className={styles.your_nickname}>{list.userNickname}</div>
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
