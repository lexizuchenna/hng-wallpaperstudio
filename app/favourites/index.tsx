import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "@/constants";
import GradientText from "@/components/HeaderText";

export default function index() {
  return (
    <View style={{ paddingHorizontal: SIZES.width > 500 ? 40 : 20 }}>
      <View
        style={{ marginTop: SIZES.width > 500 ? 52.63 : 30, marginBottom: 50 }}
      >
        <GradientText text="Saved Wallpapers" />
        <Text
          style={{
            fontSize: SIZES.width > 500 ? 24 : 16,
            fontFamily: "regular",
            color: "#575757",
          }}
        >
          Your saved wallpapers collection
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          width={197.57}
          height={185.29}
          source={require("../../assets/images/no-card.png")}
        />
        <Text
          style={{
            fontSize: 24,
            fontFamily: "medium",
            color: "#575757",
            marginTop: 50,
          }}
        >
          No Saved Wallpapers
        </Text>
        <Text style={{ fontSize: 14, fontFamily: "medium", color: "#575757" }}>
          Start saving your favourite wallpapers to see them here
        </Text>
        <View
          style={{
            paddingVertical: 13,
            paddingHorizontal: 22,
            borderRadius: 21,
            flexDirection: "row",
            columnGap: 10,
            justifyContent: "center",
            backgroundColor: "#fbb03b",
          }}
        >
          <Text
            style={{ fontSize: 14, fontFamily: "medium", color: "#ffffff" }}
          >
            Set to Wallpaper
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
