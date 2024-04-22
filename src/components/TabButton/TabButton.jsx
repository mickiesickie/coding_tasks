import React from "react";
import styles from "./tabButton.module.css";
const TabButton = ({ tabData, activeTab, setActiveTab }) => {
  return (
    <ul className={styles.tabs_wrapper_buttons}>
      {tabData.map((item, indx) => (
        <li
          className={`${styles.tabButton} ${
            activeTab === indx ? `${styles.activeTabButton}` : null
          }`}
          key={indx}
          onClick={() => setActiveTab(indx)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default TabButton;
