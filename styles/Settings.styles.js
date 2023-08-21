import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.blackBlue};
  .modalContent {
    background: #ffffff;
    border-radius: 1.75rem;
    width: 70%;
    max-width: 500px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.colors.greyDark};
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.greyBlue};
    padding: 2rem;

    .icon-close {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
    }
  }
  .main {
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .settings,
    .font,
    .color {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding-block: 1.5rem;
      width: 100%;
    }
    .settings,
    .font {
      border-bottom: 1px solid grey-blue;
    }
    .settings-title {
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 0.85rem;
      line-height: 100%;
    }
    .title-w-full {
      width: 100%;
      margin-bottom: 1.5rem;
    }
    .fieldset {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
  }
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey};
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.greyLight};
  padding: 12px 10px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
`;
export const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const CircleButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  &.selected {
    background-color: ${(props) => props.theme.colors.blackBlue};
    color: #ffffff;
  }
  background-color: ${(props) =>
    props.$color ? props.$color : props.theme.colors.greyLight};
  font-family: ${(props) => props.$font};
`;

export const SubmitBtn = styled.button`
  background: ${(props) => props.theme.colors.tomato};
  color: ${(props) => props.theme.colors.greyLight};
  height: 50px;
  padding-inline: 42px;
  border: none;
  cursor: pointer;
  border-radius: 1.75rem;
  font-weight: 500;
  width: fit-content;
  margin-bottom: -25px;
  font-size: 0.85rem;
`;
