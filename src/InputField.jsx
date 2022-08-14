import React from 'react';
import { TextInput } from 'grommet';

const InputField = ({ placeholder, onChange }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;