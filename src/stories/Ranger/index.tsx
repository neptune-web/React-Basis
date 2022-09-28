import React from 'react';

// custom components
import { Range } from 'react-range';

// styles
import styles from './index.module.scss';

interface RangerProps {
  minValue: number;
  maxValue: number;
  currentValue: number;
  onChange?: (values: number) => void;
}

export const Ranger: React.FC<RangerProps> = (props) => {
  const { minValue, maxValue, currentValue, onChange = () => {} } = props;

  const values = [(currentValue / (maxValue - minValue)) * 100];

  const handleChangeValue = (values: number[]) => {
    onChange(Math.ceil((values[0] * (maxValue - minValue)) / 100 + 100));
  };
  return (
    <div className={styles.container}>
      <Range
        step={0.01}
        min={0}
        max={100}
        values={values}
        onChange={(values: number[]) => handleChangeValue(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              height: '8px',
              width: '100%',
              background: `linear-gradient(to right, #033417 0%, #033417 ${(
                (currentValue * 100) /
                (maxValue - minValue)
              ).toFixed(0)}%, #0ACE5F ${((currentValue * 100) / (maxValue - minValue)).toFixed(
                0
              )}%, #0ACE5F 100%)`,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              // ...props.style,
              height: '25px',
              width: '25px',
              borderRadius: '13px',
              backgroundColor: '#033417',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          />
        )}
      />
      <div
        className={`${styles.labelArea} font-primary-regular font-grey-color text-base`}
        id='output'
      >
        <div>${minValue}</div>
        <div>${currentValue}</div>
        <div>${maxValue}</div>
      </div>
    </div>
  );
};
