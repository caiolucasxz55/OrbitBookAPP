import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function DestinationDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Estação Orbital
        </Text>

        <Text style={styles.price}>
          R$ 250.000
        </Text>

        <Text style={styles.description}>
          Experiência completa em órbita
          terrestre com acomodação premium.
        </Text>

        <Text style={styles.info}>
          Distância: 400 km
        </Text>

        <Text style={styles.info}>
          Capacidade: 20 passageiros
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  image: {
    width: "100%",
    height: 300,
  },

  content: {
    padding: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  price: {
    color: "#60A5FA",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  description: {
    color: "#CBD5E1",
    marginTop: 20,
    lineHeight: 24,
  },

  info: {
    color: "#94A3B8",
    marginTop: 12,
  },
});