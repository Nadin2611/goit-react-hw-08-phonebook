import styled from 'styled-components';

export const LoginButton = styled.button`
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.green};
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows.green};
  background: ${props => props.theme.background.greenBtn};

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.background.greenHover};
  }
`;
