import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  margin-bottom: 2rem;

  > span:first-child {
    color: #e0042d;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3;
    width: 100%;
    margin: 0.6rem 0 0.4rem;
    border-radius: 4px;
    transform: none;
    animation: fadeIn 350ms ease-in-out 1;

    @keyframes fadeIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    + input {
      border-color: #e0042d;

      + svg {
        fill: #e0042d;
      }
    }
  }

  > input {
    border: 2px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 4.4rem;
    color: #e6e6e6;
    background: #373546;
    padding: 1.6rem;
    padding-left: ${p => (p.icon ? '4rem' : '1.6rem')};
    transition: 180ms ease-in-out;

    :focus {
      box-shadow: none;
      border-color: rgba(255, 255, 255, 0.1);
    }

    ~ svg {
      fill: #999;
      position: absolute;
      left: 1.6rem;
      top: 4.5rem;
      transition: default;
    }

    + span {
      font-weight: 700;
      margin-bottom: 0.8rem;
      text-transform: capitalize;
    }
  }

  > button {
    position: absolute;
    padding: 0;
    right: 1.6rem;
    top: 4.5rem;
    z-index: 2;

    :hover {
      transform: scale(1.1);
    }
  }
`;
