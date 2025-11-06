import GradientText from "@/components/HeaderText";
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

const list: ListType[] = [
  {
    image: require("../assets/images/nature.png"),
    title: "Nature",
    text: "Mountains, Forest and Landscapes",
    count: 3,
  },
  {
    image: require("../assets/images/abstract.png"),
    title: "abstract",
    text: "Modern Geomentric and artistic designs",
    count: 4,
  },
  {
    image: require("../assets/images/urban.png"),
    title: "urban",
    text: "Cities, architecture and street",
    count: 6,
  },
  {
    image: require("../assets/images/space.png"),
    title: "space",
    text: "Cosmos, planets, and galaxies",
    count: 3,
  },
  {
    image: require("../assets/images/minimalist.png"),
    title: "minimalist",
    text: "Clean, simple, and elegant",
    count: 6,
  },
  {
    image: require("../assets/images/animals.png"),
    title: "animals",
    text: "photography",
    count: 4,
  },
];

function HeaderComponent() {
  return (
    <View>
      <View
        style={{ marginTop: SIZES.width > 500 ? 52.63 : 30, marginBottom: 50 }}
      >
        {/* <Image
          source={
            SIZES.width > 500
              ? require("../assets/images/text1-lg.png")
              : require("../assets/images/text1-sm.png")
          }
          height={SIZES.width > 500 ? 60 : 24}
          width={SIZES.width < 500 ? SIZES.width - 40 : undefined}
        /> */}
        <GradientText text="Discover Beautiful Wallpapers" />
        <Text
          style={{
            fontSize: SIZES.width > 500 ? 24 : 16,
            fontFamily: "regular",
            color: "#575757",
          }}
        >
          Discover curated collections of stunning wallpapers. Browse by
          category, preview in full-screen, and set your favorites.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.width > 500 ? 32 : 20,
            color: "#000000",
            fontFamily: "medium",
          }}
        >
          Categories
        </Text>
        <Text
          style={{
            fontSize: SIZES.width > 500 ? 24 : 16,
            color: "#808080",
            fontFamily: "medium",
          }}
        >
          See all
        </Text>
      </View>
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
