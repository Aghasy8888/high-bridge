import React from 'react';
import { checkbox } from '../assets';

const Checkbox = ({ checked, setChecked, name, inputLabel }) => {
  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className="flex gap-1 items-center">
      {checked && (
        <img
          role="button"
          onClick={handleCheckboxChange}
          src={checkbox}
          alt="checkbox"
          className='cursor-pointer'
        />
      )}

      <input
        className={`${
          checked ? 'hidden' : ''
        } w-[22px] h-[23px] border-none bg-lighterGray rounded-sm`}
        id={name}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />

      <label htmlFor={name} className='cursor-pointer'>
        {inputLabel}
      </label>
    </div>
  );
};

export default Checkbox;
