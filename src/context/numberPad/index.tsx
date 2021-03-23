import React, {createContext, useContext, useState} from 'react';
import {Modal, TouchableWithoutFeedback, Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {INumberPadContext, INumberPadProvider} from './types';
import {styles} from './styles';
import {MyText} from '../../components';
import {BackspaceSVG} from '../../assets/svgs';
import {ICON_SIZE, THIRD_COLOR} from '../../constants';

const NumberPadContext = createContext<INumberPadContext>({
  value: '',
  handleOpen: () => {},
  handleClose: () => {},
});

const DATA = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Backspace',
  '0',
  'Done',
];

export const NumberPadProvider = ({children}: INumberPadProvider) => {
  const [modalVisible, setModalVisible] = useState(!false);
  const [value, setValue] = useState<string>('');

  const handleOpen = () => setModalVisible(true);

  const handleClose = () => setModalVisible(false);

  const handlePress = (key: string) => {
    switch (key) {
      case 'Backspace':
        value.length > 0 && setValue((prevState) => prevState.slice(0, -1));
        return;
      case 'Done':
        handleClose();
        return;
      default:
        setValue((prevState) => prevState.concat(key));
        return;
    }
  };

  return (
    <NumberPadContext.Provider
      value={{
        value,
        handleOpen,
        handleClose,
      }}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.modalView}>
            <SafeAreaView>
              <View style={styles.numbersContainer}>
                {DATA.map((number, index) => {
                  const isLast = index === DATA.length - 1;
                  const isLastColumn = (index + 1) % 3 !== 0;
                  const isLastRow = index < DATA.length - 3;
                  const isBackspace = index === 9;
                  return (
                    <Pressable
                      key={index}
                      style={[
                        styles.number,
                        isLastColumn && styles.borderRight,
                        isLastRow && styles.borderBottom,
                        isLast && styles.done,
                      ]}
                      onPress={() => handlePress(number)}>
                      {isBackspace ? (
                        <BackspaceSVG
                          fill={THIRD_COLOR}
                          width={ICON_SIZE}
                          height={ICON_SIZE}
                        />
                      ) : (
                        <MyText style={[isLast && styles.doneText]} h5>
                          {number}
                        </MyText>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </NumberPadContext.Provider>
  );
};

export const useNumberPad = () => useContext(NumberPadContext);
