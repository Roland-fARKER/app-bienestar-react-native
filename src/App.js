import { StatusBar } from "expo-status-bar"
import { Provider as PaperProvider, DefaultTheme as PaperTheme } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"
import AppNavigation from "./navigation/AppNavigator"

// Personalizar tema para React Native Paper
const paperTheme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    primary: "#3b82f6", // blue-500
    accent: "#60a5fa", // blue-400
    background: "#0f172a", // slate-950
    surface: "#1e293b", // slate-800
    text: "#ffffff",
    placeholder: "#94a3b8", // slate-400
  },
  dark: true,
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <StatusBar style="light" />
        <AppNavigation />
      </PaperProvider>
    </SafeAreaProvider>
  )
}
