import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background-color: #fff;
  min-width: 90%;
  margin-bottom: 20px;
  padding: 5px 10px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Image = styled.Image`
  border-radius: 25px;
`;
