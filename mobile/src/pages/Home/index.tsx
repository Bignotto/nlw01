import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const logo = "../../assets/logo.png";
const homebg = "../../assets/home-background.png";

const Home = () => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("Points");
  }

  return (
    <ImageBackground
      source={require(homebg)}
      imageStyle={{ width: 274, height: 368 }}
      style={styles.container}
    >
      <View style={styles.main}>
        <Image source={require(logo)} />
        <Text style={styles.title}>Seu Marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Conectamos pontos de coleta de resíduos recicláveis à você!
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onActiveStateChange={handleNavigate}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "RobotoMono_500Medium",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "RobotoMono_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "RobotoMono_400Regular",
    fontSize: 16,
  },
});
