import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Saira Stencil One', 'cursive';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    color: var(--white);
`;

export const TextButton = styled.button`
  font-weight: 700;
  color: var(--white);
  font-size: 1rem;
  line-height: 1.12rem;
  cursor: pointer;
  margin-top: 2rem;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`;