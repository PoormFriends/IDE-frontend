import React, { useState } from "react";
import MessageContainer from "./MessageContainer";
import InputField from "./InputField";

const chatLog = [
  {
    time: "2023-12-24-20-22",
    userId: "-1",
    nickname: "system",
    message: "00님이 입장하셨습니다.",
  },
  {
    time: "2023-12-24-20-23",
    userId: "-1",
    nickname: "system",
    message: "11님이 입장하셨습니다.",
  },
  {
    time: "2023-12-24-20-24",
    userId: "3",
    nickname: "00",
    message: "<a>안녕하세요.</a><p>안녕하세요.</p>",
  },
  {
    time: "2023-12-24-20-25",
    userId: "4",
    nickname: "11",
    message: "<p>안녕하세요.</p>",
  },
];

// "/chat/{userId}/{problemId}" chat에는 list 하나가 담김
// list, 문제주인id(OwnerId), problemId

function ChatModal() {
  const [messageLists, setMessageLists] = useState(chatLog);
  const [message, setMessage] = useState("");
  const userId = "3";
  const userNickname = "00";
  let time = 202312242026;

  const sendmessage = () => {
    time += 1;
    setMessageLists(prev => [
      ...prev,
      { time, userId, nickname: userNickname, message },
    ]);

    setMessage("");
  };

  return (
    <div>
      <div className="App">
        <MessageContainer
          messageLists={messageLists}
          user={userNickname}
          userId={userId}
        />
        <InputField
          message={message}
          setMessage={setMessage}
          sendmessage={sendmessage}
        />
      </div>
    </div>
  );
}

export default ChatModal;
