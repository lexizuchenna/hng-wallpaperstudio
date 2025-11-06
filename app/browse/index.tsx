import GradientText from "@/components/HeaderText";
import { SIZES } from "@/constants";
import { Link, useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ListType } from "..";

const list: ListType[] = [
  {
    image: require("../../assets/images/nature.png"),
    title: "Nature",
    text: "Mountains, Forest and Landscapes",
    count: 3,
  },
  {
    image: require("../../assets/images/abstract.png"),
    title: "abstract",
    text: "Modern Geomentric and artistic designs",
    count: 4,
  },
  {
    image: require("../../assets/images/urban.png"),
    title: "urban",
    text: "Cities, architecture and street",
    count: 6,
  },
  {
    image: require("../../assets/images/space.png"),
    title: "space",
    text: "Cosmos, planets, and galaxies",
    count: 3,
  },
  {
    image: require("../../assets/images/minimalist.png"),
    title: "minimalist",
    text: "Clean, simple, and elegant",
    count: 6,
  },
  {
    image: require("../../assets/images/animals.png"),
    title: "animals",
    text: "photography",
    count: 4,
  },
];

function HeaderComponent() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: SIZES.width > 500 ? 52.63 : 30,
          marginBottom: 50,
        }}
      >
        <View style={{}}>
          <GradientText text="Browse Categories" />
          <Text
            style={{
              fontSize: SIZES.width > 500 ? 24 : 16,
              fontFamily: "regular",
              color: "#575757",
            }}
          >
            Explore our curated collections of stunning wallpapers
          </Text>
        </View>
        {SIZES.width > 700 && (
          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <Image
              height={40}
              width={40}
              source={require("../../assets/images/grid.png")}
            />
            <Image
              height={40}
              width={40}
              source={require("../../assets/images/list.png")}
              style={{
                opacity: 0.5,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
}

function ListComponent({ image, title, count, text, style }: ListType) {
  const navigation = useNavigation();
  return (
    <Link
      //@ts-ignore
      href={"/categories"}
      style={{
        display: "flex",
        height: 290.71,
        width: SIZES.width > 500 ? 415.33 : "100%",
        marginBottom: 23,
        marginHorizontal: SIZES.width > 500 ? 10 : 0,
      }}
    >
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
          <Text
            style={{ fontSize: 16, color: "#ffffff", fontFamily: "regular" }}
          >
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
    </Link>
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
