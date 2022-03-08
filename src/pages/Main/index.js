import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Principal } from "../Principal";
import { Perfil } from "../Perfil";

const { Navigator, Screen } = createBottomTabNavigator();

export function Main() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Principal") {
            iconName = "home";
          } else if (route.name === "Perfil") {
            iconName = "user";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Screen name="Principal" component={Principal} />
      <Screen name="Perfil" component={Perfil} />
    </Navigator>
  );
}
