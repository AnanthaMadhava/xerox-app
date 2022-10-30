import React, { useEffect, useState } from 'react';
import { Grommet, grommet } from 'grommet';
import Content from './Content';
import Header from './Header';
import axios from 'axios';

const App = () => {

  const [ userName, setUserName ] = useState('AnanthaMadhava');
  const [ usersList, setUsersList ] = useState([]);

  useEffect(() => {
    if(userName) {
        axios.get(`https://api.github.com/search/users?q=${userName}+in:user`)
        .then(res => {
          let result = res.data.items;
          console.log(result);
          setUsersList(result);
        })
        .catch(err => {
          console.log(err.response);
          setUsersList([]);
        })
    }
  }, [ userName ]);

  return (
    <Grommet full theme={grommet} themeMode='light'>
      <Header />
      <Content />
    </Grommet>
  );
};
export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import GitHubRepos from './component/js/container/GitHubRepos';
// import GitHubUsers from './component/js/container/GitHubUsers';

// const App = () => {
//   return (
//     <Routes>
//       <Route exact path='/' element={<GitHubUsers />} />
//       <Route path='/repo/:userId' element={<GitHubRepos />} />
//     </Routes>
//   );
// };

// export default App;