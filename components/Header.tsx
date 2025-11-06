import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, usePathname } from "expo-router";

import { SIZES } from "../constants";

const MENUITEMS = [
  { name: "Home", icon: require("../assets/images/home.png"), to: "/" },
  {
    name: "Browse",
    icon: require("../assets/images/browse.png"),
    to: "/browse",
  },
  {
    name: "Favourites",
    icon: require("../assets/images/favourites.png"),
    to: "/favourites",
  },
  {
    name: "Settings",
    icon: require("../assets/images/settings.png"),
    to: "/settings",
  },
];

export default function Header() {
  const navigation = useNavigation();
  const pathname = usePathname();

  return (
    <View
      style={{
        height: 98,
        width: SIZES.width,
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 12,
        paddingHorizontal: SIZES.width < 500 ? 20 : 47,
        paddingTop: Platform.OS !== "web" ? 20 : 0,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 8,
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          width={16}
          height={16}
        />

        <Text
          style={{
            color: "#000000",
            fontFamily: "regular",
            fontSize: 14,
          }}
        >
          Wallpaper Studio
        </Text>
      </View>

      {Platform.OS === "android" ? (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            height={24}
            width={24}
            source={require("../assets/images/hambugger.png")}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {MENUITEMS.map((item) => (
            <Link
              key={item.name}
              style={{
                height: 44,
                paddingHorizontal: 16,
                flexDirection: "row",
                columnGap: 10,
                alignItems: "center",
                borderRadius: 12,
                display: "flex",
                backgroundColor:
                  pathname === item.to ? "#f5f5f5" : "transparent",
                borderColor:
                  pathname === item.to ? "rgba(0,0,0,0.1)" : "transparent",
                borderWidth: 1,
              }}
              href={item.to}
            >
              <Image source={item.icon} width={24} height={24} />
              <Text
                style={{
                  opacity: 20,
                  fontFamily: "regular",
                  color: pathname === item.to ? "#000000" : "rgba(0,0,0,0.4)",
                }}
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
