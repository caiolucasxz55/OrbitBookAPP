import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AISection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.badge}>
          Assistente Virtual
        </Text>

        <Text style={styles.title}>
          Planeje sua viagem com ajuda de IA
        </Text>

        <Text style={styles.description}>
          Nosso assistente inteligente ajuda você a escolher o destino ideal,
          entender os requisitos e se preparar para sua aventura espacial.
        </Text>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <FeatureItem
            icon="sparkles-outline"
            title="Recomendações Personalizadas"
            description="Sugestões de destinos baseadas no perfil do usuário."
          />

          <FeatureItem
            icon="chatbubble-ellipses-outline"
            title="Assistente 24/7"
            description="Respostas rápidas sobre viagens espaciais."
          />

          <FeatureItem
            icon="flash-outline"
            title="Respostas Instantâneas"
            description="Informações detalhadas em poucos segundos."
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/assistant")}
        >
          <Text style={styles.buttonText}>
            Conversar com a IA
          </Text>

          <Ionicons
            name="arrow-forward"
            size={18}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      {/* Preview Chat */}
      <View style={styles.chatCard}>
        <View style={styles.chatHeader}>
          <View style={styles.chatIcon}>
            <Ionicons
              name="sparkles-outline"
              size={18}
              color="#60A5FA"
            />
          </View>

          <View>
            <Text style={styles.chatTitle}>
              Orbit AI
            </Text>

            <Text style={styles.online}>
              Online
            </Text>
          </View>
        </View>

        {/* Usuário */}
        <View style={styles.userMessageContainer}>
          <View style={styles.userMessage}>
            <Text style={styles.userMessageText}>
              Qual a melhor opção para iniciantes?
            </Text>
          </View>
        </View>

        {/* IA */}
        <View style={styles.aiMessage}>
          <Text style={styles.aiMessageText}>
            Para iniciantes, recomendo o Voo Suborbital Aurora.
            Apenas 2 dias de treinamento, requisitos acessíveis
            e experiência de microgravidade.
          </Text>
        </View>

        {/* Ações */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Ver detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text>Requisitos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.feature}>
      <View style={styles.featureIcon}>
        <Ionicons
          name={icon}
          size={20}
          color="#60A5FA"
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.featureTitle}>
          {title}
        </Text>

        <Text style={styles.featureDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: "#0F172A",
  },

  content: {
    marginBottom: 40,
  },

  badge: {
    color: "#60A5FA",
    fontWeight: "600",
    marginBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 16,
  },

  description: {
    color: "#CBD5E1",
    lineHeight: 24,
    marginBottom: 30,
  },

  featuresContainer: {
    gap: 18,
    marginBottom: 30,
  },

  feature: {
    flexDirection: "row",
    gap: 12,
  },

  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
  },

  featureTitle: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom: 4,
  },

  featureDescription: {
    color: "#94A3B8",
    fontSize: 14,
  },

  button: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  chatCard: {
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 20,
  },

  chatHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  chatIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  chatTitle: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  online: {
    color: "#22C55E",
    fontSize: 12,
  },

  userMessageContainer: {
    alignItems: "flex-end",
    marginBottom: 12,
  },

  userMessage: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    padding: 12,
    maxWidth: "80%",
  },

  userMessageText: {
    color: "#FFFFFF",
  },

  aiMessage: {
    backgroundColor: "#1F2937",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },

  aiMessageText: {
    color: "#E5E7EB",
    lineHeight: 22,
  },

  actionContainer: {
    flexDirection: "row",
    gap: 10,
  },

  actionButton: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
});