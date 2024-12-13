import { FlatList, View, StyleSheet } from "react-native";
import HomeHeader from "../../molecules/home/header";
import SearchInput from "../../atoms/search-input";
import { Colors } from "@/src/utils/constans/colors";
import MostSellerCard from "../../molecules/product/most-seller-card";
import { useEffect, useState } from "react";
import useDebounce from "@/src/utils/helpers/debounce";

export default function SearchPageOrganism({
  products = [],
  getProducts = (payload: any) => {},
}) {
  const [search, setSearch] = useState("");
  const [stateProducts, setStateProducts] = useState([]);

  // DeBounce Function
  useDebounce(
    () => {
      setStateProducts(
        products.filter((d) =>
          d.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [stateProducts, search],
    800
  );
  const handleSearch = (e) => setSearch(e);

  useEffect(() => {
    setStateProducts(stateProducts);
  }, []);
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <HomeHeader></HomeHeader>
      <SearchInput onChange={handleSearch}></SearchInput>
      <FlatList
        data={stateProducts}
        renderItem={(item: any) => {
          return (
            <MostSellerCard
              item={item.item}
              onPress={() => {}}
            ></MostSellerCard>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Bir satırda 2 sütun gösterir
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: "#add8e6",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
