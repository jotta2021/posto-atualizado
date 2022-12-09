import styled from 'styled-components'
export const Container = styled.div`
  header {
    width: 100vw;
    height: 4rem;
    border-bottom: 1px solid #828282;
  }
  .container-info {
    display: flex;
  }
  .later button {
    display: flex;
    flex-direction: colum;
    border: none;
    width: 10rem;
    height: 2rem;
    margin-top: 1.56rem;
    margin-left: 1.2rem;
    font-size: 0.9rem;
  }
  .later {
    margin-top: 2.3rem;
    border-right: 1px solid #828282;
    width: 13.37rem;
    height: 100vh;
  }
  .later .relater {
    align-items: center;
    justify-content: left;
  }
  .content {
    width: 76.62rem;
    height: 100vh;
    margin-top: 2.3rem;
    margin-left: 2rem;
  }
  .content .title {
    color: hsla(191, 100%, 42%, 1);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
  .content-table {
    margin-top: 3rem;
    width: 72.62rem;
    height: 62rem;
    border: 1px solid #e0e7ed;
    border-radius: 1rem;
  }
`
