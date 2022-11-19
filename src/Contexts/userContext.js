import React, { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [dataTransaction, setDataTransaction] = useState([]);

  const handleSignUp = async (values) => {
    const obj = {
      name: values.name,
      email: values.email,
      password: values.password
    }

    try {
      const { data } = await api.post('/sign-up', obj);
      toast.success(data.message);
      navigate('/');

    } catch (error) {
      toast.error('Erro ao criar conta');
    }

  }

  const handleSignIn = async (values) => {
    const obj = {
      email: values.email,
      password: values.password
    }

    try {
      const { data } = await api.post('/sign-in', obj);
      toast.success(data.message);

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      navigate('/my-wallet');
    } catch (error) {
      toast.error('Erro ao logar, verifique!');
    }
  }

  return (
    <UserContext.Provider
      value={{
        handleSignUp,
        handleSignIn, 
        editMode,
        setEditMode,
        setDataTransaction,
        dataTransaction
      }}>
      {children}
    </UserContext.Provider>
  );
}