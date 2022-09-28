import React from 'react';

// styles
import styles from './index.module.scss';

interface JSONArray {
  id: number;
  label: string;
  value: string;
}

interface RadioGroupProps {
  data: JSONArray[];
  checkedId: number;
  onChange: (item: JSONArray) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { data, checkedId, onChange } = props;
  return (
    <div className='w-full flex flex-wrap justify-start gap-x-[43px] gap-y-4'>
      {data.map((item, index) => (
        <div key={index}>
          <input
            className={styles.radio}
            type='radio'
            name='flexRadioGroupDefault'
            id={item.id.toString()}
            checked={checkedId === item.id}
            onChange={() => onChange(item)}
          />
          <label
            className='inline-block font-primary-regular text-sm cursor-pointer'
            htmlFor='flexRadioGroupDefault1'
            onClick={() => onChange(item)}
            onKeyDown={() => onChange(item)}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};
