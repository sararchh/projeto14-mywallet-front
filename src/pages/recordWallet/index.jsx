import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdExit } from "react-icons/io";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

import MainTemplate from '../../components/mainTemplate';

import { Header, CardInfo, Text, CardTextNotRegister, Button, ContentButton, Card, TextTitleTransaction, TextValues, CardSum, Content } from './styles';

import api from '../../services/api';
import { toast } from 'react-toastify';
import { UserContext } from '../../Contexts/userContext';

function RecordWallet() {
  const navigate = useNavigate();

  const { setEditMode, setDataTransaction } = useContext(UserContext);

  const [userLogged, setUserLogged] = useState();
  const [transactions, setTransactions] = useState([]);
  const [balanceTransactions, setBalanceTransactions] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserLogged(user);
    handleGetValuesTransaction();
    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (Boolean(transactions.length)) {
      handleSumValuesTransactions();
    }
    // eslint-disable-next-line
  }, [transactions]);

  const handleGetValuesTransaction = async () => {
    const { data } = await api.get('/transaction');

    setTransactions(data);
  }

  const handleWalletExit = async () => {
    await api.delete(`/logout/${userLogged._id}`);

    navigate('/');

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  const handleDeleteTransaction = async (id) => {
    try {
      const resp = window.confirm('Deseja excluir?');

      if (resp !== true) {
        return;
      }

      await api.delete(`/transaction/${id}`);
      handleGetValuesTransaction();
    } catch (error) {
      toast.error('Erro ao excluir  transação.')
    }
  }

  const handleSumValuesTransactions = () => {
    let total = 0;

    total = transactions?.reduce((sum, item) => {
      if (item.type === 'E') {
        return sum + Number(item.value);
      } else {
        return sum - Number(item.value);
      }
    }, 0);

    setBalanceTransactions(total.toFixed(2));
  }

  const handleEditTransaction = (item) => {
    navigate('/tran-cad');
    setEditMode(true);
    setDataTransaction(item);
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

        <CardInfo className={transactions?.length === 0 && 'styledDiv'} >

          <Content>
            {transactions?.length > 0 ?
              transactions.map((item) => (
                <Card key={item._id}>
                  <div className='divStyled'>
                    <span>{item.day}</span>
                    <TextTitleTransaction
                      onClick={() => handleEditTransaction(item)}
                    >
                      {item.description}
                    </TextTitleTransaction>
                  </div>
                  <div className='divStyled'>
                    <TextValues color={item.type === 'S' ? 'var(--red)' : 'var(--green)'}>{Number(item.value).toFixed(2)}</TextValues>
                    <button onClick={() => handleDeleteTransaction(item._id)}><TiDelete /></button>
                  </div>
                </Card>
              ))
              :
              <CardTextNotRegister>
                <Text>Não há registros de entrada ou saída</Text>
              </CardTextNotRegister>
            }
          </Content>

          {transactions?.length > 0 &&
            <CardSum>
              <p className='textBalance'>SALDO</p>
              <TextValues>{balanceTransactions}</TextValues>
            </CardSum>
          }
        </CardInfo>

        <ContentButton>
          <Button
            className='buttonMargin'
            onClick={() => navigate('/tran-cad?type=E')}
          >
            <BiPlusCircle />

            <p>Nova <br />
              entrada</p>
          </Button>

          <Button
            onClick={() => navigate('/tran-cad?type=S')}
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