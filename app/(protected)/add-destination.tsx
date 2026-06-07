import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function AddDestinationScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [distanceKm, setDistanceKm] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSave = async () => {
    try {
      /*
      await destinationService.create({
        name,
        description,
        distanceKm,
        basePrice,
        capacity,
        imageUrl,
      });
      */

      Alert.alert(
        "Sucesso",
        "Destino cadastrado."
      );
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível salvar."
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={styles.title}>
        Novo Destino
      </Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Descrição"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        placeholder="Distância (KM)"
        style={styles.input}
        value={distanceKm}
        onChangeText={setDistanceKm}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Preço Base"
        style={styles.input}
        value={basePrice}
        onChangeText={setBasePrice}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Capacidade"
        style={styles.input}
        value={capacity}
        onChangeText={setCapacity}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="URL da Imagem"
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Salvar Destino
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