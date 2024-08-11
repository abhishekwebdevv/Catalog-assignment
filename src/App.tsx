import { useState } from "react";
import "./App.css";
import Tabs, { Tab } from "./components/Tabs";
import Chart from "./components/Chart";

function App() {
  const tabsData: Tab[] = [
    {
      id: "1",
      title: "Summary",
    },
    {
      id: "2",
      title: "Chart",
    },
    {
      id: "3",
      title: "Statistics",
    },
    {
      id: "4",
      title: "Analysis",
    },
    {
      id: "5",
      title: "Settings",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabsData[1]);

  const tabComponent = {
    Summary: <div>Summary</div>,
    Chart: <Chart />,
    Statistics: <div>Statistics</div>,
    Analysis: <div>Analysis</div>,
    Settings: <div>Settings</div>,
  };

  return (
    <div className="sm:p-20 p-5">
      <div className="flex items-start gap-x-1">
        <p className="text-7xl font-bold">63,179.71</p>
        <p className="text-2xl text-gray-400">USD</p>
      </div>
      <p className="text-green-500 text-xl mt-3">+ 2,161.42 (3.54%)</p>

      <div className="mt-10">
        <Tabs
          tabsData={tabsData}
          value={selectedTab}
          onChangeTab={(tab) => setSelectedTab(tab)}
        />
        <div className="absolute left-0 h-[1px] bg-gray-200 w-full" />
      </div>

      <div className="mt-10">
        {tabComponent[selectedTab?.title as keyof typeof tabComponent]}
      </div>
    </div>
  );
}

export default App;
