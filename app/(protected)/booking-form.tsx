import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function BookingFormScreen() {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const handleSave = async () => {
    try {
      /*
      await bookingService.create({
        departureDate,
        returnDate,
        numPassengers: passengers
      });
      */

      Alert.alert(
        "Sucesso",
        "Reserva criada com sucesso."
      );
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível criar a reserva."
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={styles.title}>
        Nova Reserva
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Data de ida"
        placeholderTextColor="#94A3B8"
        value={departureDate}
        onChangeText={setDepartureDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de retorno"
        placeholderTextColor="#94A3B8"
        value={returnDate}
        onChangeText={setReturnDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade de passageiros"
        placeholderTextColor="#94A3B8"
        value={passengers}
        onChangeText={setPassengers}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Confirmar Reserva
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});