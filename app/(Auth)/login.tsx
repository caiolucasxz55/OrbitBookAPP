import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      /*
      Futuramente:

      const response = await authService.login({
        email,
        password,
      });

      salvar token
      */

      setTimeout(() => {
        setLoading(false);
        router.replace("/home");
      }, 1000);
    } catch (error) {
      setLoading(false);

      Alert.alert(
        "Erro",
        "Não foi possível realizar o login."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <View style={styles.card}>
        <Text style={styles.logo}>
          🚀 OrbitBook
        </Text>

        <Text style={styles.title}>
          Entrar
        </Text>

        <Text style={styles.subtitle}>
          Faça login para acessar suas viagens
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#94A3B8"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.loginText}>
              Entrar
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push("/register")
          }
        >
          <Text style={styles.registerText}>
            Não possui conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 25,
  },

  logo: {
    color: "#60A5FA",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },

  subtitle: {
    color: "#94A3B8",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 14,
    color: "#FFFFFF",
    marginBottom: 15,
  },

  loginButton: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },

  registerText: {
    color: "#60A5FA",
    textAlign: "center",
    marginTop: 20,
  },
});