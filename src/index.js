import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./tabs.css";

const Tabs = ({
    tabs,
    defaultActiveTab = 0
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    const [tempTabs, setTempTabs] = useState(tabs)
    const [forceUpdate, setForceUpdate] = useState(false)

    const _closeTab = (key) => {
        if (tempTabs.filter(s => ((typeof s.visible !== undefined && s.visible !== false) || s.visible !== false)).length > 1) {
            if (key === activeTab) {
                if (key > 0) {
                    let getIndex = tempTabs.filter((s, k) => k < key && ((typeof s.visible !== undefined && s.visible !== false) || s.visible !== false));
                    if (getIndex) {
                        let getKey = getIndex.reverse()[0];
                        setActiveTab(tempTabs.findIndex(s => s === getKey));
                    }
                    console.log();
                }
                else setActiveTab(0);
            }

            let tabList = tempTabs;
            tabList[key].visible = false;
            setTempTabs(tabList);
            setForceUpdate(!forceUpdate);
            console.log(tempTabs);
        }
    }

    useEffect(() => {
        setActiveTab(defaultActiveTab);
    }, [defaultActiveTab])

    useEffect(() => { }, [forceUpdate])

    return (
        <div className="tab__wrapper">
            <div className="tab_header">
                <ul>
                    {
                        tempTabs.length > 0 && tempTabs.map((item, key) => (
                            ((typeof item.visible !== undefined && item.visible !== false) || item.visible !== false) &&
                            <li key={key} className={(key === activeTab ? 'tab__active' : '')}>
                                <span onClick={() => setActiveTab(key)}>{item.title}</span>
                                <span className="tab_close" onClick={() => _closeTab(key)}>x</span>
                            </li>
                        ))
                    }

                </ul>
            </div>
            <div className="tab_body">
                {
                    tempTabs.length > 0 && tempTabs.map((item, key) => (
                        <div key={key}>
                            <div className="tab__clearfix"></div>
                            <div className={"tab_page " + (key === activeTab ? 'tab__active' : '')}>
                                {
                                    ((typeof item.visible !== undefined && item.visible !== false) || item.visible !== false) && React.cloneElement(item.component)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    defaultActiveTab: PropTypes.number
};

export default Tabs;
