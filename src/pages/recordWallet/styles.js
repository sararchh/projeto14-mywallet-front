import styled from 'styled-components';

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
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--white);
  }
`;

export const CardInfo = styled.div`
  height: 446px;
  width: 326px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: var(--white);
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;

export const CardTextNotRegister = styled.div`
  height: 46px;
  width: 180px;
`;

export const Button = styled.button`
  height: 114px;
  width: 155px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 30px;
  padding: 10px;

  border-radius: 5px;
  background: var(--purple);

  p {
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: var(--white);
    text-align: left;
  }

  svg {
    height: 25px;
    width: 25px;

    color: var(--white);
  }
`;

export const ContentButton = styled.div`
  display: flex;

  .buttonMargin {
    margin-right: 10px;
  }
`;