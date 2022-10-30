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