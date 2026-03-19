import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from 'react-native';
import { WelCome } from "./src/screens/WellCome/WellCome";
import { Cadastro } from "./src/screens/Cadastro/Cadastro";
import { NavigationContainer } from '@react-navigation/native';
import { LogIn } from './src/screens/LogIn/LogIn';
import { Home } from './src/screens/Home/Home';
import { Routes } from './src/routes';




export default function App() {
  return (

    <View style={styles.container}>
        <Routes />
        <StatusBar style='auto' backgroundColor='#0597F2'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4FF"
    }
})