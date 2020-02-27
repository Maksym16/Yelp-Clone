import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({item}) => {
  console.log(item)
  return (
    <View style={styles.rest_container}>
      <Image style={styles.rest_image} source={{ uri: item.image_url}} />
      <Text style={styles.rest_name}>{item.name}</Text>
      <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rest_container: {
    marginLeft: 15
  },

  rest_image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },

  rest_name: {
    fontSize: 15,
    fontWeight: 'bold',
   
  },

  rest_review: {
    marginHorizontal: 5,
  },
});

export default ResultsDetail;