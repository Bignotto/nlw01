import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import {
  useNavigation,
  NavigationHelpersContext,
} from "@react-navigation/native";
import Constants from "expo-constants";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";

const Detail = () => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Image
          style={styles.pointImage}
          source={{
            uri:
              "https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
          }}
        />

        <Text style={styles.pointName}>Mercado Qualidade</Text>
        <Text style={styles.pointItems}>Óleo de Cozinha, Baterias</Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço:</Text>
          <Text style={styles.addressContent}>Rio Claro, SP</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>WhatsApp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={() => {}}>
          <Icon name="mail" size={20} color="#FFF" />
          <Text style={styles.buttonText}>E-Mail</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  pointImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "RobotoMono_500Medium",
    marginTop: 24,
  },

  pointItems: {
    fontFamily: "RobotoMono_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: "#322153",
    fontFamily: "RobotoMono_500Medium",
    fontSize: 16,
  },

  addressContent: {
    fontFamily: "RobotoMono_400Regular",
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: "48%",
    backgroundColor: "#34CB79",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "RobotoMono_500Medium",
  },
});
