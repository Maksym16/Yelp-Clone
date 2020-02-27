import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import yelp from '../api/yelp'

export default function ResultsShowScreens({navigation}) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  }
  
  useEffect(() => {
    getResult(id)
  }, []);

  if (!result) {
    return null
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item}} />
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 150,
    marginHorizontal: 10
  }
});
