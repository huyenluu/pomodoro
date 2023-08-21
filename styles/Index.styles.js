import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: ${(props) => props.font};
  background-color: ${(props) => props.theme.colors.naviBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 5rem 1.5rem;
  .title {
    color: ${(props) => props.theme.colors.greyBlue};
    margin-bottom: 4rem;
  }
  .icon {
    color: ${(props) => props.theme.colors.greyBlue};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  .timer-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .timer-svg {
    max-width: 500px;
  }
`;

// Button Group

export const TabBar = styled.div`
  display: flex;
  border-radius: 1.75rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.greyDark};
  width: 100%;
  max-width: 500px;
  button {
    flex-grow: 1;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s;
    border-radius: 1.75rem;
    color: ${(props) => props.theme.colors.grey};
    font-weight: 600;
    font-size: 0.75rem;
  }
`;

export const CircularContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .time-container {
    position: relative;
  }
  .time-display {
    color: ${(props) => props.theme.colors.greyBlue};
    font-size: 5em;
  }
  .timer-finish {
    color: ${(props) => props.theme.colors.greyBlue};
    font-size: 2em;
  }
`;

export const ActionButton = styled.button`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: absolute;
  bottom: -2.5rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
