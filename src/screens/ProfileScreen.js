import React from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Card, Avatar, Switch, Divider } from "react-native-paper"
import { Ionicons } from "@expo/vector-icons"

export default function ProfileScreen() {
  const profileSections = [
    {
      title: "Cuenta",
      items: [
        {
          icon: "person-outline",
          label: "Información Personal",
          link: "/profile/personal-info",
        },
        {
          icon: "notifications-outline",
          label: "Notificaciones",
          link: "/profile/notifications",
        },
        {
          icon: "settings-outline",
          label: "Configuración",
          link: "/profile/settings",
        },
      ],
    },
    {
      title: "Preferencias",
      items: [
        {
          icon: "moon-outline",
          label: "Modo Oscuro",
          isToggle: true,
        },
      ],
    },
    {
      title: "Sesión",
      items: [
        {
          icon: "log-out-outline",
          label: "Cerrar Sesión",
          link: "/logout",
          danger: true,
        },
      ],
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Card style={styles.profileCard}>
            <Card.Content style={styles.profileContent}>
              <Avatar.Text size={64} label="JD" style={styles.avatar} labelStyle={styles.avatarLabel} />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Juan Díaz</Text>
                <Text style={styles.profileEmail}>juan.diaz@ejemplo.com</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>Editar Perfil</Text>
                </TouchableOpacity>
              </View>
            </Card.Content>
          </Card>
        </View>

        {profileSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Card style={styles.sectionCard}>
              {section.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <View style={styles.menuItem}>
                    <View style={styles.menuItemLeft}>
                      <Ionicons name={item.icon} size={20} color={item.danger ? "#ef4444" : "#94a3b8"} />
                      <Text style={[styles.menuItemLabel, item.danger && styles.dangerText]}>{item.label}</Text>
                    </View>
                    {item.isToggle ? (
                      <Switch color="#3b82f6" />
                    ) : (
                      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
                    )}
                  </View>
                  {itemIndex < section.items.length - 1 && <Divider style={styles.divider} />}
                </React.Fragment>
              ))}
            </Card>
          </View>
        ))}

        <Text style={styles.versionText}>Versión 1.0.0</Text>

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
  section: {
    marginTop: 20,
  },
  profileCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
  },
  profileContent: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#3b82f6", // blue-500
  },
  avatarLabel: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  profileEmail: {
    color: "#94a3b8", // slate-400
    fontSize: 14,
    marginTop: 2,
  },
  editButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#3b82f6", // blue-500
    alignSelf: "flex-start",
  },
  editButtonText: {
    color: "#60a5fa", // blue-400
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 12,
  },
  sectionCard: {
    backgroundColor: "#1e293b", // slate-800
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155", // slate-700
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemLabel: {
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 12,
  },
  dangerText: {
    color: "#ef4444", // red-400
  },
  divider: {
    backgroundColor: "#334155", // slate-700
  },
  versionText: {
    color: "#64748b", // slate-500
    fontSize: 14,
    textAlign: "center",
    marginTop: 24,
  },
})

