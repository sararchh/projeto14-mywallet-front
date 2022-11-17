import styled from "styled-components";

export const Button = styled.button`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    border-radius: 5px;
    background: var(--purple);

    color: var(--white);
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.43rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;