import { View, StyleSheet } from "react-native";
import HomeHeader from "../../molecules/home/header";
import SearchInput from "../../atoms/search-input";
import { Colors } from "@/src/utils/constans/colors";
import Slider from "../../molecules/home/slider";

export default function HomeOrganism() {
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <HomeHeader></HomeHeader>
      <SearchInput></SearchInput>
      <Slider></Slider>
    </View>
  );
}

const styles = StyleSheet.create({});
