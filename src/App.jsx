import React, { useEffect } from 'react';
import { Grommet, grommet } from 'grommet';
import Content from './Content';
import Header from './Header';

const App = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
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