import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon } from '@rneui/base';


const ListSubBar = ({ leftText, rightText }) => {
  const [isModalShown, setModalShown] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{leftText}</Text>
      <TouchableOpacity onPress={() => setModalShown(!isModalShown)}>
        <Text style={styles.rightText}>{rightText}</Text>
      </TouchableOpacity>
      <Modal visible={isModalShown} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Add Item</Text>
            <TextInput placeholder='item name'/>
            <Text> </Text>
            <TextInput placeholder='quantity'/>
            <TouchableOpacity onPress={() => setModalShown(false)} style={styles.close}>
              
              <Icon name='check'
                size={30}
                color={"#3ab37c"}

              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontFamily: 'OpenSansBold',
    color: '#000000',
  },
  rightText: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24A19C',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    minWidth: 300, // Adjust the value according to your requirement
  },
  closeButton: {
    marginTop: 10,
    color: '#24A19C',
    textAlign: 'center',
  },
  modalHeading:{
    alignSelf:"center",
    marginBottom:15,
    fontFamily:"OpenSansBold",
    fontSize:29,
    color:"#000000"
  },
  close:{
    height:36,
    width:60,
    backgroundColor:"#EA6A6A",
    alignSelf:"center",
    borderRadius:10,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default ListSubBar;
