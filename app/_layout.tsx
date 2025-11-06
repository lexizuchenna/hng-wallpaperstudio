import Header from "@/components/Header";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
    bold: Poppins_700Bold,
    clash: require("../assets/fonts/ClashDisplay-Medium.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: () => <Header />, // use your custom header
          drawerPosition: "right",
          drawerStyle: {
            backgroundColor: "#111827",
            width: 240,
          },
          drawerLabelStyle: {
            color: "#fff",
            fontSize: 16,
          },
          drawerActiveTintColor: "#22d3ee",
          drawerInactiveTintColor: "#9ca3af",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ headerShown: true, title: "Home" }}
        />
        <Drawer.Screen
          name="browse"
          options={{ headerShown: true, title: "Browse" }}
        />
        <Drawer.Screen
          name="favourites"
          options={{ headerShown: true, title: "Favourites" }}
        />
        <Drawer.Screen
          name="settings"
          options={{ headerShown: true, title: "Settings" }}
        />
        <Drawer.Screen
          name="wallpaper"
          options={{ drawerItemStyle: { display: "none" }, headerShown: true }}
        />
        <Drawer.Screen
          name="categories"
          options={{ drawerItemStyle: { display: "none" }, headerShown: true }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
