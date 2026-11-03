import { View, Text, StyleSheet, Alert} from 'react-native'
import React from 'react'

const Button = () => {
    
    const showAlert=()=>{
        Alert.alert("Hi how are you?")
    }
  return (
    <View style={styles.container}>
        <View style={styles.button}>

      <Text style={styles.buttonText}
      onPress={showAlert}
      >Click Me</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9'
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});

export default Button