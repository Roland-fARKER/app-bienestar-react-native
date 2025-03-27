import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Card } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

export default function MindfulnessCard({ title, duration, image }) {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(15, 23, 42, 0.9)"]} // transparent to slate-950
          style={styles.gradient}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  container: {
    position: "relative",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  duration: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3b82f6", // blue-500
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
})