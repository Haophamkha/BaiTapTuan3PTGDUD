import React from "react";

export default function ChamTron({ isActive }) {
  return (
    <div
      className={`w-4 h-4 rounded-full transition-all duration-300 ${
        isActive ? "bg-pink-500 scale-110" : "bg-gray-300"
      }`}
      style={{
        width: "16px", // Kích thước cố định
        height: "16px",
        borderRadius: "50%", // Đảm bảo luôn tròn
        backgroundColor: isActive ? "#DF42A3" : "#D1D5DB", // Màu thủ công
        transition: "all 0.3s ease-in-out",
        justifyContent : "center"
      }}
    ></div>
  );
}
