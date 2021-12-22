import React, { useState } from 'react'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import { StyleSheet, View } from 'react-native'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const { screen } = styles

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen startGameHandler={startGameHandler} />

if (userNumber) {
  content = <GameScreen userChoice={userNumber}/>
}
  return (
    <View style={screen}>
      <Header />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
