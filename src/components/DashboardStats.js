import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function DashboardStats() {
  const stats = [
    {
      icon: "flame",
      iconColor: "#f97316", // orange-400
      value: "1,245",
      label: "Calorías",
      change: "+12%",
      positive: true,
    },
    {
      icon: "pulse",
      iconColor: "#22c55e", // green-400
      value: "5,280",
      label: "Pasos",
      change: "-3%",
      positive: false,
    },
    {
      icon: "heart",
      iconColor: "#ef4444", // red-400
      value: "68",
      label: "BPM Prom.",
      change: "+2%",
      positive: true,
    },
  ]

  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statCard}>
          <View style={styles.statHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name={stat.icon} size={20} color={stat.iconColor} />
            </View>
            <Text style={[styles.changeText, stat.positive ? styles.positiveChange : styles.negativeChange]}>
              {stat.change}
            </Text>
          </View>
          <Text style={styles.valueText}>{stat.value}</Text>
          <Text style={styles.labelText}>{stat.label}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    padding: 12,
    width: "31%",
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  statHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  iconContainer: {
    backgroundColor: "#334155", // slate-700
    padding: 8,
    borderRadius: 8,
  },
  changeText: {
    fontSize: 12,
  },
  positiveChange: {
    color: "#22c55e", // green-400
  },
  negativeChange: {
    color: "#ef4444", // red-400
  },
  valueText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  labelText: {
    color: "#94a3b8", // slate-400
    fontSize: 12,
    marginTop: 2,
  },
})

