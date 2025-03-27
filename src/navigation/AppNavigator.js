import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { Ionicons } from "@expo/vector-icons"

// Screens
import HomeScreen from "../screens/HomeScreen"
import ExerciseScreen from "../screens/ExerciseScreen"
import MindfulnessScreen from "../screens/MindfulnessScreen"
import ExploreScreen from "../screens/ExploreScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ChatScreen from "../screens/ChatScreen"
import NutritionScreen from "../screens/NutritionScreen"

// Configuración de los navegadores
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// Personalizar tema
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#0f172a", // slate-950
    card: "#1e293b", // slate-800
    text: "#ffffff",
    border: "#334155", // slate-700
    primary: "#3b82f6", // blue-500
  },
}

// Configuración de íconos para las pestañas
const tabIcons = {
  Inicio: "home",
  Ejercicio: "fitness",
  Mindfulness: "moon",
  Explorar: "compass",
  Perfil: "person",
}

// Función para obtener el ícono de la pestaña
const getTabBarIcon = (route, focused, color, size) => {
  const iconName = focused ? tabIcons[route.name] : `${tabIcons[route.name]}-outline`
  return <Ionicons name={iconName} size={size} color={color} />
}

// Configuración de navegación con pestañas inferiores
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: "#3b82f6", // blue-500
        tabBarInactiveTintColor: "#94a3b8", // slate-400
        tabBarStyle: {
          backgroundColor: "#1e293b", // slate-800
          borderTopColor: "#334155", // slate-700
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, marginBottom: 3 },
      })}
    >
      {Object.keys(tabIcons).map((name) => (
        <Tab.Screen key={name} name={name} component={getComponent(name)} />
      ))}
    </Tab.Navigator>
  )
}

// Función para obtener el componente correcto de cada pantalla
function getComponent(name) {
  const screens = {
    Inicio: HomeScreen,
    Ejercicio: ExerciseScreen,
    Mindfulness: MindfulnessScreen,
    Explorar: ExploreScreen,
    Perfil: ProfileScreen,
  }
  return screens[name]
}

// Navegación principal con Stack
export default function AppNavigation() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1e293b", // slate-800
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#ffffff",
          cardStyle: { backgroundColor: "#0f172a" }, // slate-950
        }}
      >
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: "Asistente de Bienestar", headerBackTitleVisible: false }} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} options={{ title: "Nutrición", headerBackTitleVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
