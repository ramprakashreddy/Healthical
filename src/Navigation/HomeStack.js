import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import Icon from '@expo/vector-icons/MaterialIcons';
import * as firebase from 'firebase';
import ChatBot from "../Screens/ChatBot";
import BMICalculator from "../Screens/BMICalculator";
import DietList from "../Screens/DietList";
import FoodDetail from "../Screens/FoodDetail";



const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: "#eaf1f9",
                    headerStyle: {
                        backgroundColor: "#5ca0ff"
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home}
                />
                <Stack.Screen name="ChatBot" component={ChatBot}
                    options={{ headerTitle: "Healthical Bot" }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}