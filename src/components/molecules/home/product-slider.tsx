import React from "react";
import { StyleSheet, View, Image } from "react-native";
import dimensions from "@/src/utils/helpers/dimensions";
import Carousel from "react-native-carousel-view";
import AppText from "../../atoms/app-text";
import { Colors } from "@/src/utils/constans/colors";
import AppButton from "../../atoms/app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";

export default function ProductSlider() {
  function RenderItem() {
    return (
      <View style={styles.contentContainer}>
        <Image
          width={dimensions()._width - 32}
          height={(dimensions()._width - 32) / 2}
          source={{
            uri: "https://www.gentlemansgazette.com/wp-content/uploads/2012/03/Bold-Horizontal-Stripe-Shirts-by-Etutee.jpg",
          }}
        />
        <AppText style={styles.titleStyle}>Efsane Kazak</AppText>
        <AppText style={styles.descriptionStyle}>
          Kazak açıklaması - Kazak açıklaması - Kazak açıklaması
        </AppText>
        <AppButton
          type={ButtonTypes.primary}
          title={"Ürünü incele"}
          onTap={() => {}}
          paddingHorizontal={24}
        ></AppButton>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Carousel
        width={dimensions()._width - 32}
        height={dimensions()._width - 32}
        delay={3000}
        indicatorAtBottom={true}
        indicatorSize={12}
        indicatorColor="gray"
      >
        <RenderItem></RenderItem>
        <RenderItem></RenderItem>
        <RenderItem></RenderItem>
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: dimensions()._width - 32,
    height: dimensions()._width - 32,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    marginTop: 16,
    marginBottom: 10,
    fontStyle: "italic",
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    fontStyle: "italic",
    marginBottom: 12,
  },
});
