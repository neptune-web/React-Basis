import React, { useEffect, useState } from 'react';

// styles
import styles from './index.module.scss';

interface TabListArray {
  label: string;
}

interface TabProps {
  tabList: TabListArray[];
  activeTab: number;
  selectTab: (index: number) => void;
}

export const Tab: React.FC<TabProps> = (props) => {
  const { tabList, activeTab, selectTab } = props;
  const [viewWidth, setViewWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [childWidth, setChildWidth] = useState<number[]>([]);
  const [offsetWidth, setOffsetWidth] = useState(0);

  useEffect(() => {
    const element = window.document.getElementById('tab');
    if (element !== null) {
      setViewWidth(element.offsetWidth);
      setTotalWidth(element.offsetWidth);
    }
    const array: number[] = [];
    tabList.map((item, index) => {
      const childElem = window.document.getElementById(index.toString());
      if (childElem !== null) {
        array.push(childElem.offsetWidth);
      }
      return array;
    });
    setChildWidth(array);
  }, []);

  useEffect(() => {
    let width = 0;
    let count = 0;
    for (const value of childWidth) {
      if (count === activeTab) {
        width += value / 2;
        break;
      } else {
        width += value;
      }
      count += 1;
    }
    setOffsetWidth(width - viewWidth / 2);
  }, [totalWidth, childWidth, activeTab]);

  useEffect(() => {
    const scrollDemo = document.getElementById('tab');
    if (scrollDemo !== null) {
      scrollDemo.scrollLeft = offsetWidth;
    }
  }, [offsetWidth]);

  return (
    <nav id='tab' className={styles.tabArea} aria-label='Tabs'>
      {tabList.map((item, index) => (
        <div
          role='button'
          tabIndex={0}
          className={styles.tabItem}
          onClick={() => selectTab(index)}
          onKeyDown={() => selectTab(index)}
          key={index}
          id={index.toString()}
        >
          <div
            className={`whitespace-nowrap font-primary-regular text-sm ${
              activeTab === index ? 'font-green-color' : 'font-grey-color'
            }`}
          >
            {item.label}
          </div>
          <div className='w-full flex justify-center'>
            {activeTab === index && <div className={styles.divider} />}
          </div>
        </div>
      ))}
    </nav>
  );
};
