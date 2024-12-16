import { View, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "../../molecules/home/header";
import SearchInput from "../../atoms/search-input";
import { Colors } from "@/src/utils/constans/colors";
import ProductSlider from "../../molecules/home/product-slider";
import ImageSlider from "../../molecules/home/image-slider";
import { useEffect, useState } from "react";
import { MostSellers } from "../../molecules/home/most-sellers";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";
import useDebounce from "@/src/utils/helpers/debounce";

export default function HomeOrganism({
  products = [],
  getProducts = () => {},
  setCurrentProduct = (values: any) => {},
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
      <SearchInput push={true}></SearchInput>
      <ScrollView>
        <MostSellers
          items={stateProducts}
          onPress={(item: any) => {
            setCurrentProduct(item);
            router.push(PageRoutes.productDetail);
          }}
        ></MostSellers>
        <ProductSlider></ProductSlider>
        <ImageSlider></ImageSlider>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
