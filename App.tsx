import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import { COLORS, SIZES } from "./constants";
import Browse from "./screens/Browse";
import Favourites from "./screens/Favourites";
import HomeScreen from "./screens/Home";
import Settings from "./screens/Settings";
import Wallpaper from "./screens/Wallpaper";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer navigation for mobile only
function MobileDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right", // slide in from right
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="browse"
        component={Browse}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="favourites"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="wallpaper"
        component={Wallpaper}
        options={{ drawerItemStyle: { display: "none" } }}
      />
    </Drawer.Navigator>
  );
}

// Regular stack navigation for web
function WebStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="browse"
        component={Browse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favourites"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="wallpaper"
        component={Wallpaper}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
    bold: Poppins_700Bold,
    clash: require("./assets/fonts/ClashDisplay-Medium.otf"),
  });

  const prepareApp = useCallback(async () => {
    try {
      if (!fontsLoaded) return;

      await SplashScreen.hideAsync();
    } catch (err) {
      console.error("App init failed: ", err);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    prepareApp();
  }, [prepareApp]);
  return (
    <NavigationContainer>
      <Header />

      <MobileDrawer />
    </NavigationContainer>
  );
}
