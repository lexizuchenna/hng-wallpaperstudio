import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants";

export default function Settings() {
  return (
    <View
      style={{
        minHeight: 628,
        backgroundColor: COLORS.primaryBg,
        borderRadius: 36,
        paddingHorizontal: 151,
        paddingVertical: 51.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 569,
        }}
      >
        <Text
          style={{
            fontFamily: "medium",
            fontSize: 24,
            marginBottom: 8,
          }}
        >
          Wallpaper Setup
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: 14,
            marginBottom: 26,
          }}
        >
          Configure your wallpaper settings and enable auto-rotation
        </Text>

        <View
          style={{
            padding: 20,
            borderColor: "#e5e5e5",
            borderWidth: 1,
            borderRadius: 16,
            marginBottom: 26,
          }}
        >
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            Image Quality
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 7,
              borderWidth: 1,
              borderColor: "#e5e5e5",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "regular",
                color: "#9c9c9c",
              }}
            >
              High (Best Quality)
            </Text>
            <Image
              source={require("../assets/images/caret.png")}
              height={24}
              width={24}
              resizeMode="cover"
            />
          </View>
        </View>
        <View
          style={{
            padding: 20,
            borderColor: "#e5e5e5",
            borderWidth: 1,
            borderRadius: 16,
            marginBottom: 26,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 6,
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 20,
              }}
            >
              Notification
            </Text>

            <Image
              source={require("../assets/images/switch.png")}
              height={24}
              width={24}
              resizeMode="cover"
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "regular",
              color: "#9c9c9c",
            }}
          >
            Get notified about new wallpaper and updates
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            columnGap: 20,
          }}
        >
          <View
            style={{
              paddingVertical: 13,
              paddingHorizontal: 22,
              borderRadius: 21,
              flexDirection: "row",
              columnGap: 10,
              justifyContent: "center",
              borderColor: "#dfdfdf",
              borderWidth: 1,
              backgroundColor: "#f8f8f8",
              minWidth: 200,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: "medium" }}>Cancel</Text>
          </View>
          <View
            style={{
              paddingVertical: 13,
              paddingHorizontal: 22,
              borderRadius: 21,
              flexDirection: "row",
              columnGap: 10,
              justifyContent: "center",
              backgroundColor: "#fbb03b",
              minWidth: 200,
            }}
          >
            <Text
              style={{ fontSize: 14, fontFamily: "medium", color: "#ffffff" }}
            >
              Save Settings
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/images/device2.png")}
          style={{
            height: 524,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
