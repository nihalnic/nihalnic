// Resources.tsx
import { useState } from "react";
import { data, TabData, TabDataItem } from "../../data";
import { Link } from "react-router-dom";

const Resources = () => {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(data[0])[0]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabDataArray: TabData[] = data;
  const activeTabData = tabDataArray.find(
    (tabData) => Object.keys(tabData)[0] === activeTab
  );
  const tabItems: TabDataItem[] = activeTabData?.[activeTab] || [];

  return (
    <div className="common-container">
      <h1 className="page-heading">Resources</h1>

      <div className="tab-contents">
        <div className="tab-card">
          {tabDataArray.map((tabData) => (
            <li
              key={Object.keys(tabData)[0]}
              className={`tabs_list ${
                activeTab === Object.keys(tabData)[0] && "bg-gray"
              }`}
              onClick={() => handleTabClick(Object.keys(tabData)[0])}
            >
              {Object.keys(tabData)[0]}
            </li>
          ))}
        </div>
        <div className="grids mt-16">
          {tabItems.map((tabItem: TabDataItem) => (
            <Link
              to={tabItem.route}
              target="_blank"
              key={`${tabItem.title}-${tabItem.route}`}
            >
              <div className="grid-card">
                <div className="w-full relative ">
                  <img
                    src={tabItem.image}
                    alt={tabItem.title}
                    className="cover-images"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="grid-card_content">
                  <div className="flex-between">
                    <h3 className="h3-regular pt-2">{tabItem.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
