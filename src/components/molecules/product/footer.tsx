import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, View } from "react-native";
import DropShadow from "react-native-drop-shadow";
import AppText from "../../atoms/app-text";
import AppButton from "../../atoms/app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";

export default function Footer(props: any) {
  return (
    <DropShadow
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingBottom: 22,
        paddingTop: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: Colors.white,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AppText
          style={
            props.product.discount === 0
              ? styles.priceStyle
              : styles.discontedPriceStyle
          }
        >
          {props.product.price1 + " " + props.product.currency.label}
        </AppText>
        <AppText
          style={[
            styles.discountStyle,
            { opacity: props.product.discount === 0 ? 0 : 1 },
          ]}
        >
          {props.product.discount + " " + props.product.currency.label}
        </AppText>
      </View>
      <View style={{ flex: 1, paddingLeft: 12 }}>
        <AppButton
          type={ButtonTypes.primary}
          title={"Sepete Ekle"}
          onTap={() => {}}
          paddingHorizontal={0}
        ></AppButton>
      </View>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  priceStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.black,
  },
  discontedPriceStyle: {
    fontSize: 22,
    fontWeight: "200",
    color: Colors.black,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  discountStyle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.green,
    marginLeft: 6,
  },
});
