import { useState } from "react";
import "./App.css";
import TaskOne from "./components/TaskOne/TaskOne";
import TaskTwo from "./components/TaskTwo/TaskTwo";
import Route from "./components/Route/Route";
import TabButton from "./components/TabButton/TabButton";
import TabContent from "./components/TabContent/TabContent";

const orderItem = {
  fullRouteName: "İstanbul Dudullu bus station - Altınoluk bus station",
  departAt: "2022-12-13T18:41:13",
  route: "ALT - IST",
  interconnection: "INTERCONNECTION"
};
const data = [
  { id: 0, content: <TaskOne />, title: "Task One" },
  { id: 1, content: <TaskTwo />, title: "Task Two" },
  { id: 2, content: <Route orderItem={orderItem} />, title: "Route Component" }
];

function App() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <>
      <TabButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabData={data}
      />
      <TabContent activeTab={activeTab} tabData={data} />
    </>
  );
}

export default App;
