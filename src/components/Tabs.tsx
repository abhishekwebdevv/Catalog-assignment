import { FC, useState } from "react";
import cn from "classnames";

type TabsProps = {
  tabsData: Tab[];
  value?: Tab;
  onChangeTab?: (tab: Tab) => void;
};
export type Tab = {
  id: string;
  title: string;
};

const Tabs: FC<TabsProps> = (props) => {
  const { tabsData, onChangeTab, value } = props;
  const [tabValue, setTabValue] = useState(value || tabsData[0]);
  const handleTabClick = (tab: Tab) => {
    setTabValue(tab);
    if (onChangeTab) {
      onChangeTab(tab);
    }
  };

  return (
    <div className="flex w-fit max-w-full gap-x-4 overflow-scroll">
      {tabsData?.map((tab) => (
        <div
          key={tab?.id}
          className="cursor-pointer"
          onClick={() => handleTabClick(tab)}
        >
          <p
            className={cn("text-xl text-gray-500 select-none px-2", {
              "!text-black": tab?.id === tabValue?.id,
            })}
          >
            {tab?.title}
          </p>

          <div
            className={cn("h-1 bg-purple mt-3", {
              hidden: tab?.id !== tabValue?.id,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
