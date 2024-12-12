import { Colors } from "@/src/utils/constans/colors";
import dimensions from "@/src/utils/helpers/dimensions";
import { router } from "expo-router";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import CircleView from "../../atoms/circle-view";
import { ArrowLeftIcon, LikeIcon } from "../../atoms/icons";
import { useState } from "react";

export default function ProductDetailHeader() {
  const [isFavorise, setIsFavorite] = useState(false);
  const appBarHeight = 0.1026785714 * dimensions()._height;
  return (
    <View style={[styles.body, { height: appBarHeight }]}>
      <TouchableOpacity onPress={router.back}>
        <CircleView color={Colors.lightGray} height={36} width={36}>
          <ArrowLeftIcon></ArrowLeftIcon>
        </CircleView>
      </TouchableOpacity>
      <Image source={require("../../../../assets/images/fexx-logo.png")} />
      <TouchableOpacity
        onPress={() => {
          setIsFavorite(!isFavorise);
        }}
        style={{ marginBottom: 4 }}
      >
        <LikeIcon color={isFavorise ? Colors.red : undefined}></LikeIcon>
      </TouchableOpacity>
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
