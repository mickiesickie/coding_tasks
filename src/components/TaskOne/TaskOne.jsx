import React, { useState } from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import styles from "./taskOne.module.css";
const TaskOne = () => {
  const [text, setText] = useState("ADKDKSSSJSDJSD");

  const truncateText = (stringToTruncate) => {
    const truncStr = stringToTruncate.slice(0, 5);
    return `${truncStr}...`;
  };
  const handleCopyPaste = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
    } catch (e) {
      console.error("Failed to copy ", e);
    }
  };

  return (
    <div>
      <p className="{">
        {truncateText(text)}
        <HiOutlineClipboardDocumentList
          className={styles.copyButton}
          onClick={() => handleCopyPaste(text)}
        />
      </p>
      <label>Paste Here</label>
      <input></input>
    </div>
  );
};

export default TaskOne;
