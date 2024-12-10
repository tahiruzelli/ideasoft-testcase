import { Colors } from "@/src/utils/constans/colors";
import dimensions from "@/src/utils/helpers/dimensions";
import { View, Image, StyleSheet } from "react-native";
import { BagIcon, LikeIcon, UserIcon } from "../../atoms/icons";

export default function HomeHeader() {
  const appBarHeight = 0.1026785714 * dimensions()._height;
  return (
    <View style={[styles.body, { height: appBarHeight }]}>
      <Image source={require("../../../../assets/images/fexx-logo.png")} />
      <View style={{ flexDirection: "row", paddingBottom: 3 }}>
        <UserIcon></UserIcon>
        <View style={{ paddingHorizontal: 4 }}>
          <LikeIcon></LikeIcon>
        </View>
        <BagIcon></BagIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingBottom: 4,
    justifyContent: "space-between",
  },
});
