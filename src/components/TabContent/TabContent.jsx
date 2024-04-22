import styles from "./tabContent.module.css";
const TabContent = ({ tabData, activeTab }) => {
  return (
    <ul>
      {tabData.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeTab === index
                ? `${styles.activeContent}`
                : `${styles.inactiveContent}`
            }
          >
            {item.content}
          </div>
        );
      })}
    </ul>
  );
};

export default TabContent;
