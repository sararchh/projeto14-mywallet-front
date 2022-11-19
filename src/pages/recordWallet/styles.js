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
    text-transform: capitalize;
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--white);
  }
`;

export const CardInfo = styled.div`
  max-height: 446px;
  height: 446px;
  width: 326px;
  padding: 10px 0;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 5px;
  background-color: var(--white);
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px 0;

  svg {
    color: var(--gray);
    width: 20px;
    height: 18px;
  }

  span {
    color: var(--gray);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin: 0 10px 0 0 ;
  }

  .divStyled {
    display: flex;
  }

`;

export const TextValues = styled.p`
    color: ${({ color }) => color};
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin: 0 10px 0 0 ;
`;

export const TextTitleTransaction = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
`;

export const CardSum = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;

  .textBalance {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }
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