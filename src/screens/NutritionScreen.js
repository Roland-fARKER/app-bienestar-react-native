import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Card, Button } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"

export default function NutritionScreen() {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
  const currentDay = 3 // Thursday

  const meals = [
    {
      type: "Desayuno",
      time: "8:00 AM",
      items: [
        { name: "Tostadas de aguacate", calories: 320, protein: 12, carbs: 35, fat: 15 },
        { name: "Café con leche de almendras", calories: 40, protein: 1, carbs: 2, fat: 3 },
      ],
    },
    {
      type: "Snack",
      time: "11:00 AM",
      items: [{ name: "Yogur griego con frutos rojos", calories: 180, protein: 15, carbs: 20, fat: 5 }],
    },
    {
      type: "Almuerzo",
      time: "1:00 PM",
      items: [
        { name: "Ensalada de quinoa", calories: 420, protein: 18, carbs: 45, fat: 20 },
        { name: "Agua con limón", calories: 5, protein: 0, carbs: 1, fat: 0 },
      ],
    },
    {
      type: "Snack",
      time: "4:00 PM",
      items: [{ name: "Mix de frutos secos", calories: 210, protein: 8, carbs: 12, fat: 16 }],
    },
    {
      type: "Cena",
      time: "7:30 PM",
      items: [{ name: "Salmón al horno con verduras", calories: 380, protein: 32, carbs: 15, fat: 22 }],
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nutrición</Text>
        <TouchableOpacity style={styles.calendarButton}>
          <Ionicons name="calendar" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Plan de Alimentación</Text>
            <Button mode="outlined" style={styles.customizeButton} labelStyle={styles.customizeButtonLabel}>
              Personalizar
            </Button>
          </View>

          {/* Day selector */}
          <View style={styles.daysContainer}>
            {days.map((day, index) => (
              <View key={index} style={styles.dayItem}>
                <Text style={[styles.dayText, index === currentDay && styles.activeDayText]}>{day}</Text>
                <View style={[styles.dayNumber, index === currentDay && styles.activeDayNumber]}>
                  <Text style={[styles.dayNumberText, index === currentDay && styles.activeDayNumberText]}>
                    {index + 1}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Nutrition summary */}
          <Card style={styles.summaryCard}>
            <Card.Content style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Resumen Nutricional</Text>
              <View style={styles.macrosContainer}>
                <View style={styles.macroItem}>
                  <Text style={styles.macroValue}>1,560</Text>
                  <Text style={styles.macroLabel}>Calorías</Text>
                </View>
                <View style={styles.macroItem}>
                  <Text style={styles.macroValue}>86g</Text>
                  <Text style={styles.macroLabel}>Proteínas</Text>
                </View>
                <View style={styles.macroItem}>
                  <Text style={styles.macroValue}>130g</Text>
                  <Text style={styles.macroLabel}>Carbos</Text>
                </View>
                <View style={styles.macroItem}>
                  <Text style={styles.macroValue}>81g</Text>
                  <Text style={styles.macroLabel}>Grasas</Text>
                </View>
              </View>
            </Card.Content>
          </Card>

          {/* Meals */}
          <View style={styles.mealsList}>
            {meals.map((meal, index) => (
              <Card key={index} style={styles.mealCard}>
                <Card.Content style={styles.mealContent}>
                  <View style={styles.mealHeader}>
                    <View>
                      <Text style={styles.mealType}>{meal.type}</Text>
                      <Text style={styles.mealTime}>{meal.time}</Text>
                    </View>
                    <TouchableOpacity>
                      <Ionicons name="chevron-forward" size={24} color="#94a3b8" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.mealItems}>
                    {meal.items.map((item, itemIndex) => (
                      <View key={itemIndex} style={styles.mealItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCalories}>{item.calories} kcal</Text>
                      </View>
                    ))}
                  </View>
                </Card.Content>
              </Card>
            ))}
          </View>

          {/* Padding at bottom */}
          <View style={{ height: 20 }} />
        </View>
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
  calendarButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  customizeButton: {
    borderColor: "#3b82f6", // blue-500
  },
  customizeButtonLabel: {
    color: "#60a5fa", // blue-400
    fontSize: 12,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  dayItem: {
    alignItems: "center",
  },
  dayText: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
  },
  activeDayText: {
    color: "#60a5fa", // blue-400
  },
  dayNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  activeDayNumber: {
    backgroundColor: "rgba(59, 130, 246, 0.2)", // blue-500 with opacity
  },
  dayNumberText: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
  },
  activeDayNumberText: {
    color: "#60a5fa", // blue-400
    fontWeight: "500",
  },
  summaryCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  summaryContent: {
    padding: 16,
  },
  summaryTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  macrosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  macroItem: {
    alignItems: "center",
  },
  macroValue: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  macroLabel: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
    marginTop: 2,
  },
  mealsList: {
    marginTop: 8,
  },
  mealCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  mealContent: {
    padding: 16,
  },
  mealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  mealType: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  mealTime: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
  },
  mealItems: {
    marginTop: 4,
  },
  mealItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  itemName: {
    color: "#ffffff",
    fontSize: 14,
  },
  itemCalories: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
  },
})