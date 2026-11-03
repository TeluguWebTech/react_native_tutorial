import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Horizontal = () => {
    
  const categories = [
    'Electronics',
    'Mobiles',
    'Fashion',
    'Laptops',
    'Furniture',
    'Books',
    'Sports',
    'Groceries'
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <View>
       <ScrollView horizontal={true}
       showsHorizontalScrollIndicator={false}
       >
         {categories.map((item, index)=>(
            <View style={styles.card} key={index}>
                <Text style={styles.category}>
                    {item}
                </Text>
            </View>
        ))}
       </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25
  },

  card: {
    width: 140,
    height: 100,
    backgroundColor: '#2563eb',
    marginRight: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  }

});
export default Horizontal