import React from "react";
import { ActivityIndicator, StyleSheet, StatusBar, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdf6aa',
        paddingHorizontal: 30
    }
});

export default function Loading() {
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <ActivityIndicator size="large" color="#2c2c2c" />
    </View>
}