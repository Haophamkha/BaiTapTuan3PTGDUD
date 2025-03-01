import React, { useState } from "react";
export default function Input({textaria }) {
    return (
      textaria ? <textarea /> : <input />
    );
  }