import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Card, Button } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function NutritionPlanCard() {
  const navigation = useNavigation()

  const meals = [
    {
      type: "Desayuno",
      icon: "cafe",
      name: "Tostadas de aguacate",
      time: "8:00 AM",
    },
    {
      type: "Almuerzo",
      icon: "restaurant",
      name: "Ensalada de quinoa",
      time: "1:00 PM",
    },
    {
      type: "Snack",
      icon: "nutrition",
      name: "Mix de frutos secos",
      time: "4:00 PM",
    },
  ]

  const handleViewPlan = () => {
    navigation.navigate("Nutrition")
  }

  const handleViewMeal = (mealType) => {
    navigation.navigate("Nutrition", { screen: "MealDetail", params: { type: mealType } })
  }

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <View style={styles.mealsList}>
          {meals.map((meal, index) => (
            <View key={index} style={[styles.mealItem, index !== meals.length - 1 && styles.mealItemBorder]}>
              <View style={styles.mealInfo}>
                <View style={styles.iconContainer}>
                  <Ionicons name={meal.icon} size={16} color="#94a3b8" />
                </View>
                <View style={styles.mealDetails}>
                  <Text style={styles.mealMeta}>
                    {meal.type} • {meal.time}
                  </Text>
                  <Text style={styles.mealName}>{meal.name}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleViewMeal(meal.type)}>
                <Text style={styles.viewLink}>Ver</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Button
          mode="contained"
          style={styles.viewPlanButton}
          labelStyle={styles.viewPlanButtonLabel}
          onPress={handleViewPlan}
        >
          Ver plan completo
        </Button>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  content: {
    padding: 16,
  },
  mealsList: {
    marginBottom: 16,
  },
  mealItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  mealItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#334155", // slate-700
  },
  mealInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    backgroundColor: "#334155", // slate-700
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  mealDetails: {
    flex: 1,
  },
  mealMeta: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
  },
  mealName: {
    color: "#ffffff",
    fontSize: 14,
  },
  viewLink: {
    color: "#60a5fa", // blue-400
    fontSize: 14,
  },
  viewPlanButton: {
    backgroundColor: "#3b82f6", // blue-500
    marginTop: 8,
  },
  viewPlanButtonLabel: {
    color: "#ffffff",
    fontSize: 14,
  },
})
