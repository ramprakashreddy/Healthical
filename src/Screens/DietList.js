import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import axios from 'axios';
import { FoodCard } from "../Components/FoodCard";
import { showNotification } from "../Utils/Utils";

export default function Diet({ navigation, route }) {
    const { BMI } = route.params;

    console.log(BMI)
    return (
        <View>
            <Text>
                DIET PLAN
            </Text>
        </View>

    );

}