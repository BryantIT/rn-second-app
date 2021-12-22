import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const genRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const ranNum = Math.floor(Math.random() * (max - min)) + min
  if (ranNum === exclude) {
    return genRandomBetween(min, max, exclude)
  } else {
    return ranNum
  }
}

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(genRandomBetween(1, 100, userChoice))
  const { screen, buttonContainer } = styles
  return (
    <View style={screen}>
      <Text>Computer's Guess</Text>
      <NumberContainer selectedNum={currentGuess} />
      <Card style={buttonContainer}>
        <Button title='LOWER' />
        <Button title='HIGHER' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

export default GameScreen
