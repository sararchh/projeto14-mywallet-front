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

function SignUp() {
  const { handleSignUp } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Digite e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Senha obrigatório'),
    confirmPassword: Yup.string().min(6, 'Confirme a senha').required('Confirme a senha'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleGetValuesSignUp = () => {
    if (Object.keys(errors).length > 0) return;

    const values = getValues();

    handleSignUp(values);
  }

  return (
    <MainTemplate content={
      <Content>
        <Title>MyWallet</Title>

        <Form onSubmit={handleSubmit(handleGetValuesSignUp)}>
          <InputStyled
            name='name'
            placeholder='Nome'
            onChange={value => setValue('name', value)}
            messageError={errors?.name?.message}
          />

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

          <InputStyled
            name='confirmPassword'
            type='password'
            placeholder='Confirme a senha'
            onChange={value => setValue('confirmPassword', value)}
            messageError={errors?.confirmPassword?.message}
          />

          <ButtonStyled
            children='Cadastrar'
          />
        </Form>

        <Link to='/'>
          <TextButton>Já tem uma conta? Entre agora!</TextButton>
        </Link>

      </Content>
    } />
  );
}

export default SignUp;