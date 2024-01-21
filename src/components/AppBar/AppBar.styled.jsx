import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const LanguageContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const LanguageSwitch = styled.button`
  background: none;
  border: none;
  color: ${props =>
    props.active ? props.theme.colors.dark : props.theme.colors.lightGray};

  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
`;
