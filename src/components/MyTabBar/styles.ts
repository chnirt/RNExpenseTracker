import {create} from '../../utils';
import {BOTTOM_HEIGHT, PRIMARY_COLOR} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
  },
  safeView: {
    backgroundColor: '#FFFFFF',
    ...useShadow({deep: 10, color: PRIMARY_COLOR}),
  },
  bottomTabContainer: {
    // flexDirection: 'row',
    // backgroundColor: 'yellow',
    // flex: 1,
  },
  bottomTabButton: {
    height: BOTTOM_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    ...useShadow({deep: 10, color: PRIMARY_COLOR}),
  },
});
