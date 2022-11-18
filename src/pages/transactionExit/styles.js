import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;

  h2 {
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color: var(--white);
    font-family: 'Raleway', sans-serif;
    text-transform: capitalize;
  }
  `;

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`;