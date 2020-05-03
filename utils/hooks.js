import {useState} from 'react';

export const useInputChange = (initalState = '') => {
  const [value, setValue] = useState(initalState);
  const setInputValue = (event) => {
    setValue(event.target.value);
  };

  return [value, setInputValue];
};

export const useToggle = (initalState = false) => {
  const [value, setValue] = useState(initalState);
  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};
