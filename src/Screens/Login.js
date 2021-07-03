import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase';
import { Input } from "../Components/Input";
import { Height, Width, showNotification } from '../Utils/Utils';

export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#eaf3fa' }}>
            <Text>
                Login
            </Text>
        </View>

    )
}