import React, { useState } from 'react';
import { Header as GrommetHeader, Text, Layer } from 'grommet';
import Button from './Button';
import { Scan, Close } from 'grommet-icons';
import './Header.css';

const Header = () => {

  const [open, setOpen] = useState();

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(undefined);
  }
  return (
    <>
      <GrommetHeader background='#FF10F0' pad="small" className='app-xerox-header'>
        <Text className='app-xerox-header-text'>
          Xerox&reg; Note Converter
        </Text>
        <Button 
          className='app-xerox-header-button'
          icon={<Scan color='#fff'/>}
          label='Scan'
          onClick={onOpen}
        />
      </GrommetHeader>
      {open && (
        <Layer className='app-xerox-header-scanLayer'>
          <Text size='large'>Document Successfully Scanned.</Text>
          <Text className='app-xerox-header-scanLayer-successEmail' size='medium'>You will receive an email from Xerox Note Converter with your text file.</Text>
          <Button 
            className='app-xerox-header-layer-button'
            icon={<Close color='#fff'/>}
            label='Close'
            onClick={onClose}
          />
        </Layer>
      )}
    </>
  );
};

export default Header;