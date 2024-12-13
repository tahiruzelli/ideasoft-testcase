import { Colors } from "@/src/utils/constans/colors";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../../atoms/app-text";
import MostSellerCard from "../product/most-seller-card";

interface MostSellersProps {
  items: [];
  onPress: (values: any) => {};
}

export function MostSellers({ items, onPress }: MostSellersProps): JSX.Element {
  return (
    <View style={styles.container}>
      <AppText style={styles.titleStyle}>Çok Satanlar</AppText>
      <ScrollView horizontal={true}>
        {items.map((element, index) => {
          return (
            <MostSellerCard
              key={index}
              item={element}
              onPress={() => {
                onPress(element);
              }}
            ></MostSellerCard>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "600",
    fontSize: 20,
    color: Colors.black,
    marginBottom: 16,
  },
  container: {
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 22,
  },
});
