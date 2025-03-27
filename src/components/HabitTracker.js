import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function HabitTracker() {
  const habits = [
    { name: "Ejercicio", completed: [true, true, false, true, false, false, false] },
    { name: "Meditación", completed: [true, true, true, false, false, false, false] },
    { name: "8 Vasos de Agua", completed: [true, false, true, true, false, false, false] },
    { name: "8h de Sueño", completed: [false, true, true, false, false, false, false] },
  ]

  const days = ["L", "M", "X", "J", "V", "S", "D"]

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.habitNameHeader} />
        {days.map((day, index) => (
          <View key={index} style={styles.dayHeader}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>

      {habits.map((habit, habitIndex) => (
        <View key={habitIndex} style={styles.habitRow}>
          <View style={styles.habitNameContainer}>
            <Text style={styles.habitName}>{habit.name}</Text>
          </View>
          {habit.completed.map((completed, dayIndex) => (
            <View key={`${habitIndex}-${dayIndex}`} style={styles.dayCell}>
              <View
                style={[styles.statusIndicator, completed ? styles.completedIndicator : styles.incompleteIndicator]}
              >
                {completed ? (
                  <Ionicons name="checkmark" size={16} color="#60a5fa" />
                ) : (
                  <Ionicons name="close" size={16} color="#475569" />
                )}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  habitNameHeader: {
    flex: 2,
  },
  dayHeader: {
    flex: 1,
    alignItems: "center",
  },
  dayText: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
  },
  habitRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  habitNameContainer: {
    flex: 2,
    justifyContent: "center",
  },
  habitName: {
    color: "#ffffff",
    fontSize: 14,
  },
  dayCell: {
    flex: 1,
    alignItems: "center",
  },
  statusIndicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  completedIndicator: {
    backgroundColor: "rgba(59, 130, 246, 0.2)", // blue-500 with opacity
  },
  incompleteIndicator: {
    backgroundColor: "#334155", // slate-700
  },
})