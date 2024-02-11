import styled from 'styled-components';

export const Header = styled.header`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const LanguageContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const LanguageSwitch = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
`;
