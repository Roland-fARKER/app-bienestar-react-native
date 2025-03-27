import { TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function ChatbotButton() {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate("Chat")
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons name="chatbubble" size={24} color="#ffffff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 16,
    bottom: 10,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3b82f6", // blue-500
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})