import React from 'react'
import colors from '../constants/colors'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  const { header, headerTitle} = styles
  const { primary } = colors
  return (
    <View style={header}>
      <Text style={headerTitle}>Guess a Number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle : {
    color: 'white',
    fontSize: 18
  }
})

export default Header
