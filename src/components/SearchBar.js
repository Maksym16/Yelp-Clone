import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange }) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.searchStyle} />
      <TextInput 
        style={styles.inputStyle} 
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },

  searchStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },

  inputStyle: {
    flex: 1,
  },
});
