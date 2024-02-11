import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

export const Text = styled.div`
  font-weight: 400;
  max-width: 700px;
  font-size: 32px;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  color: blue;

  cursor: pointer;

  &:hover {
    color: darkblue;
  }
`;
