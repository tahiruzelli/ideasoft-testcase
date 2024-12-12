import { View, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../../molecules/home/header";
import SearchInput from "../../atoms/search-input";
import { Colors } from "@/src/utils/constans/colors";
import ProductSlider from "../../molecules/home/product-slider";
import ImageSlider from "../../molecules/home/image-slider";
import { useEffect, useState } from "react";
import { MostSellers } from "../../molecules/home/most-sellers";

export default function HomeOrganism({
  products = [],
  getProducts = () => {},
}) {
  const [stateProducts, setStateProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      setStateProducts(products);
    }
  }, [products]);
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <HomeHeader></HomeHeader>
      <SearchInput onChange={(value: string) => {}}></SearchInput>
      <ScrollView>
        <MostSellers items={stateProducts}></MostSellers>
        <ProductSlider></ProductSlider>
        <ImageSlider></ImageSlider>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
