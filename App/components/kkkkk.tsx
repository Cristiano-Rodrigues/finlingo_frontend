import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const top3 = [
  { id: "2", name: "Maria", score: 950, place: 2 },
  { id: "1", name: "João", score: 1200, place: 1 },
  { id: "3", name: "Carlos", score: 870, place: 3 },
];

const others = [
  { id: "4", name: "Ana", score: 760 },
  { id: "5", name: "Pedro", score: 720 },
  { id: "6", name: "Lucas", score: 690 },
  { id: "7", name: "Paula", score: 640 },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      {/* Top 3 */}
      <View style={styles.topContainer}>
        {top3.map((player) => (
          <View
            key={player.id}
            style={[
              styles.topCard,
              player.place === 1 && styles.firstPlace,
              player.place === 2 && styles.secondPlace,
              player.place === 3 && styles.thirdPlace,
            ]}
          >
            <Text style={styles.place}>#{player.place}</Text>
            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.score}>{player.score}</Text>
          </View>
        ))}
      </View>

      {/* Outros */}
      <FlatList
        data={others}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.rank}>{index + 4}</Text>
            <Text style={styles.rowName}>{item.name}</Text>
            <Text style={styles.rowScore}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#111",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 30,
    backgroundColor: 'red'
  },

  topCard: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#222",
    width: 90,
  },

  firstPlace: {
    height: 120,
    backgroundColor: "#FFD700",
  },

  secondPlace: {
    height: 100,
    backgroundColor: "#C0C0C0",
  },

  thirdPlace: {
    height: 90,
    backgroundColor: "#CD7F32",
  },

  place: {
    fontWeight: "bold",
  },

  name: {
    fontSize: 16,
    marginTop: 5,
  },

  score: {
    fontSize: 14,
    marginTop: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1c1c1c",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  rank: {
    color: "white",
    width: 30,
  },

  rowName: {
    color: "white",
    flex: 1,
  },

  rowScore: {
    color: "white",
    fontWeight: "bold",
  },
});