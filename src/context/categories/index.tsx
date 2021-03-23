import React, {createContext, useContext, useState} from 'react';
import {Modal, View, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {ICategoriesContext, ICategoriesProvider} from './types';
import {ExpenseSVG} from '../../assets/svgs';
import {ICON_SIZE, PRIMARY_COLOR, WINDOW_WIDTH} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

const DATA = [...Array(30).keys()].map((_, i) => i);

const CategoriesContext = createContext<ICategoriesContext>({
  value: '',
  handleOpen: () => {},
  handleClose: () => {},
});

export const CategoriesProvider = ({children}: ICategoriesProvider) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleOpen = () => setModalVisible(true);

  const handleClose = () => setModalVisible(false);

  return (
    <CategoriesContext.Provider value={{value, handleOpen, handleClose}}>
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
              <View style={styles.categoriesContainer}>
                <ScrollView
                  horizontal
                  decelerationRate={0}
                  disableIntervalMomentum={true}
                  snapToInterval={ICON_SIZE * 2}
                  showsHorizontalScrollIndicator={false}>
                  {DATA.map((category) => {
                    return (
                      <View style={styles.category}>
                        <ExpenseSVG
                          fill={PRIMARY_COLOR}
                          width={ICON_SIZE}
                          height={ICON_SIZE}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
