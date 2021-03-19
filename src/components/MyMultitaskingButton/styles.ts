import {StyleSheet} from 'react-native';
import {BOTTOM_BUTTON_HEIGHT} from '../../constants';

export const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    position: 'absolute',
    top: -BOTTOM_BUTTON_HEIGHT / 2,
    borderRadius: BOTTOM_BUTTON_HEIGHT / 2,
    backgroundColor: '#fff',
  },
});
