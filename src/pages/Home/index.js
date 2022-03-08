import { StatusBar } from "expo-status-bar";
import * as S from "./styles";

import bannerImg from "../../assets/banner.png";
import { Button } from "../../components/Button";

export function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <S.SafeAreaView>
        <S.View>
          <S.Text>Pedir comida nunca foi tão fácil</S.Text>
          <S.Image source={bannerImg} />
          <S.Text>Permitir localização</S.Text>
          <S.Text>
            Para descobrir restaurantes que entreguem em sua região
          </S.Text>
        </S.View>
        <S.ButtonContainer>
          <Button text="Pular" onPress={() => navigation.navigate("Main")} />
          <Button theme="primary" text="Entrar" />
        </S.ButtonContainer>
      </S.SafeAreaView>
    </>
  );
}
