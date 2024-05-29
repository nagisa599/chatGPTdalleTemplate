"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const onClick = async () => {
    const response = await fetch("/api/open-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onClick}>Clear</button>
    </div>
  );
}
