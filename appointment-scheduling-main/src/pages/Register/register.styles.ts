import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .form {
    margin-top: 10rem;
    margin-left: 1.76rem;
    flex-direction: .collum;
  }

  .form h1 {
    color: hsla(191, 100%, 42%, 1);
    font-size: 2rem;
  }
  .form p {
    margin-bottom: 1.87rem;
    font-family: 'Grotesk', sans-serif;
  }
  .input-box input {
    width: 26.8rem;
    height: 2rem;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
  }
  .input-box {
    border-bottom: 1px solid hsla(0, 0%, 88%, 1);

    margin-bottom: 0.93rem;
  }

  .back img {
    width: 36rem;
    height: 100vh;
  }

  .button-cad button {
    margin-top: 1.87rem;
    background-color: hsla(191, 100%, 42%, 1);
    border: none;
    color: white;
    width: 26.87rem;
    height: 3.75rem;
    border-radius: 0.37rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .button-cad button:hover {
    font-size: 1.3rem;
  }
  footer {
    display: flex;
    margin-left: 7.18rem;
    margin-top: 3rem;
  }
`
