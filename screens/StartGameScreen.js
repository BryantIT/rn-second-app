import React, { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import colors from '../constants/colors'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
 } from 'react-native'

const StartGameScreen = ({ startGameHandler }) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNum, setSelectedNum] = useState()
  const {
    screen,
    title,
    buttonContainer,
    cardStyles,
    button,
    input,
    summaryContainer } = styles
  const { primary } = colors

  const inputHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const num = parseInt(enteredValue)
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert('Invalid Number', 'Number has to be a valid number between 1-99', [{
        text: 'Okay', style: 'destructive', onPress: resetInputHandler
      }])
      return
    }
    setConfirmed(true)
    setSelectedNum(num)
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput

  if(confirmed) {
    confirmedOutput = (
      <Card style={summaryContainer}>
        <Text>You Selected</Text>
      <NumberContainer selectedNum={selectedNum}/>
    <Button title='START GAME' onPress={() => startGameHandler(selectedNum)}/>
      </Card>
    )
  }
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={screen}>
        <Text style={title}>Start a New Game</Text>
      <Card style={cardStyles}>
        <Text>Enter a Two Digit Number</Text>
      <Input
        style={input}
        blurOnSubmit
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={inputHandler}
        value={enteredValue}
       />
      <View style={buttonContainer}>
        <View style={button}>
          <Button
          title='reset'
          color={primary}
          onPress={resetInputHandler}
        />
      </View>
        <View style={button}>
          <Button
            title='confirm'
            color={primary}
            onPress={confirmInputHandler}
          />
        </View>
      </View>
      </Card>
      {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  cardStyles: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
})

export default StartGameScreen
