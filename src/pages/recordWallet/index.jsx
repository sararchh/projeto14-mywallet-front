import React, { useEffect, useState } from 'react';

import { IoMdExit } from "react-icons/io";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

import MainTemplate from '../../components/mainTemplate';

import { Header, CardInfo, Text, CardTextNotRegister, Button, ContentButton } from './styles';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

function RecordWallet() {
  const navigate = useNavigate();

  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserLogged(user);

    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  const handleWalletExit = async () => {
    await api.delete(`/logout/${userLogged._id}`);

    navigate('/');

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return (
    <MainTemplate content={
      <>
        <Header>
          <h2>Olá, {userLogged?.name}</h2>
          <button
            onClick={handleWalletExit}
          >
            <IoMdExit />
          </button>
        </Header>

        <CardInfo>

          <CardTextNotRegister>
            <Text>Não há registros de entrada ou saída</Text>
          </CardTextNotRegister>

        </CardInfo>

        <ContentButton>
          <Button
            className='buttonMargin'
            onClick={() => navigate('/tran-entry?type=E')}
          >
            <BiPlusCircle />

            <p>Nova <br />
              entrada</p>
          </Button>

          <Button
            onClick={() => navigate('/tran-exit?type=S')}
          >
            <BiMinusCircle />

            <p>Nova <br />
              saída</p>
          </Button>
        </ContentButton>
      </>
    }
    />
  );
}

export default RecordWallet;