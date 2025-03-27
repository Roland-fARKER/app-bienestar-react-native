import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Card } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function RecommendedWorkouts() {
  const navigation = useNavigation()

  const workouts = [
    {
      id: 1,
      title: "Cardio HIIT",
      duration: "25 min",
      level: "Intermedio",
      image: "https://i.ytimg.com/vi/PAd0_-SllgQ/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Yoga Matutino",
      duration: "20 min",
      level: "Principiante",
      image: "https://yogateca.com/wp-content/uploads/2013/09/yoga-por-la-manana.jpg",
    },
  ]

  const handleWorkoutPress = (workoutId) => {
    // Navigate to workout details
    navigation.navigate("Ejercicio", { screen: "WorkoutDetail", params: { id: workoutId } })
  }

  return (
    <View style={styles.container}>
      {workouts.map((workout) => (
        <TouchableOpacity key={workout.id} style={styles.workoutCard} onPress={() => handleWorkoutPress(workout.id)}>
          <Card style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: workout.image }} style={styles.image} />
              <View style={styles.gradient} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>{workout.title}</Text>
              <View style={styles.metaContainer}>
                <Ionicons name="time-outline" size={16} color="#94a3b8" style={styles.icon} />
                <Text style={styles.metaText}>{workout.duration}</Text>
                <Text style={styles.metaDot}>•</Text>
                <Text style={styles.metaText}>{workout.level}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  workoutCard: {
    width: "48%",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  imageContainer: {
    position: "relative",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "rgba(15, 23, 42, 0.7)", // slate-950 with opacity
  },
  cardContent: {
    padding: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  icon: {
    marginRight: 4,
  },
  metaText: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
  },
  metaDot: {
    color: "#94a3b8", // slate-400
    marginHorizontal: 4,
    fontSize: 12,
  },
})

