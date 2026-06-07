import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

import DestinationCard from "./DestinationCard";

interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  basePrice: number;
}

export default function FeaturedDestinations() {
  const router = useRouter();

  const featuredDestinations: Destination[] = [
    {
      id: 1,
      name: "Estação Orbital",
      description: "Experiência em órbita terrestre.",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      basePrice: 250000,
    },
    {
      id: 2,
      name: "Missão Lunar",
      description: "Viagem turística à Lua.",
      imageUrl:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      basePrice: 950000,
    },
    {
      id: 3,
      name: "Marte Explorer",
      description: "A aventura definitiva.",
      imageUrl:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
      basePrice: 2500000,
    },
    {
      id: 4,
      name: "Voo Suborbital",
      description: "Seu primeiro contato com o espaço.",
      imageUrl:
        "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7",
      basePrice: 120000,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            Destinos em Destaque
          </Text>

          <Text style={styles.subtitle}>
            As experiências mais populares do catálogo.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/destinations")}
        >
          <Text style={styles.link}>
            Ver Todos →
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <View style={styles.cardsContainer}>
        {featuredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },

  subtitle: {
    color: "#9CA3AF",
    fontSize: 15,
  },

  link: {
    marginTop: 12,
    color: "#60A5FA",
    fontWeight: "600",
  },

  cardsContainer: {
    gap: 16,
  },
});