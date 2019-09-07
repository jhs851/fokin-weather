import React from "react";
import { ActivityIndicator, Text, StyleSheet, StatusBar, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fdf6aa',
        paddingHorizontal: 20
    },
    icon: {
        marginBottom: 10
    },
    text: {
        fontWeight: '600',
        fontSize: 18,
        color: '#2c2c2c'
    }
});

export default function Loading() {
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <ActivityIndicator size="large" color="#2c2c2c" style={styles.icon} />

        <Text style={styles.text}>날씨 정보를 가져오고 있습니다</Text>
    </View>
}