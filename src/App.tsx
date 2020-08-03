import React from 'react';

import GlobalStyle from './styles/global';
import SingIn from './pages/SignIn';
// import SingUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Bruno' }}>
      <SingIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;
