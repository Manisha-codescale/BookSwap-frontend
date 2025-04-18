import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: '#007BFF', padding: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;