import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HeroSection() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80",
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Badge */}
        <View style={styles.badge}>
          <Ionicons
            name="rocket-outline"
            size={16}
            color="#60A5FA"
          />
          <Text style={styles.badgeText}>
            Reservas abertas para 2027
          </Text>
        </View>

        {/* Título */}
        <Text style={styles.title}>
          Reserve sua viagem
        </Text>

        <Text style={styles.titleHighlight}>
          ao espaço
        </Text>

        {/* Subtítulo */}
        <Text style={styles.description}>
          De voos suborbitais a expedições para Marte e além.
          Escolha entre mais de 15 experiências espaciais com
          operadores certificados.
        </Text>

        {/* Botões */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/destinations")}
          >
            <Text style={styles.primaryButtonText}>
              Ver Catálogo
            </Text>

            <Ionicons
              name="arrow-forward"
              size={18}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push("/assistant")}
          >
            <Text style={styles.secondaryButtonText}>
              Falar com Especialista
            </Text>
          </TouchableOpacity>
        </View>

        {/* Indicadores */}
        <View style={styles.trustContainer}>
          <View style={styles.trustItem}>
            <Ionicons
              name="shield-checkmark-outline"
              size={16}
              color="#60A5FA"
            />
            <Text style={styles.trustText}>
              Parceiro oficial FAA
            </Text>
          </View>

          <Text style={styles.trustText}>
            +2.800 viajantes
          </Text>

          <Text style={styles.trustText}>
            99.8% segurança
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 700,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.70)",
    paddingHorizontal: 24,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "rgba(96,165,250,0.15)",
    marginBottom: 24,
  },

  badgeText: {
    color: "#60A5FA",
    fontWeight: "600",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  titleHighlight: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#60A5FA",
    textAlign: "center",
    marginBottom: 20,
  },

  description: {
    color: "#D1D5DB",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
    maxWidth: 700,
    marginBottom: 32,
  },

  buttonsContainer: {
    width: "100%",
    gap: 12,
    marginBottom: 40,
  },

  primaryButton: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },

  trustContainer: {
    alignItems: "center",
    gap: 12,
  },

  trustItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  trustText: {
    color: "#D1D5DB",
    fontSize: 14,
  },
});