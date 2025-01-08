import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  border-radius: 5px;
  justify-content: center;
  padding: 12px 32px;
  gap: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

`;
