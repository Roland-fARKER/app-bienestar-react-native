"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Card, Button, Chip } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"

export default function ExerciseScreen() {
  const [activeCategory, setActiveCategory] = useState("all")

  const workoutCategories = [
    {
      id: "all",
      name: "Todos",
    },
    {
      id: "cardio",
      name: "Cardio",
    },
    {
      id: "strength",
      name: "Fuerza",
    },
    {
      id: "flexibility",
      name: "Flexibilidad",
    },
  ]

  const workouts = [
    {
      id: 1,
      title: "Cardio HIIT",
      duration: "25 min",
      level: "Intermedio",
      category: "cardio",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "Yoga Matutino",
      duration: "20 min",
      level: "Principiante",
      category: "flexibility",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 3,
      title: "Entrenamiento de Fuerza",
      duration: "40 min",
      level: "Avanzado",
      category: "strength",
      image: "https://via.placeholder.com/300x150",
    },
    {
      id: 4,
      title: "Pilates Core",
      duration: "30 min",
      level: "Intermedio",
      category: "flexibility",
      image: "https://via.placeholder.com/300x150",
    },
  ]

  const filteredWorkouts =
    activeCategory === "all" ? workouts : workouts.filter((workout) => workout.category === activeCategory)

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ejercicios</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rutinas Personalizadas</Text>

          {/* Categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {workoutCategories.map((category) => (
              <Chip
                key={category.id}
                selected={activeCategory === category.id}
                onPress={() => setActiveCategory(category.id)}
                style={[styles.categoryChip, activeCategory === category.id && styles.activeCategoryChip]}
                textStyle={[styles.categoryChipText, activeCategory === category.id && styles.activeCategoryChipText]}
              >
                {category.name}
              </Chip>
            ))}
          </ScrollView>

          {/* Workouts List */}
          <View style={styles.workoutsList}>
            {filteredWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </View>
        </View>

        {/* Padding at bottom */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

function WorkoutCard({ workout }) {
  return (
    <Card style={styles.workoutCard}>
      <View style={styles.workoutCardContent}>
        <Image source={{ uri: workout.image }} style={styles.workoutImage} />
        <View style={styles.workoutDetails}>
          <Text style={styles.workoutTitle}>{workout.title}</Text>
          <View style={styles.workoutMeta}>
            <Text style={styles.workoutMetaText}>{workout.duration}</Text>
            <Text style={styles.workoutMetaDot}>•</Text>
            <Text style={styles.workoutMetaText}>{workout.level}</Text>
          </View>
          <Button mode="outlined" style={styles.startButton} labelStyle={styles.startButtonLabel}>
            Comenzar
          </Button>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-950
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#1e293b", // slate-800
    borderBottomWidth: 1,
    borderBottomColor: "#334155", // slate-700
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  filterButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoryChip: {
    marginRight: 8,
    backgroundColor: "#1e293b", // slate-800
    borderColor: "#334155", // slate-700
  },
  activeCategoryChip: {
    backgroundColor: "#3b82f6", // blue-500
  },
  categoryChipText: {
    color: "#ffffff",
  },
  activeCategoryChipText: {
    color: "#ffffff",
  },
  workoutsList: {
    marginTop: 8,
  },
  workoutCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  workoutCardContent: {
    flexDirection: "row",
  },
  workoutImage: {
    width: 100,
    height: 100,
  },
  workoutDetails: {
    padding: 12,
    flex: 1,
  },
  workoutTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  workoutMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  workoutMetaText: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
  },
  workoutMetaDot: {
    color: "#94a3b8", // slate-400
    marginHorizontal: 4,
  },
  startButton: {
    marginTop: 8,
    borderColor: "#3b82f6", // blue-500
  },
  startButtonLabel: {
    color: "#60a5fa", // blue-400
    fontSize: 12,
  },
})