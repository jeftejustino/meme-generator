import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

// import '~/config/ReactotronConfig';
import GlobalStyles from '~/styles/global';

import Routes from '~/routes';

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
