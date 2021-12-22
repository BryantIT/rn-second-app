import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NumberContainer = ({ selectedNum }) => {
  const { container, number } = styles
  return (
    <View style={container}>
      <Text style={number}>{selectedNum}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: 'black',
    fontSize: 22
  }
})


export default NumberContainer
