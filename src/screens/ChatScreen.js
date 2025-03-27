"use client"

import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

export default function ChatScreen() {
  const [message, setMessage] = useState("")

  const messages = [
    {
      id: 1,
      sender: "bot",
      text: "¡Hola! Soy tu asistente de bienestar. ¿En qué puedo ayudarte hoy?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Hola, me gustaría mejorar mi rutina de ejercicios",
      time: "10:31 AM",
    },
    {
      id: 3,
      sender: "bot",
      text: "¡Claro! Basado en tu perfil, te recomendaría empezar con 3 sesiones semanales de 30 minutos. ¿Prefieres ejercicios de cardio o de fuerza?",
      time: "10:31 AM",
    },
    {
      id: 4,
      sender: "user",
      text: "Prefiero ejercicios de fuerza",
      time: "10:32 AM",
    },
    {
      id: 5,
      sender: "bot",
      text: "Excelente elección. He creado una rutina personalizada de ejercicios de fuerza para ti. Puedes encontrarla en la sección de Ejercicios. ¿Te gustaría que te recomiende algunos ejercicios específicos para comenzar?",
      time: "10:33 AM",
    },
  ]

  const handleSend = () => {
    if (message.trim() === "") return
    // Logic to send message would go here
    setMessage("")
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Chat Messages */}
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[styles.messageBubble, msg.sender === "user" ? styles.userBubble : styles.botBubble]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
            <Text style={styles.messageTime}>{msg.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Area */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          placeholderTextColor="#94a3b8"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color="#ffffff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // slate-950
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messagesContent: {
    paddingBottom: 8,
  },
  messageBubble: {
    maxWidth: "80%",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  userBubble: {
    backgroundColor: "#3b82f6", // blue-500
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#334155", // slate-700
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#ffffff",
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#1e293b", // slate-800
    borderTopWidth: 1,
    borderTopColor: "#334155", // slate-700
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#334155", // slate-700
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: "#ffffff",
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: "#3b82f6", // blue-500
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
})

