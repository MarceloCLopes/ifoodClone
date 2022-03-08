import React from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

export function RestaurantItem({
  image,
  name,
  key,
  note,
  category,
  distance,
  valueShipping,
  timeDelivery,
}) {
  return (
    <S.Container key={key}>
      <S.Image
        source={{
          uri: image.trim(),
          width: 50,
          height: 50,
          resizeMode: "cover",
        }}
      />
      <S.Info>
        <Text>{name}</Text>
        <Text>
          <AntDesign name="star" size={12} color="#F9A825" /> {note} -{" "}
          {category} - {distance}
        </Text>
        <Text>
          {timeDelivery} * R$ {valueShipping}
        </Text>
        <Text></Text>
      </S.Info>
    </S.Container>
  );
}
