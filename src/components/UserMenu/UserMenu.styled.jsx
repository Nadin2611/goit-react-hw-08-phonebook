import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.div`
  font-weight: 700;
`;

export const LoginOutButton = styled.button`
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid ${props => props.theme.colors.green};
  margin: 0 auto;

  &:hover {
  }
`;
