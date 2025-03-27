import { View, Text, StyleSheet } from "react-native"
import CircularProgress from 'react-native-circular-progress-indicator';

export default function WellnessScore({ score }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CircularProgress
          value={score}
          radius={40}
          duration={1500}
          progressValueColor={"#ffffff"}
          maxValue={100}
          title={"%"}
          titleColor={"#ffffff"}
          titleStyle={{ fontWeight: "bold" }}
          activeStrokeColor={"#3b82f6"} // blue-500
          inActiveStrokeColor={"#1e293b"} // slate-800
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={6}
          activeStrokeWidth={12}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Índice de Bienestar</Text>
          <Text style={styles.subtitle}>Buen progreso esta semana</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>+5% vs semana anterior</Text>
          </View>
        </View>
      </View>
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
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
    marginTop: 4,
  },
  badgeContainer: {
    marginTop: 8,
  },
  badge: {
    backgroundColor: "rgba(59, 130, 246, 0.2)", // blue-500 with opacity
    color: "#60a5fa", // blue-400
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
})