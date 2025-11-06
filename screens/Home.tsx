import { SIZES } from "@/constants";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export type ListType = {
  image: any;
  title: string;
  count: number;
  text: string;
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
    <View style={{ paddingTop: 300 }}>
      <View
        style={{ marginTop: SIZES.width > 500 ? 52.63 : 30, marginBottom: 50 }}
      >
        <Image
          source={
            SIZES.width > 500
              ? require("../assets/images/text1-lg.png")
              : require("../assets/images/text1-sm.png")
          }
          height={SIZES.width > 500 ? 60 : 24}
        />
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

function ListComponent({ image, title, count }: ListType) {
  return (
    <ImageBackground source={image} height={290.71} width={435.33}>
      <View>
        <Text>{title}</Text>
        <Text>{title}</Text>
      </View>
    </ImageBackground>
  );
}

export default function Home() {
  return (
    <FlatList
      ListHeaderComponent={HeaderComponent}
      data={list}
      keyExtractor={({ title }) => title}
      renderItem={({ item }) => <ListComponent {...item} />}
      style={{
        paddingTop: 400,
      }}
    />
  );
}

const styles = StyleSheet.create({});
