import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { TextInput,RadioButton } from 'react-native-paper';
import { Icon } from '@rneui/base';

import styles from '../styles/ListSubBar1Styles';

import { firebase } from '@react-native-firebase/database';

const ListSubBar1 = ({ leftText, rightText,email }) => {
  const [isModalShown, setModalShown] = useState(false);
  const [text,setText] = useState('');
  const [checked, setChecked] = useState('');


  const AddtoDb = ()=> {
    const reference =  firebase
    .app()
    .database(
      'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
    .ref(`/users/${email}/items/`)
    .push();
    const newItemData = {
      name: text,
      category: checked
    };
    reference.set(newItemData);
    
  }



  

  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{leftText}</Text>
      <TouchableOpacity onPress={() => {setModalShown(!isModalShown);setChecked('');setText('')}}>
        <Text style={styles.rightText}>{rightText}</Text>
      </TouchableOpacity>
      <Modal visible={isModalShown} transparent={true}  animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Add Item</Text>
            <TextInput  style= {{marginBottom:9}} 
            value={text}
            onChangeText={text => setText(text)}
            placeholder='item name'/>
            

            <Text style={styles.cathead}>Choose Category</Text>
 <View>
      <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
        <View style={{ flexDirection: 'row',alignItems: 'center'}}>
          <RadioButton.Item  value="food" />
          <Text style={styles.eachCat}>Food</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Item  value="entertainments" />
            <Text style={styles.eachCat}>entertainments</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Item  value="medicine" />
          <Text style={styles.eachCat}>medicine</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Item  value="others" />
          <Text style={styles.eachCat}>others</Text>
        </View>
      </RadioButton.Group>
    </View>





            <TouchableOpacity onPress={() =>{
              if ((text==='')||(checked==='')) {
                
                setModalShown(false);
              } else {
                AddtoDb()
                setModalShown(false);
              }
              
              
              
            
            }} style={styles.close}>
              
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


export default ListSubBar1;
