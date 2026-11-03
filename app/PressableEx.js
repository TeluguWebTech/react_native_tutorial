import { View, Text, Pressable, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const PressableEx = () => {

    const [pressed, setPressed] = useState(false)

    const longPressHandler =()=>{
        Alert.alert("welcom to React Native")
    }

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: "blue",
                padding: 30,
            }}>
                <Pressable
                onPressIn={()=>setPressed(true)}
                onPressOut={()=>setPressed(false)}
                >
                    <Text style={{ color: "#ffffff", }}>
                        {pressed ? "continuing" : "Click Me"}
                    </Text>
                   
                </Pressable>
            </View>
            <Pressable
                onLongPress={longPressHandler}
                delayLongPr={1500}
            >
                <View style={{
                backgroundColor: "green", marginTop:20,
                padding: 30,
            }}>
                 <Text >
                       Long Press Button
                    </Text>
            </View>
            </Pressable>
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

export default PressableEx