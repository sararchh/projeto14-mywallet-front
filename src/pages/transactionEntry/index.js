import React, { useEffect, useState } from 'react';
import ButtonStyled from '../../components/atoms/buttonStyled';
import InputStyled from '../../components/atoms/inputStyled';
import MainTemplate from '../../components/mainTemplate';

import { useForm } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos

import { Header, Form } from './styles';
import api from '../../services/api';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function TransactionEntry() {
  const navigate = useNavigate();
  const query = useLocation();
  const [searchParams] = useSearchParams(query.search);

  const [userLogged, setUserLogged] = useState();
  // eslint-disable-next-line 
  const [typeOperation, setTypeOperation] = useState(searchParams.get('type'));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserLogged(user);

    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  const validationSchema = Yup.object().shape({
    valuesInput: Yup.number().required('O valor é obrigatório'),
    description: Yup.string().min(6, 'Minimo 6 caracteres').required('Descrição obrigatório')
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleGetValuesTransaction = () => {
    if (Object.keys(errors).length > 0) return;
    const values = getValues();
    postTransactionEntry(values);
  }

  const postTransactionEntry = async (values) => {
    try {
      const obj = {
        userId: userLogged._id,
        value: values.valuesInput,
        description: values.description,
      }

      await api.post(`/transaction?type=${typeOperation}`, obj);
      toast.success('Cadastrado transação.');
      navigate('/my-wallet');

    } catch (error) {
      toast.error('Erro ao cadastrar transação.');
    }
  }

  return (
    <MainTemplate content={
      <>
        <Header>
          <h2>Nova entrada</h2>
        </Header>
        <Form onSubmit={handleSubmit(handleGetValuesTransaction)}>
          <InputStyled
            name='valuesInput'
            placeholder='Valor'
            onChange={value => setValue('valuesInput', value)}
            messageError={errors?.valuesInput?.message}
          />

          <InputStyled
            name='description'
            placeholder='Descrição'
            onChange={value => setValue('description', value)}
            messageError={errors?.description?.message}
          />

          <ButtonStyled>
            <p>Salvar entrada</p>
          </ButtonStyled>
        </Form>

      </>
    }
    />
  );
}

export default TransactionEntry;