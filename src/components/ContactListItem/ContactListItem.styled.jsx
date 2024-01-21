import styled, { keyframes } from 'styled-components';

const iconAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.1); }
100% { transform: scale(1); }
`;

export const ListItem = styled.li`
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid #ccc;
  margin-bottom: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  font-weight: bold;
  margin-left: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.pink};
  box-shadow: ${props => props.theme.shadows.red};
  background: ${props => props.theme.background.redBtn};
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.background.redHover};
    animation: ${iconAnimation} 0.8s ease-in-out infinite;
  }
`;

export const EditButton = styled.button`
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.orange};
  box-shadow: ${props => props.theme.shadows.orange};
  background: ${props => props.theme.background.orangeBtn};
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.background.orangeHover};
    animation: ${iconAnimation} 0.8s ease-in-out infinite;
  }
`;
