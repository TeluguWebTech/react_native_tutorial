import { View, 
    TouchableWithoutFeedback,
    Text, TextInput, Button,StyleSheet, Alert, Keyboard } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const loginHandler = ()=>{
        Keyboard.dismiss()
        Alert.alert("Login Success")
        setEmail("")
        setPassword("")
    }
    
  return (
 <>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View >
      <Text style={styles.heading}>LoginForm</Text>
      <TextInput 
      placeholder='Enter Email'
      keyboardType='email-address'
      autoCapitalize='none'
      value={email}
    style={styles.input}
    onChangeText={setEmail}
      />
      <TextInput 
      style={styles.input}
      placeholder='Enter Password'
      secureTextEntry={false}
      value={password}
      onChangeText={setPassword}
      />
    <Button 
        title='Login'
        onPress={loginHandler}
        />
        </View>
  </TouchableWithoutFeedback>
 </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f1f5f9'
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20
  }

});

export default LoginForm