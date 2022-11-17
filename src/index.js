import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './routes';
import { UserContextProvider } from './Contexts/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <UserContextProvider>
        <RoutesApp />
      </UserContextProvider>
    </BrowserRouter>
    <ToastContainer />
  </>
);
