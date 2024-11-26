import Login from "./screens/LoginPage";
import Register from "./screens/RegisterPage";
import Welcome from "./screens/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import fonts from "./config/fonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            statusBarColor: Colors.primary,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
