import { useState } from "react";

export default function JoinInput() {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <span>
      <input
        className={`text-input mr-1 ${
          isFocused ? "text-input-sm" : "text-input-md"
        }`}
        type="text"
        placeholder="Enter a code or link"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (
            !e.relatedTarget?.classList.contains("link-button") &&
            !(e.relatedTarget as HTMLInputElement)?.disabled
          ) {
            setIsFocused(false);
          }
        }}
      />
      <button
        className={`btn link-button ${!isFocused && "d-none"}`}
        disabled={name === ""}
      >
        Join
      </button>
    </span>
  );
}
