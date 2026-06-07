import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function BookingsScreen() {
  const bookings = [
    {
      id: 1,
      destination: "Estação Orbital",
      departureDate: "15/07/2027",
      totalPrice: 250000,
      status: "Confirmada",
    },
    {
      id: 2,
      destination: "Missão Lunar",
      departureDate: "20/09/2027",
      totalPrice: 950000,
      status: "Pendente",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Minhas Reservas
      </Text>

      <TouchableOpacity
        style={styles.newButton}
        onPress={() => router.push("/booking-form")}
      >
        <Text style={styles.newButtonText}>
          + Nova Reserva
        </Text>
      </TouchableOpacity>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.destination}>
              {item.destination}
            </Text>

            <Text style={styles.info}>
              Saída: {item.departureDate}
            </Text>

            <Text style={styles.info}>
              Status: {item.status}
            </Text>

            <Text style={styles.price}>
              R$ {item.totalPrice.toLocaleString()}
            </Text>
          </View>
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

  newButton: {
    backgroundColor: "#16A34A",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  newButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  destination: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  info: {
    color: "#94A3B8",
    marginTop: 5,
  },

  price: {
    color: "#60A5FA",
    fontWeight: "700",
    marginTop: 10,
  },
});