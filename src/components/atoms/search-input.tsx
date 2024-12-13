import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "@/src/utils/constans/colors";
import { SearchIcon } from "./icons";
import DropShadow from "react-native-drop-shadow";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";
export default function SearchInput(props: any) {
  return (
    <DropShadow style={styles.inputContainer}>
      <SearchIcon></SearchIcon>
      <View style={{ width: 12 }}></View>
      <TextInput
        onPress={
          props.onChange === undefined
            ? undefined
            : () => {
                if (props.push === true) {
                  router.push(PageRoutes.searchPage);
                }
              }
        }
        placeholder="Aramak istediğiniz ürünü yazınız"
        placeholderTextColor={Colors.paragraphColor}
        selectionColor={Colors.navy}
        onChangeText={(value: string) => {
          props.onChange(value);
        }}
      ></TextInput>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});
