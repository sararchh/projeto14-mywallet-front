import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonStyled from '../../components/atoms/buttonStyled';
import InputStyled from '../../components/atoms/inputStyled';
import MainTemplate from '../../components/mainTemplate';

import { useForm } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos

import { Title, TextButton, Form, Content } from './styles';
import { UserContext } from '../../Contexts/userContext';

function SignIn() {
  const { handleSignIn } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Digite e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Senha obrigatório')
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleGetValuesSignIn = () => {
    if (Object.keys(errors).length > 0) return;
    const values = getValues();

    handleSignIn(values)
  }

  return (
    <MainTemplate content={
      <Content>
        <Title>MyWallet</Title>

        <Form onSubmit={handleSubmit(handleGetValuesSignIn)}>
          <InputStyled
            name='email'
            placeholder='E-mail'
            onChange={value => setValue('email', value)}
            messageError={errors?.email?.message}
          />

          <InputStyled
            name='password'
            type='password'
            placeholder='Senha'
            onChange={value => setValue('password', value)}
            messageError={errors?.password?.message}
          />

          <ButtonStyled
            children='Entrar'
          />
        </Form>

        <Link to='/signUp'>
          <TextButton>Primeira vez? Cadastre-se!</TextButton>
        </Link>

      </Content>
    } />

  )
}

export default SignIn;