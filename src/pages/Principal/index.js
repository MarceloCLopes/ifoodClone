import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Alert, ActivityIndicator } from "react-native";
import * as S from "./styles";

import { RestaurantItem } from "../../components/RestaurantItem";
import { CategoryItem } from "../../components/CategoryItem";
import { BannerItem } from "../../components/BannerItem";

export function Principal() {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [type, setType] = useState("Entrega");

  useEffect(() => {
    async function searchData() {
      try {
        const response = await fetch(
          "http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db"
        );
        const data = await response.json();

        setLoaded(true);

        setBanners(data.banner_principal);
        setCategories(data.categorias);
        setRestaurants(data.restaurantes);
      } catch (error) {
        Alert.alert("Erro ao consultar " + error);
      }
    }

    searchData();
  }, []);

  return (
    <>
      <StatusBar style="theme-dark" />
      <S.SafeAreaView>
        {loaded ? (
          <S.ViewPrincipal showsVerticalScrollIndicator={false}>
            <S.SelectType>
              <S.ButtonTypeSelect onPress={() => setType("Entrega")}>
                <S.TextTypeSelect selected={type === "Entrega"}>
                  Entrega
                </S.TextTypeSelect>
              </S.ButtonTypeSelect>
              <S.ButtonTypeSelect onPress={() => setType("Entrega")}>
                <S.TextTypeSelect selected={type === "Entrega"}>
                  Retirada
                </S.TextTypeSelect>
              </S.ButtonTypeSelect>
            </S.SelectType>

            <S.CategoryView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  image={category.img_url}
                  text={category.nome}
                />
              ))}
            </S.CategoryView>
            <S.BannerView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {banners.map((banner) => (
                <BannerItem key={banner.id} image={banner.banner_img_url} />
              ))}
            </S.BannerView>
            <S.TitleRestaurants>Restaurantes</S.TitleRestaurants>
            <S.ViewRestaurants>
              {restaurants.map((restaurant) => (
                <>
                  <RestaurantItem
                    key={restaurant.id}
                    image={restaurant.url_img}
                    name={restaurant.nome}
                    note={restaurant.nota}
                    category={restaurant.categoria}
                    distance={restaurant.distancia}
                    valueShipping={restaurant.valor_frete}
                    timeDelivery={restaurant.tempo_entrega}
                  />
                </>
              ))}
            </S.ViewRestaurants>
          </S.ViewPrincipal>
        ) : (
          <S.ViewActivity>
            <ActivityIndicator color={"#ff001a"} size="large" />
          </S.ViewActivity>
        )}
      </S.SafeAreaView>
    </>
  );
}
