import React from 'react';
import { Grommet, grommet } from 'grommet';
import Content from './Content';
import Header from './Header';

const App = () => {
  return (
    <Grommet full theme={grommet} themeMode='light'>
      <Header />
      <Content />
    </Grommet>
  );
};

export default App;