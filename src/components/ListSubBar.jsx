import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListSubBar = ({leftText,rightText}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.leftText}>{leftText}</Text>
      <Text style={styles.rightText}>{rightText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    
  },
  leftText: {
    textAlign: 'left',
    fontSize: 24,
    fontFamily:"OpenSansBold",
    // fontWeight: 'bold',
    color: '#000000',
  },
  rightText: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24A19C',
  },
});

export default ListSubBar;
