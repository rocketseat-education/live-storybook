import styled from 'styled-components';

export const LeftContainer = styled.section`
  max-width: 500px;
  width: 100%;
  height: 100%;
  padding: 4rem 3.6rem;
  background: #7159c1;
  background: linear-gradient(
    -45deg,
    rgb(81, 65, 135) 0%,
    rgba(113, 89, 193, 1) 100%
  );
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  header {
    align-self: flex-start;

    img {
      margin-bottom: 0.8rem;
    }

    h2 {
      font-size: 2.8rem;
      max-width: 92%;
      margin-bottom: 1.2rem;
      color: #fff;
    }
  }

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      max-width: 320px;
      margin-bottom: 4rem;
    }

    p {
      font-size: 2rem;
    }

    small {
      align-self: flex-start;
      margin-top: auto;
    }
  }
`;

export const RightContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 4rem 3.6rem;
  display: flex;
  flex-direction: column;

  background: url('https://skylab.rocketseat.com.br/static/7c60c57e4fd20119d82b5970028b2d1b.svg')
      center bottom repeat-x,
    url('https://skylab.rocketseat.com.br/static/d963b8944752859b3c6ccb0bda539c46.svg')
      repeat-x,
    rgb(11, 10, 13);

  > header {
    text-align: right;
    margin-bottom: 8rem;
  }

  > section {
    max-width: 480px;
    margin: auto;

    h3 {
      margin-bottom: 2rem;
    }

    > section:first-of-type {
      display: flex;
      justify-content: space-between;

      button {
        margin: 0 0.8rem;

        :first-child {
          flex: 1;
          margin-left: 0;
        }

        :last-child {
          margin-right: 0;
        }
      }

      + div {
        position: relative;
        margin: 4rem 0;

        color: #999;

        hr {
          border-color: #999;
        }

        span {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #0b0a0d;
          padding: 0 1.6rem;
        }
      }
    }

    form {
      div {
        display: flex;
        justify-content: space-between;

        label {
          :first-of-type {
            margin-right: 2rem;
            flex: 1;
          }

          :last-of-type {
            width: 40%;
          }
        }
      }
    }

    > button {
      margin: 4rem 0 0 auto;
    }
  }
`;
