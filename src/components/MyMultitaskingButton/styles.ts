import {StyleSheet} from 'react-native';
import {
  BOTTOM_BUTTON_HEIGHT,
  MINI_BOTTOM_BUTTON_HEIGHT,
  PRIMARY_COLOR,
} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: BOTTOM_BUTTON_HEIGHT,
    height: BOTTOM_BUTTON_HEIGHT,
    borderRadius: BOTTOM_BUTTON_HEIGHT / 2,

    backgroundColor: PRIMARY_COLOR,
    // borderColor: PRIMARY_COLOR,
    // borderWidth: 1,

    ...useShadow({deep: 15, color: PRIMARY_COLOR}),
  },
  miniButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    width: BOTTOM_BUTTON_HEIGHT / 2,
    height: BOTTOM_BUTTON_HEIGHT / 2,
    borderRadius: BOTTOM_BUTTON_HEIGHT / 4,

    backgroundColor: PRIMARY_COLOR,
    // borderColor: PRIMARY_COLOR,
    // borderWidth: 1,

    ...useShadow({deep: 15, color: PRIMARY_COLOR}),
  },
});
