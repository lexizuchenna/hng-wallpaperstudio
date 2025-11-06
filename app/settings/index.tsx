import GradientText from "@/components/HeaderText";
import Settings from "@/components/Settings";
import { SIZES } from "@/constants";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

export type ListType = {
  image: any;
  title: string;
  count?: number;
  text: string;
  style?: ViewStyle;
};

const list: ListType[] = [];

function HeaderComponent() {
  return (
    <View>
      <View
        style={{ marginTop: SIZES.width > 500 ? 52.63 : 30, marginBottom: 50 }}
      >
        <GradientText text="Settings" />
        <Text
          style={{
            fontSize: SIZES.width > 500 ? 24 : 16,
            fontFamily: "regular",
            color: "#575757",
          }}
        >
          Customize your wallpaper studio experience
        </Text>
      </View>

      <Settings />
    </View>
  );
}

function ListComponent({ image, title, count, text, style }: ListType) {
  return (
    <ImageBackground
      style={{
        height: 290.71,
        width: SIZES.width > 500 ? 415.33 : "100%",
        borderRadius: 26,
        marginBottom: 23,
        display: "flex",
        justifyContent: "flex-end",
        ...style,
        marginHorizontal: SIZES.width > 500 ? 10 : 0,
      }}
      imageStyle={{ borderRadius: 26 }}
      source={image}
      height={290.71}
      width={435.33}
    >
      <View style={{ marginLeft: 25, marginBottom: 18.71 }}>
        <Text
          style={{
            fontSize: 24,
            color: "#ffffff",
            fontFamily: "bold",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 16, color: "#ffffff", fontFamily: "regular" }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#ffffff",
            fontFamily: "regular",
            borderRadius: 30,
            backgroundColor: "rgba(255,255,255,0.2)",
            paddingHorizontal: 10,
            paddingVertical: 8,
            width: "auto",
            maxWidth: 120,
          }}
        >
          {count} wallpapers
        </Text>
      </View>
    </ImageBackground>
  );
}

export default function Home() {
  const numColumns = SIZES.width > 500 ? 3 : 1;
  return (
    <FlatList
      ListHeaderComponent={HeaderComponent}
      data={list}
      keyExtractor={({ title }) => title}
      renderItem={({ item }) => <ListComponent {...item} />}
      numColumns={numColumns}
      key={numColumns}
      style={{
        paddingHorizontal: SIZES.width > 500 ? 40 : 20,
        columnGap: 20,
        rowGap: 23,
        display: "flex",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
