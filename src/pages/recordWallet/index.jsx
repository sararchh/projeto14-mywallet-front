import React, { useEffect, useState } from 'react';

import { IoMdExit } from "react-icons/io";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

import MainTemplate from '../../components/mainTemplate';

import { Header, CardInfo, Text, CardTextNotRegister, Button, ContentButton } from './styles';

function RecordWallet() {

  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserLogged(user);
    // eslint-disable-next-line
  }, []);

  return (
    <MainTemplate content={
      <>
        <Header>
          <h2>Olá, {userLogged?.name}</h2>
          <IoMdExit />
        </Header>

        <CardInfo>

          <CardTextNotRegister>
            <Text>Não há registros de entrada ou saída</Text>
          </CardTextNotRegister>

        </CardInfo>

        <ContentButton>
          <Button className='buttonMargin'>
            <BiPlusCircle />

            <p>Nova <br />
              entrada</p>
          </Button>

          <Button>
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