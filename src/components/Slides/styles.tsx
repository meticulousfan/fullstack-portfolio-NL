import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;
  text-align: center;
  h2 {
    text-align: center;
    font-size: 4rem;
  }
  p {
    color: var(--green);
    font-weight: 500;
  }
  .slide-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .slide-container {
    display: block;
    margin-top: 10rem;
    width: 80%;
  }
  button {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
