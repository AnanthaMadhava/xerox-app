import React, { useEffect } from 'react';
import { Grommet, grommet } from 'grommet';
import Content from './Content';
import Header from './Header';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data);
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