import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
  const router = useRouter();

  const openExternalLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Marca */}
      <View style={styles.brandContainer}>
        <View style={styles.logoContainer}>
          <Ionicons
            name="rocket-outline"
            size={24}
            color="#60A5FA"
          />

          <Text style={styles.logoText}>
            OrbitBook
          </Text>
        </View>

        <Text style={styles.description}>
          Sua porta de entrada para o turismo espacial.
          Reserve experiências únicas além da atmosfera.
        </Text>
      </View>

      {/* Redes sociais */}
      <View style={styles.socialContainer}>
        <TouchableOpacity
          onPress={() =>
            openExternalLink("https://twitter.com")
          }
        >
          <Ionicons
            name="logo-twitter"
            size={24}
            color="#94A3B8"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openExternalLink("https://instagram.com")
          }
        >
          <Ionicons
            name="logo-instagram"
            size={24}
            color="#94A3B8"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openExternalLink("https://youtube.com")
          }
        >
          <Ionicons
            name="logo-youtube"
            size={24}
            color="#94A3B8"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            openExternalLink("https://linkedin.com")
          }
        >
          <Ionicons
            name="logo-linkedin"
            size={24}
            color="#94A3B8"
          />
        </TouchableOpacity>
      </View>

      {/* Navegação */}
      <View style={styles.linksContainer}>
        <TouchableOpacity
          onPress={() => router.push("/destinations")}
        >
          <Text style={styles.link}>
            Destinos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/assistant")}
        >
          <Text style={styles.link}>
            Assistente IA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.link}>
            Minha Conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/about")}
        >
          <Text style={styles.link}>
            Sobre o App
          </Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.bottomContainer}>
        <Text style={styles.copyright}>
          © 2026 OrbitBook
        </Text>

        <Text style={styles.certification}>
          FAA • ISO 9001 • Space Tourism Society
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F172A",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopWidth: 1,
    borderTopColor: "#1F2937",
  },

  brandContainer: {
    marginBottom: 25,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 8,
  },

  description: {
    color: "#94A3B8",
    lineHeight: 22,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },

  linksContainer: {
    gap: 14,
    alignItems: "center",
    marginBottom: 30,
  },

  link: {
    color: "#CBD5E1",
    fontSize: 15,
  },

  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: "#1F2937",
    paddingTop: 20,
    alignItems: "center",
  },

  copyright: {
    color: "#94A3B8",
    marginBottom: 6,
  },

  certification: {
    color: "#64748B",
    fontSize: 12,
    textAlign: "center",
  },
});