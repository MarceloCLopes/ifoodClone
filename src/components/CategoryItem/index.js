import React from "react";

import * as S from "./styles";

export function CategoryItem({ image, text, key }) {
  return (
    <S.Container key={key}>
      <S.Image
        source={{
          uri: image.trim(),
        }}
      />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
