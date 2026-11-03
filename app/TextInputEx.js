import { View, Text, 
    Alert, TextInput, Button, Keyboard, StyleSheet} from 'react-native'
import React, {useState} from 'react'

const TextInputEx = () => {
    const [name, setName]= useState("")
    const [showName, setShowName] = useState(false)

    const showNameHandler=()=>{
        Keyboard.dismiss()
        Alert.alert(`Hello ${name}`)
    }

  return (
<View>
        <View >
      <Text style={styles.heading}>TextInputEx</Text>

      <TextInput 
      style={styles.input}
      placeholder='Enter your name'
      onChangeText={setName}
      />
      
    </View>
    <View>
        <Button 
        title='Submit'
        onPress={showNameHandler}
        />
    </View>
    <View>
        {showName && (
            <Text>
            Hello, {name}
        </Text>
        )}
    </View>
</View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#94a3b8',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    fontSize: 16
  },

  result: {
    fontSize: 20,
    marginTop: 25,
    fontWeight: 'bold',
    color: '#2563eb'
  }

});

export default TextInputEx