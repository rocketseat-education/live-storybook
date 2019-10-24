import styled, { css } from 'styled-components';
import { darken, lighten, readableColor } from 'polished';

export const Container = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 52px;
  min-height: 52px;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  padding: ${p => (p.large ? '1.6rem 6rem' : '1.6rem')};
  transition: 180ms ease-in-out;

  ${({ secondary }) =>
    !secondary
      ? css`
          border: 0;
          color: ${p => readableColor(p.color)};
          background-color: ${p => p.color};

          :hover {
            transform: scale(1.01);
            background-color: ${p => lighten(0.025, p.color)};
          }

          :active {
            transform: scale(0.99);
            background-color: ${p => darken(0.025, p.color)};
          }
        `
      : css`
          border: ${p => `2px solid ${p.color}`};
          color: ${p => readableColor(p.color)};

          :hover {
            background-color: ${p => p.color};
          }

          :active {
            transform: scale(0.99);
            background-color: ${p => darken(0.025, p.color)};
          }
        `}

  > span + svg {
    margin-right: 0.8rem;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
