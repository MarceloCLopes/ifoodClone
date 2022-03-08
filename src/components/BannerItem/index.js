import React from "react";

import { Dimensions } from "react-native";

import * as S from "./styles";

export function BannerItem({ image, key }) {
  return (
    <S.Container key={key}>
      <S.Image
        source={{
          uri: image.trim(),
          width: Dimensions.get("window").width - 50,
          height: 180,
          resizeMode: "contain",
        }}
      />
    </S.Container>
  );
}
