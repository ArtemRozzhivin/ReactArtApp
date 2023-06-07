import TextField from '@mui/material/TextField';
import React from 'react';

const Input = ({ value, name, onChange, className, placeholder, type, id, error, helperText }) => {
  return (
    <TextField
      fullWidth
      id={id}
      type={type}
      name={name}
      color='primary'
      label={placeholder}
      variant='outlined'
      value={value}
      helperText={helperText}
      error={error}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
