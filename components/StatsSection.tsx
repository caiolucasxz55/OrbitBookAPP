import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const stats = [
  {
    value: "2.847",
    label: "Viajantes Espaciais",
  },
  {
    value: "15",
    label: "Destinos Disponíveis",
  },
  {
    value: "99.8%",
    label: "Taxa de Segurança",
  },
  {
    value: "7",
    label: "Operadores Parceiros",
  },
];

export default function StatsSection() {
  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View
          key={stat.label}
          style={styles.card}
        >
          <Text style={styles.value}>
            {stat.value}
          </Text>

          <Text style={styles.label}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    paddingVertical: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    marginBottom: 24,
    alignItems: "center",
  },

  value: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  label: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 14,
  },
});