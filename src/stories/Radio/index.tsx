import React from 'react';

// styles
import styles from './index.module.scss';

interface JSONObject {
  id: number;
  label: string;
  value: string;
}

interface RadioProps {
  data: JSONObject;
  checkedId: number;
  onChange: (item: JSONObject) => void;
}

export const Radio: React.FC<RadioProps> = (props) => {
  const { data, checkedId, onChange } = props;
  return (
    <div className='w-full flex flex-wrap justify-start gap-x-[43px] gap-y-4'>
      <div>
        <input
          className={styles.radio}
          type='radio'
          name='flexRadioDefault'
          id={data.id.toString()}
          checked={checkedId === data.id}
          onChange={() => onChange(data)}
        />
        <label
          className='inline-block font-primary-regular text-sm cursor-pointer'
          htmlFor='flexRadioDefault1'
          onClick={() => onChange(data)}
          onKeyDown={() => onChange(data)}
        >
          {data.label !== undefined && data.label}
        </label>
      </div>
    </div>
  );
};
