import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  basePrice: number;
}

interface Props {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push(
          `/destination-details?id=${destination.id}`
        )
      }
    >
      <Image
        source={{ uri: destination.imageUrl }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {destination.name}
        </Text>

        <Text style={styles.description}>
          {destination.description}
        </Text>

        <Text style={styles.price}>
          R$ {destination.basePrice.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  description: {
    color: "#D1D5DB",
    marginBottom: 12,
  },

  price: {
    color: "#60A5FA",
    fontWeight: "700",
    fontSize: 16,
  },
});