import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function MeuComponente() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardSubtitle}>Criando aplicações para Android e iOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 3,
      marginVertical: 12
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    cardSubtitle: {
      color: '#999',
      fontSize: 14
    }
});