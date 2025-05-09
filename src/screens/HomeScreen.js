import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

// Componentes
import WellnessScore from "../components/WellnessScore"
import HabitTracker from "../components/HabitTracker"
import RecommendedWorkouts from "../components/RecommendedWorkouts"
import DashboardStats from "../components/DashboardStats"
import MindfulnessCard from "../components/MindfulnessCard"
import NutritionPlanCard from "../components/NutritionPlanCard"
import ChatbotButton from "../components/ChatbotButton"

export default function HomeScreen() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bienestar app movil</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu-outline" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.greeting}>Hola, Usuario</Text>
          <WellnessScore score={78} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Seguimiento de Hábitos</Text>
          <HabitTracker />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rutinas Recomendadas</Text>
          <RecommendedWorkouts />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mindfulness</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Mindfulness")}>
              <Text style={styles.seeAllLink}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <MindfulnessCard title="Meditación Guiada" duration="10 min" image="https://psiconecta.org/wp-content/uploads/2019/11/2887075.jpg" />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Plan de Alimentación</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Nutrition")}>
              <Text style={styles.seeAllLink}>Ver todo</Text>
            </TouchableOpacity>
          </View>
          <NutritionPlanCard />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estadísticas</Text>
          <DashboardStats />
        </View>

        {/* Padding at bottom for floating button */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Chatbot Button */}
      <ChatbotButton />
    </SafeAreaView>
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
  menuButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  seeAllLink: {
    color: "#60a5fa", // blue-400
    fontSize: 14,
  },
})

