import React from 'react';
import MuiButton from '@mui/material/Button';

const Button = ({
  onClick,
  children,
  color,
  variant = 'contained',
  disabled,
  id,
  type,
  fullwidth,
}) => {
  return (
    <MuiButton
      id={id}
      fullwidth={fullwidth}
      type={type}
      disabled={disabled}
      color={color}
      variant={variant}
      onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;
