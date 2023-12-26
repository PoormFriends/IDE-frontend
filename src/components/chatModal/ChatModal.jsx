/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import MessageContainer from "./MessageContainer";
import InputField from "./InputField";
import styles from "./ChatModal.module.css";

function ChatModal({ ownerId, problemId }) {
  const [messageLists, setMessageLists] = useState([]);
  const [message, setMessage] = useState("");
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);
  const userId = String(userData?.userId);
  const userNickname = userData?.name;
  const userProfile = userData?.profileImage;

  // 클라이언트 생성
  const client = useRef({});

  // 데이터 가져오기
  const subscribe = () => {
    client.current.subscribe(`/sub/chat/${ownerId}/${problemId}`, body => {
      const jsonBody = JSON.parse(body.body);
      setMessageLists(prevMessagList => [...prevMessagList, jsonBody]);
    });
  };

  // 웹소켓 연결
  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://localhost:8081/ws",
      onConnect: () => {
        subscribe(); // 연결 성공 시 구독하는 로직 실행
      },
    });
    client.current.activate(); // 클라이언트 활성화
  };

  // 연결이 끊겼을 때
  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  // 메시지 보내기
  const publish = chat => {
    if (!client.current.connected) return; // 연결되지 않았으면 메시지를 보내지 않는다.
    const time = new Date().getTime();
    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({
        ownerId,
        problemId,
        userId,
        userNickname,
        userProfile,
        time,
        chat,
      }),
    });

    setMessage("");
  };

  // const sendMessage = () => {
  //   const time = new Date().getTime();
  //   console.log(time);
  //   setMessageLists(prev => [
  //     ...prev,
  //     { ownerId, problemId, userId, userNickname, userProfile, time, message },
  //   ]);

  //   setMessage("");
  // };

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
