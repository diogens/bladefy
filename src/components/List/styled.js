import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)};
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 30px;
      border: 0;
      background: tomato;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 30px;
  }
`;
