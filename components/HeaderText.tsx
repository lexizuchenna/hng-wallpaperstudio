import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Platform, Text, View } from "react-native";
import { SIZES } from "@/constants";

type GradientTextProps = {
  text: string;
  colors?: string[];
  fontSize?: number;
  fontFamily?: string;
};

export default function GradientText({
  text,
  colors = ["#fbb03b", "#ec0c43"],
  fontSize = SIZES.width > 500 ? 60 : 24,
  fontFamily = "clash",
}: GradientTextProps) {
  if (SIZES.width > 600) {
    // Web uses CSS background-clip trick
    return (
      <Text
        style={{
          fontSize,
          fontFamily,
          backgroundImage: `linear-gradient(90deg, ${colors.join(",")})`,
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </Text>
    );
  }

  // Mobile (iOS / Android) uses MaskedView + LinearGradient
  return (
    <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
      <MaskedView
        maskElement={
          <Text style={{ fontSize, fontFamily, color: "black" }}>{text}</Text>
        }
      >
        <LinearGradient
          colors={["#fbb03b", "#ec0c43"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={{ fontSize, fontFamily, opacity: 0 }}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}
