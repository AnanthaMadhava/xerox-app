import React, { useState, useEffect } from 'react';
import { Grommet, grommet } from 'grommet';
import Content from './Content';
import Header from './Header';
import axios from 'axios';

const App = () => {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setData([]);
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