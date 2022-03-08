import styled, { css } from "styled-components/native";

export const Button = styled.TouchableOpacity`
  border: 1px solid #ff001a;
  border-radius: 5px;
  padding: 10px 40px;
  max-width: 190px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme == "primary" &&
    css`
      background-color: #ff001a;
    `}
`;
export const Text = styled.Text`
  color: #ff001a;
  text-transform: uppercase;

  ${({ theme }) =>
    theme == "primary" &&
    css`
      color: #ffffff;
    `}
`;
