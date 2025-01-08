import styled from "styled-components";
import { DEVICE } from '../../styles/device'

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 10vh;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  ${DEVICE.lg} {
    padding: 1em;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1em;
  }

  > .logo {
    width: min(90%, 31.6rem);
    height: auto;
    margin: 7.3rem 0;

    display: flex;
    flex-flow: row;
    justify-content: left;
    align-items: center;
    gap: 1.1rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: clamp(1.8rem, 10vw, 3.2rem);
    }

    img {
      height: 4.3rem;
      width: 4.3rem;
    }

    ${DEVICE.lg} {
      width: auto;
      gap: 1.9rem;

      h1 {
        font-size: clamp(3.2rem, 4vw, 4.2rem);
      }

      img {
        height: 4.9rem;
        width: 4.9rem;
      }
    }
  }

  > .form-wrapper {
    display: flex;
    flex-direction: column;
    width: min(90%, 31.6rem);

    h2,
    div.input,
    button {
      margin-bottom: 3.2rem;
      width: 100%;
      height: 4.8rem;
      font-size: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.RED_700};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.COLORS.RED_900};
        transform: scale(1.02);
      }

      &:active:not(:disabled) {
        transform: scale(0.98);
      }

      &:disabled {
        background-color: ${({ theme }) => theme.COLORS.DARK_500};
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    label {
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
    }

    h2 {
      text-align: center;
      font-weight: 500;
      font-size: 3.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 400;
      font-size: 1.6rem;
    }

    p {
      text-align: center;

      a {
        text-decoration: none;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    ${DEVICE.lg} {
      min-width: 47.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: 1.6rem;
      padding: 6.4rem;
    }
  }
`;
