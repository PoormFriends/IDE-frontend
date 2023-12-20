/* eslint-disable react/prop-types */
import React from "react";

export default function TestModal({ onClose }) {
  return (
    <div
      style={{
        width: "500px",
        background: "white",
        padding: "20px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    >
      {/* 여기에 컨텐츠 내용 */}
      <butto type="button" onClick={onClose}>
        닫기
      </butto>
    </div>
  );
}
