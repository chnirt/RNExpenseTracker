import React, {useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import {IMyModal} from './types';
import {styles} from './styles';

export function MyCalendar(props: IMyModal) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.centeredView, {marginTop: 30}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, {justifyContent: 'flex-end'}]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}
