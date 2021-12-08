import React from 'react'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import { StyleSheet, View } from 'react-native'

export default function App() {
  const { screen } = styles
  return (
    <View style={screen}>
      <Header />
    <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
