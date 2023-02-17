
// type rsc in webstorm for functional components

import React from 'react';
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
// import HomeBanner from "./components/home/HomeBanner";


const App = () => {
  return (
      <div>
        {/*<HomePage/>*/}
        <TodoPage/>
      </div>
  );
};

export default App;
