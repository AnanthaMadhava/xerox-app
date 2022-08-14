import React from 'react';
import './Button.css';
import { Button as GrommetButton, Box, Text } from 'grommet';

const Button = ({ className, textClassName, onClick, icon, label }) => {
  return (
    <GrommetButton className={`app-xerox-button ${className}`} onClick={onClick}>
      <Box className={`app-xerox-label ${textClassName}`} pad="small" direction="row" align="center" gap="small">
        {icon && icon}
        <Text>{label}</Text>
      </Box>
    </GrommetButton>
  );
};

export default Button;