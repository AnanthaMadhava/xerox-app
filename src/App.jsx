import React, { useEffect } from 'react';
import { Grommet, grommet } from 'grommet';
import Content from './Content';
import Header from './Header';
import fetch from 'node-fetch';

const App = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err.response);
      })
  }, [])
  return (
    <Grommet full theme={grommet} themeMode='light'>
      <Header />
      <Content />
    </Grommet>
  );
};
export default App;