import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  padding: 4px 23px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--background);

  .styledDiv {
    justify-content: center;
  }
`;