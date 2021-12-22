import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = ({ style, ...rest }) => {
  const { input } = styles
  return (
    <TextInput {...rest} style={{...style, ...input  }}/>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})

export default Input
