import { StatusBar } from "expo-status-bar";
import * as S from "./styles";

export function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <S.SafeAreaView>
        <S.Text>Perfil</S.Text>
      </S.SafeAreaView>
    </>
  );
}
