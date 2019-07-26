import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  helloContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helloText: {
    fontSize: 30
  }
});

const App = () => (
  <View style={styles.helloContainer}>
    <Text style={styles.helloText}>Hello, 世界.</Text>
  </View>
);

export default App;
