"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Card, Button, Chip } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

export default function MindfulnessScreen() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    {
      id: "all",
      name: "Todos",
    },
    {
      id: "meditation",
      name: "Meditación",
    },
    {
      id: "breathing",
      name: "Respiración",
    },
    {
      id: "sleep",
      name: "Sueño",
    },
  ]

  const sessions = [
    {
      id: 1,
      title: "Meditación Guiada",
      duration: "10 min",
      category: "meditation",
      instructor: "María López",
      image: "https://psiconecta.org/wp-content/uploads/2019/11/2887075.jpg",
    },
    {
      id: 2,
      title: "Respiración 4-7-8",
      duration: "5 min",
      category: "breathing",
      instructor: "Carlos Ruiz",
      image: "https://wblog.paraiso-peru.com/wp-content/uploads/2022/12/tecnica-respiracion-4-7-8.jpg",
    },
    {
      id: 3,
      title: "Sonidos para Dormir",
      duration: "45 min",
      category: "sleep",
      instructor: "Ana Martínez",
      image: "https://medicaloptica.es/blog/wp-content/uploads/2019/12/Sonidos-relajantes-para-dormir-Medical-Optica-Audicion.jpeg",
    },
    {
      id: 4,
      title: "Meditación de Gratitud",
      duration: "15 min",
      category: "meditation",
      instructor: "Pablo Sánchez",
      image: "https://www.yogaone.es/blog/wp-content/uploads/2023/11/Screenshot-2023-11-14-at-10.29.27-720x380.png",
    },
  ]

  const filteredSessions =
    activeCategory === "all" ? sessions : sessions.filter((session) => session.category === activeCategory)

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mindfulness</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <LinearGradient
          colors={["#1e40af", "#3730a3"]} // blue-900 to indigo-900
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.banner}
        >
          <Text style={styles.bannerTitle}>Reduce tu estrés</Text>
          <Text style={styles.bannerText}>
            Practica mindfulness diariamente para mejorar tu bienestar mental y emocional.
          </Text>
          <Button mode="contained" style={styles.bannerButton} labelStyle={styles.bannerButtonLabel}>
            Comenzar ahora
          </Button>
        </LinearGradient>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category) => (
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

        {/* Sessions List */}
        <View style={styles.sessionsList}>
          {filteredSessions.map((session) => (
            <MindfulnessCard key={session.id} session={session} />
          ))}
        </View>

        {/* Padding at bottom */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

function MindfulnessCard({ session }) {
  return (
    <Card style={styles.sessionCard}>
      <View style={styles.sessionCardContent}>
        <Image source={{ uri: session.image }} style={styles.sessionImage} />
        <View style={styles.sessionDetails}>
          <Text style={styles.sessionTitle}>{session.title}</Text>
          <Text style={styles.instructorName}>{session.instructor}</Text>
          <Text style={styles.sessionDuration}>{session.duration}</Text>
          <Button mode="outlined" style={styles.playButton} labelStyle={styles.playButtonLabel}>
            Reproducir
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
  banner: {
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  bannerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bannerText: {
    color: "#bfdbfe", // blue-100
    fontSize: 14,
    marginBottom: 16,
  },
  bannerButton: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
  },
  bannerButtonLabel: {
    color: "#1e40af", // blue-900
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
  sessionsList: {
    marginTop: 8,
  },
  sessionCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  sessionCardContent: {
    flexDirection: "row",
  },
  sessionImage: {
    width: 100,
    height: 135,
  },
  sessionDetails: {
    padding: 12,
    flex: 1,
  },
  sessionTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  instructorName: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
    marginTop: 2,
  },
  sessionDuration: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
    marginTop: 4,
  },
  playButton: {
    marginTop: 8,
    borderColor: "#3b82f6", // blue-500
  },
  playButtonLabel: {
    color: "#60a5fa", // blue-400
    fontSize: 12,
  },
})

