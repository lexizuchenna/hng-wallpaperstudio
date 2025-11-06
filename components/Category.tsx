import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants";

const tags = ["Nature", "Ambience", "Flowers"];

const imgs = [
  require("../assets/images/share.png"),
  require("../assets/images/link.png"),
  require("../assets/images/setting.png"),
];

export default function Category() {
  return (
    <View
      style={{
        backgroundColor: COLORS.primaryBg,
        width: "100%",
        // marginHorizontal: 20,
        marginTop: SIZES.width > 600 ? 43 : 15,

        borderRadius: 16,
        padding: 40,
      }}
    >
      <View
        style={{
          flexDirection: SIZES.width > 600 ? "row" : "column-reverse",
          columnGap: 41,
        }}
      >
        <View
          style={{
            maxWidth: 279,
          }}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 32,
              marginBottom: 37,
            }}
          >
            Preview
          </Text>

          <View>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
                color: "#808080",
              }}
            >
              Name
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                fontSize: 24,
                marginBottom: 30,
              }}
            >
              Nature 1
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
                color: "#808080",
              }}
            >
              Tags
            </Text>
            <View
              style={{
                flexDirection: "row",
                columnGap: 12,
                width: 279,
                justifyContent: "space-between",
                marginBottom: 30,
              }}
            >
              {tags.map((tag) => (
                <Text
                  style={{
                    borderRadius: 24,
                    backgroundColor: "rgba(191, 191, 191, 0.2)",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    fontFamily: "regular",
                    fontSize: 14,
                  }}
                >
                  {tag}
                </Text>
              ))}
            </View>
          </View>

          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: 14,
                color: "#808080",
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                fontSize: 14,
              }}
            >
              Discover the pure beauty of "Natural Essence" – your gateway to
              authentic, nature-inspired experiences. Let this unique collection
              elevate your senses and connect you with the unrefined
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              columnGap: 12,
              justifyContent: "space-between",
              maxWidth: 144,
            }}
          >
            {imgs.map((im) => (
              <View
                style={{
                  borderRadius: 11,
                  backgroundColor: "rgba(191, 191, 191, 0.2)",
                  paddingHorizontal: 7,
                  paddingVertical: 7,
                  width: 40,
                  height: 40,
                }}
              >
                <Image height={24} width={24} source={im} />
              </View>
            ))}
          </View>
        </View>
        <Image
          height={523}
          width={258}
          source={require("../assets/images/device.png")}
          resizeMethod="resize"
          style={{
            height: 523,
            width: 258,
            resizeMode: "contain",
          }}
        />
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
          }}
        >
          <Image
            width={18}
            height={18}
            source={require("../assets/images/favourites.png")}
          />
          <Text style={{ fontSize: 14, fontFamily: "medium" }}>
            Save to favourites
          </Text>
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
