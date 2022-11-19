import React, { useContext, useEffect, useState } from 'react';
import ButtonStyled from '../../components/atoms/buttonStyled';
import InputStyled from '../../components/atoms/inputStyled';
import MainTemplate from '../../components/mainTemplate';

import { useForm, useWatch } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos

import { Header, Form } from './styles';
import api from '../../services/api';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../Contexts/userContext';

function TransactionRegistration() {
  const navigate = useNavigate();
  const query = useLocation();
  const [searchParams] = useSearchParams(query.search);

  const [userLogged, setUserLogged] = useState();
  const [typeOperation] = useState(searchParams.get('type'));

  const { editMode, setEditMode, dataTransaction } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserLogged(user);

    if (!user) {
      navigate('/');
    }

    if (editMode) {
      setValue('valuesInput', dataTransaction.value);
      setValue('description', dataTransaction.description);
    }
    // eslint-disable-next-line
  }, []);

  const validationSchema = Yup.object().shape({
    valuesInput: Yup.number().required('O valor é obrigatório'),
    description: Yup.string().min(6, 'Minimo 6 caracteres').required('Descrição obrigatório')
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState, control } = useForm(formOptions);
  const { errors } = formState;

  useWatch({ control });

  const handleGetValuesTransaction = () => {
    if (Object.keys(errors).length > 0) return;
    const values = getValues();

    if (editMode) {
      updateTransaction(values);
    } else {
      postTransaction(values);
    }
  }

  const postTransaction = async (values) => {
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

  const updateTransaction = async (values) => {
    try {
      const obj = {
        value: values.valuesInput,
        description: values.description,
      }

      await api.put(`/transaction/${dataTransaction._id}`, obj);
      setEditMode(false)
      toast.success('Atualizado com sucesso.');
      navigate('/my-wallet');

    } catch (error) {
      toast.error('Erro ao cadastrar transação.');
    }
  }

  return (
    <MainTemplate content={
      <>
        <Header>
          <h2>{editMode ? (dataTransaction.type === 'S' ? 'Editar saída' : 'Editar entrada') : typeOperation === 'E' ? 'Nova entrada' : 'Nova saída'}</h2>
        </Header>
        <Form onSubmit={handleSubmit(handleGetValuesTransaction)}>
          <InputStyled
            name='valuesInput'
            placeholder='Valor'
            value={getValues('valuesInput')}
            onChange={value => setValue('valuesInput', value)}
            messageError={errors?.valuesInput?.message}
          />

          <InputStyled
            name='description'
            placeholder='Descrição'
            value={getValues('description')}
            onChange={value => setValue('description', value)}
            messageError={errors?.description?.message}
          />

          <ButtonStyled>
            <p> {editMode ? (dataTransaction.type === 'S' ? 'Atualizar saída' : 'Atualizar entrada') : typeOperation === 'E' ? 'Salvar entrada' : 'Salvar saída'}</p>
          </ButtonStyled>
        </Form>

      </>
    }
    />
  );
}

export default TransactionRegistration;