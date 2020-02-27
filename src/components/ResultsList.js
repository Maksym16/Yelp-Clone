import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetails from '../components/ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
  if (!results.length) {
    return null
  }
  
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
            >
              <ResultDetails item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);