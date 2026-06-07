import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sobre o App
      </Text>

      <Text style={styles.text}>
        OrbitBook
      </Text>

      <Text style={styles.text}>
        Plataforma de turismo espacial.
      </Text>

      <Text style={styles.text}>
        Commit Hash:
      </Text>

      <Text style={styles.hash}>
        0000000
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  text: {
    color: "#CBD5E1",
    marginBottom: 10,
  },

  hash: {
    color: "#60A5FA",
    fontWeight: "700",
  },
});