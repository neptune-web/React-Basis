import React from 'react';

// styles
import styles from './index.module.scss';

interface ContentArray {
  text: string;
}

interface JsonObject {
  title: string;
  content: ContentArray[];
}

interface ScrollContentAreaProps {
  data: JsonObject;
}

export const ScrollContentArea: React.FC<ScrollContentAreaProps> = (props) => {
  const { data } = props;

  return (
    <div className={styles.container}>
      <div className={`${styles.title} font-secondary`}>{data.title}</div>
      {data.content.map((item: any, index: any) => (
        <div className={`${styles.text} font-primary`} key={index}>
          {item.text}
        </div>
      ))}
    </div>
  );
};
