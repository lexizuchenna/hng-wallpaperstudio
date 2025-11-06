import GradientText from "@/components/HeaderText";
import { SIZES } from "@/constants";
import { useNavigation } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ListType } from "..";
import Category from "@/components/Category";

const list: ListType[] = [
  {
    image: require("../../assets/images/nature (1).png"),
    title: "Nature 1",
    text: "Nature",
  },
  {
    image: require("../../assets/images/nature (2).png"),
    title: "Nature 2",
    text: "Nature",
  },
  {
    image: require("../../assets/images/nature (3).png"),
    title: "Nature 3",
    text: "Nature",
  },
  {
    image: require("../../assets/images/nature (4).png"),
    title: "Nature 4",
    text: "Nature",
  },
  {
    image: require("../../assets/images/nature (5).png"),
    title: "Nature 5",
    text: "Nature",
  },
  {
    image: require("../../assets/images/nature (5).png"),
    title: "Nature 5",
    text: "Nature",
  },
];

function HeaderComponent() {
  const navigation = useNavigation();

  const numColumns = SIZES.width > 700 ? 3 : 2;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          width: SIZES.width > 600 ? 611 : "100%",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 8,
            marginTop: 37,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            height={15}
            width={15}
            source={require("../../assets/images/back.png")}
          />
          <Text
            style={{ fontFamily: "regular", fontSize: 20, color: "#979797" }}
          >
            Back to Categories
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: SIZES.width > 500 ? 52.63 : 30,
            marginBottom: 24,
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 48,
                fontFamily: "regular",
                color: "#575757",
              }}
            >
              Nature
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
        <FlatList
          data={list}
          keyExtractor={({ title }) => title}
          renderItem={({ item }) => <ListComponent {...item} />}
          numColumns={numColumns}
          key={numColumns}
          style={{
            columnGap: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {SIZES.width > 600 && <Category />}
    </View>
  );
}

function ListComponent({ image, title, style }: ListType) {
  return (
    <ImageBackground
      style={{
        height: 290.71,
        width: 611 / 3,
        borderRadius: 26,
        marginBottom: 23,
        display: "flex",
        justifyContent: "flex-end",
        ...style,
        marginRight: 7,
        position: "relative",
      }}
      imageStyle={{ borderRadius: 26 }}
      source={image}
      height={290.71}
      width={SIZES.width > 500 ? 190 : 100}
    >
      <Image
        width={40}
        height={40}
        source={
          title === "Nature 2"
            ? require("../../assets/images/star1.png")
            : require("../../assets/images/star2.png")
        }
        style={{ position: "absolute", top: 12, right: 13.8 }}
      />
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
          Nature
        </Text>
      </View>
    </ImageBackground>
  );
}

export default function Categories() {
  const numColumns = SIZES.width > 500 ? 3 : 1;
  return (
    <>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={[]}
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => <View />}
        numColumns={numColumns}
        key={numColumns}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({});
