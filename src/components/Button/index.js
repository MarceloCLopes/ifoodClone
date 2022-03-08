import React from "react";

import * as S from "./styles";

export function Button({ theme, text, ...rest }) {
  return (
    <S.Button theme={theme || ""} {...rest}>
      <S.Text theme={theme || ""}>{text}</S.Text>
    </S.Button>
  );
}
