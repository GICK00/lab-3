import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  const YourName = 'Богдан';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is {'YourName'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
