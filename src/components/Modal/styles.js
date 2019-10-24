import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${p => (p.open === 1 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
  animation: fadeIn 380ms ease-in-out 1;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }

    to {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  > div {
    max-width: 508px;
    min-height: 220px;
    margin: 3.2rem;
    background-color: #1c1b22;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    cursor: default;
    animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

    @keyframes slideIn {
      from {
        transform: translateY(-120px);
        opacity: 0;
      }

      20% {
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    header {
      padding: 4.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        font-size: 2.4rem;
        text-align: center;
        white-space: pre-wrap;
        margin-bottom: 2.4rem;
        color: ${p => (p.success ? '#04D361' : '#fff')};

        :nth-child(2) {
          margin-top: 2.4rem;
        }
      }
    }

    p {
      margin: 1.6rem;
      margin-bottom: 0;
      text-align: center;
      line-height: 1.5;
    }

    p,
    form {
      width: 100%;
    }

    > button:last-child {
      background: none;
      position: absolute;
      top: 0;
      right: 0;
      transition: 180ms ease-in-out;

      svg {
        fill: #999;
      }

      :hover {
        svg {
          fill: #fff;
        }
      }
    }

    > section {
      margin: -2.4rem 0;
      padding: 2.4rem;
      text-align: center;
      color: #7159c1;
      background-color: ${darken(0.02, '#1c1b22')};
    }

    > form {
      padding: 3.2rem;

      > label {
        input {
          text-align: center;
          padding: 0 1.6rem;
        }
      }
    }

    > footer {
      padding: 1.6rem 3.2rem;
      min-height: 6.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${lighten(0.05, '#1c1b22')};

      p {
        margin: 0;
      }

      ${({ footerButtons }) =>
        footerButtons &&
        css`
          > button {
            min-width: 13.4rem;
            margin-top: -6.4rem;

            ~ button {
              margin-left: 2.4rem;
            }
          }
        `}
    }

    > button:last-of-type {
      padding: 1.6rem;
    }
  }
`;
