import { View, Image, StyleSheet } from "react-native";
import ProductDetailHeader from "../../molecules/product/header";
import { Colors } from "@/src/utils/constans/colors";
import { useEffect } from "react";
import Carousel from "react-native-carousel-view";
import dimensions from "@/src/utils/helpers/dimensions";
import AppText from "../../atoms/app-text";
import DropShadow from "react-native-drop-shadow";
import Footer from "../../molecules/product/footer";

export default function ProductDetailOrganism({ product = {} }) {
  useEffect(() => {}, [product]);
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <ProductDetailHeader></ProductDetailHeader>
      <Carousel
        width={dimensions()._width}
        height={dimensions()._height / 3}
        delay={3000}
        indicatorAtBottom={true}
        indicatorSize={0}
        indicatorColor="gray"
      >
        {product.images.map((element: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                borderRadius: 10,
                overflow: "hidden",
                height: dimensions()._height / 3,
                width: dimensions()._width,
              }}
            >
              <Image
                height={dimensions()._height / 3}
                width={dimensions()._width}
                style={{ resizeMode: "cover" }}
                source={{ uri: "https:" + element.originalUrl }}
              />
            </View>
          );
        })}
      </Carousel>
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <AppText style={styles.titleStyle}>{product.name}</AppText>
        <AppText style={styles.descriptionStyle}>
          {product?.detail?.details ?? product?.metaDescription ?? ""}
        </AppText>
        <AppText style={styles.stockAmount}>
          {"Stock Amount: " + product.stockAmount}
        </AppText>
        {product.categories.length == 0 ? (
          <View></View>
        ) : (
          <AppText>
            <AppText>Category: </AppText>
            <AppText>{product.categories[0].name}</AppText>
          </AppText>
        )}

        <View style={{ flexDirection: "row" }}>
          <AppText style={{ opacity: product.hasGift }}>
            If you bought this product, you will also have:{" "}
          </AppText>
          <DropShadow
            style={[
              {
                opacity: product.hasGift,
              },
              styles.giftContainer,
            ]}
          >
            <AppText>{product.gift}</AppText>
          </DropShadow>
        </View>
        <Footer product={product}></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  giftContainer: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: Colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  stockAmount: {
    marginTop: 12,
    fontWeight: "400",
    fontSize: 14,
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.black,
    textAlign: "center",
    marginTop: 12,
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.paragraphColor,
    textAlign: "center",
    marginTop: 12,
  },
});
