import {create} from '../../utils';
import {BOTTOM_HEIGHT, PRIMARY_COLOR} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = create({
  safeView: {
    backgroundColor: '#FFFFFF',

    ...useShadow({deep: 10, color: PRIMARY_COLOR}),

    // position: 'absolute',
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,

    // justifyContent: 'flex-end',
  },
  bottomTabContainer: {
    flexDirection: 'row',
  },
  bottomTabButton: {
    height: BOTTOM_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
