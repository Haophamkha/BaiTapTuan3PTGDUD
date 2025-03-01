import React from "react";
export default function Button({ 
  backgroundColor = "#DF42A3", 
  color = "white", 
  children, 
  icon: Icon,
  width = 800,
}) {
  return (
    <button
      style={{ backgroundColor, color, width: width, icon: Icon }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition-all"
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}

  
