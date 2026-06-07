import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "CEO, TechVentures",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    rating: 5,
    content:
      "A experiência mais transformadora da minha vida. Ver a Terra do espaço mudou completamente minha perspectiva.",
  },
  {
    id: 2,
    name: "Ana Paula Silva",
    role: "Engenheira Aeroespacial",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 5,
    content:
      "O treinamento foi impecável e a equipe extremamente profissional. Vale cada centavo investido.",
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    role: "Investidor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    rating: 5,
    content:
      "5 dias na estação orbital foram os mais incríveis da minha vida. A vista da cúpola é surreal.",
  },
];

export default function TestimonialsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        O que nossos viajantes dizem
      </Text>

      <Text style={styles.subtitle}>
        Histórias reais de quem já viveu essa experiência.
      </Text>

      {testimonials.map((testimonial) => (
        <View
          key={testimonial.id}
          style={styles.card}
        >
          {/* Avaliação */}
          <View style={styles.starsContainer}>
            {[...Array(testimonial.rating)].map((_, index) => (
              <Ionicons
                key={index}
                name="star"
                size={16}
                color="#FBBF24"
              />
            ))}
          </View>

          {/* Depoimento */}
          <Text style={styles.content}>
            "{testimonial.content}"
          </Text>

          {/* Autor */}
          <View style={styles.authorContainer}>
            <Image
              source={{
                uri: testimonial.avatar,
              }}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.name}>
                {testimonial.name}
              </Text>

              <Text style={styles.role}>
                {testimonial.role}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },

  starsContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },

  content: {
    color: "#E5E7EB",
    lineHeight: 24,
    marginBottom: 20,
  },

  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  name: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  role: {
    color: "#94A3B8",
    fontSize: 13,
  },
});