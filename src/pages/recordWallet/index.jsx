import React from 'react';

import { IoMdExit } from "react-icons/io";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

import MainTemplate from '../../components/mainTemplate';

import { Header, CardInfo, Text, CardTextNotRegister, Button, ContentButton } from './styles';

function RecordWallet() {
  return (
    <MainTemplate content={
      <>
        <Header>
          <h2>Olá, Fulano</h2>
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