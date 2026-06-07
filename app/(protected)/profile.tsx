import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function ProfileScreen() {
  const handleLogout = () => {
    /*
    remover token
    */

    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Meu Perfil
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Nome
        </Text>

        <Text style={styles.value}>
          Usuário OrbitBook
        </Text>

        <Text style={styles.label}>
          Email
        </Text>

        <Text style={styles.value}>
          usuario@email.com
        </Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>
          Sair
        </Text>
      </TouchableOpacity>
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

  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 20,
  },

  label: {
    color: "#94A3B8",
    marginTop: 10,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 5,
  },

  logoutButton: {
    backgroundColor: "#DC2626",
    marginTop: 30,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});