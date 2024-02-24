import { createNativeStackNavigator } from "@react-navigation/native-stack"
import StoreScreen from "../screens/StoreScreen";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Store" >
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name="Store" options={{headerShown: false}} component={StoreScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation