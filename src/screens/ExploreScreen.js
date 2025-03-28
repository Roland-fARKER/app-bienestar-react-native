"use client"

import React from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Card, Searchbar } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const categories = [
    {
      id: 1,
      name: "Ejercicio",
      icon: "fitness",
      color: "#3b82f6", // blue-500
    },
    {
      id: 2,
      name: "Nutrición",
      icon: "nutrition",
      color: "#22c55e", // green-500
    },
    {
      id: 3,
      name: "Mindfulness",
      icon: "moon",
      color: "#8b5cf6", // violet-500
    },
    {
      id: 4,
      name: "Sueño",
      icon: "bed",
      color: "#6366f1", // indigo-500
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Cómo mejorar tu sueño con hábitos saludables",
      category: "Sueño",
      readTime: "5 min",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamfxPYMf0cGXlB00pDgzOevN2oOj-FT0hfQ&s",
    },
    {
      id: 2,
      title: "Recetas saludables para aumentar tu energía",
      category: "Nutrición",
      readTime: "8 min",
      image: "https://hips.hearstapps.com/hmg-prod/images/bowl-de-salmon-ahumado-patata-y-aguacate-menus-energia-cuarentena-1585414962.jpg?resize=980:*",
    },
    {
      id: 3,
      title: "Ejercicios de 10 minutos para hacer en casa",
      category: "Ejercicio",
      readTime: "4 min",
      image: "https://i.ytimg.com/vi/5yjDNw0QWAA/hqdefault.jpg",
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "Reto de 30 días de meditación",
      participants: 1245,
      image: "https://i.ytimg.com/vi/Kjk41ivryqQ/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Reto de hidratación: 8 vasos al día",
      participants: 3567,
      image: "https://files.pucp.education/puntoedu/wp-content/uploads/2021/01/23083219/agua-hidratacion-01-01.png",
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explorar</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <Searchbar
          placeholder="Buscar temas, ejercicios, recetas..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
          iconColor="#94a3b8"
          placeholderTextColor="#94a3b8"
        />

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categorías</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                <Ionicons name={category.icon} size={24} color="#ffffff" />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured */}
        <Text style={styles.sectionTitle}>Destacados</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredContainer}>
          {articles.map((article) => (
            <Card key={article.id} style={styles.featuredCard}>
              <Image source={{ uri: article.image }} style={styles.featuredImage} />
              <LinearGradient
                colors={["transparent", "rgba(15, 23, 42, 0.9)"]} // transparent to slate-950
                style={styles.featuredGradient}
              />
              <View style={styles.featuredContent}>
                <Text style={styles.featuredCategory}>{article.category}</Text>
                <Text style={styles.featuredTitle}>{article.title}</Text>
                <Text style={styles.featuredReadTime}>{article.readTime} de lectura</Text>
              </View>
            </Card>
          ))}
        </ScrollView>

        {/* Challenges */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Retos</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllLink}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.challengesContainer}>
          {challenges.map((challenge) => (
            <Card key={challenge.id} style={styles.challengeCard}>
              <Image source={{ uri: challenge.image }} style={styles.challengeImage} />
              <LinearGradient
                colors={["transparent", "rgba(15, 23, 42, 0.9)"]} // transparent to slate-950
                style={styles.challengeGradient}
              />
              <View style={styles.challengeContent}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <View style={styles.challengeMeta}>
                  <Ionicons name="people" size={16} color="#94a3b8" />
                  <Text style={styles.challengeParticipants}>
                    {challenge.participants.toLocaleString()} participantes
                  </Text>
                </View>
                <TouchableOpacity style={styles.joinButton}>
                  <Text style={styles.joinButtonText}>Unirse</Text>
                </TouchableOpacity>
              </View>
            </Card>
          ))}
        </View>

        {/* Padding at bottom */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-950
  },
  header: {
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchBar: {
    marginTop: 16,
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    elevation: 0,
  },
  searchInput: {
    color: "#ffffff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginTop: 24,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: "48%",
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryName: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  featuredContainer: {
    marginBottom: 8,
  },
  featuredCard: {
    width: 280,
    height: 180,
    marginRight: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1e293b", // slate-800
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  featuredImage: {
    width: "100%",
    height: "100%",
  },
  featuredGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  featuredContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  featuredCategory: {
    color: "#60a5fa", // blue-400
    fontSize: 12,
    marginBottom: 4,
  },
  featuredTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  featuredReadTime: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  seeAllLink: {
    color: "#60a5fa", // blue-400
    fontSize: 14,
  },
  challengesContainer: {
    marginBottom: 8,
  },
  challengeCard: {
    height: 200,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1e293b", // slate-800
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  challengeImage: {
    width: "100%",
    height: "100%",
  },
  challengeGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  challengeContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  challengeTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  challengeMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  challengeParticipants: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
    marginLeft: 6,
  },
  joinButton: {
    backgroundColor: "#3b82f6", // blue-500
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  joinButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
})