import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ style, children }) => {
  const { card } = styles
  return (
    <View style={{...card, ...style}}>{children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12
  }
})

export default Card
