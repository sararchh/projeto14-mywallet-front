import styled from "styled-components";

export const Input = styled.input`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: 5px;
  padding: 7px;
  margin: 7px 0;
  background: var(--white);

  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.43px;

  color: var(--black);
`;

export const SpanStyled = styled.span`
  display: flex;
`;