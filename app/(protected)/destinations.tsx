import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function DestinationsScreen() {
  const [search, setSearch] = useState("");

  const destinations = [
    {
      id: 1,
      name: "Estação Orbital",
      description: "Experiência em órbita terrestre",
      basePrice: 250000,
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      id: 2,
      name: "Missão Lunar",
      description: "Viagem turística à Lua",
      basePrice: 950000,
      imageUrl:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    },
  ];

  const filtered = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Destinos
      </Text>

      <TextInput
        placeholder="Buscar destino..."
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          router.push("/add-destination")
        }
      >
        <Text style={styles.addButtonText}>
          + Novo Destino
        </Text>
      </TouchableOpacity>

      <FlatList
        data={filtered}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push(
                `/destination-details?id=${item.id}`
              )
            }
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.image}
            />

            <View style={styles.content}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.description}>
                {item.description}
              </Text>

              <Text style={styles.price}>
                R$ {item.basePrice.toLocaleString()}
              </Text>

              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  router.push(
                    `/edit-destination?id=${item.id}`
                  )
                }
              >
                <Text style={styles.editButtonText}>
                  Editar
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
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

  input: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
  },

  addButton: {
    backgroundColor: "#16A34A",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 15,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  description: {
    color: "#94A3B8",
    marginTop: 5,
  },

  price: {
    color: "#60A5FA",
    fontWeight: "700",
    marginTop: 10,
  },

  editButton: {
    backgroundColor: "#2563EB",
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  editButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});