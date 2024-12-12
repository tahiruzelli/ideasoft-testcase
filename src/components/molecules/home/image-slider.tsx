import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../../atoms/app-text";
import AppButton from "../../atoms/app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";
import dimensions from "@/src/utils/helpers/dimensions";
import Carousel from "react-native-carousel-view";

export default function ImageSlider(props: any) {
  const imageData = [
    "https://blog.tshirtplus.com.au/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-12-11.09.00-A-horizontal-layout-showcasing-a-collection-of-t-shirts-each-with-a-name-a-significant-date-and-a-year-printed-in-an-elegant-and-modern-typography.jpg",
    "https://www.morex.com.tr/wp-content/uploads/2023/01/man-long-fit-t-shirt-horizontal-detail-scaled.jpg.webp",
    "https://media.istockphoto.com/id/1354923559/tr/vekt%C3%B6r/sports-jersey-t-shirt-design-concept-vector-template-horizontal-stripe-v-neck-raglan-sleeve.jpg?s=1024x1024&w=is&k=20&c=AUWGtft1PtFQ5vYCorhjO7dQvx1cHcBwv_jwwFEjjAU=",
  ];
  return (
    <View style={styles.container}>
      <AppText style={styles.titleStyle}>
        OYUNUN KURALLARINI SEN BELIRLE!
      </AppText>
      <View style={styles.buttonStyle}>
        <AppButton
          type={ButtonTypes.primary}
          title={"ALISVERISE BASLA"}
          onTap={() => {}}
          color={Colors.white}
          textColor={Colors.black}
          paddingHorizontal={0}
        ></AppButton>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          width={dimensions()._width - 32}
          height={dimensions()._width / 2 - 32}
          delay={3000}
          indicatorAtBottom={true}
          indicatorSize={0}
          indicatorColor="gray"
        >
          {imageData.map((element, index) => {
            return (
              <View
                key={index}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  height: dimensions()._width / 2 - 32,
                  width: dimensions()._width - 48,
                  marginHorizontal: 6,
                }}
              >
                <Image
                  height={dimensions()._width / 2 - 32}
                  width={dimensions()._width - 48}
                  source={{ uri: element }}
                />
              </View>
            );
          })}
        </Carousel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingHorizontal: 22,
    paddingVertical: 24,
    marginTop: 20,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "600",
    color: Colors.white,
    fontStyle: "italic",
  },
  buttonStyle: {
    width: dimensions()._width * 0.4,
    marginTop: 25,
    marginBottom: 10,
  },
});
