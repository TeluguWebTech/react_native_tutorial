import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const myImage = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="

const image = () => {
  return (
    <View style={styles.container}>
     <Image 
     source={{uri:myImage}}
     style ={{width:200, height:200}}
     />
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  image: {
    width: 200,
    height: 200,
  },

});
export default image