import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RecordWallet from '../pages/recordWallet';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import TransactionRegistration from '../pages/transactionRegistration';

//import ProtectedRoutes from "./protectedRoutes"

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/my-wallet' element={<RecordWallet />} />
        <Route path='/tran-cad' element={<TransactionRegistration />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;