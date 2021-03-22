import {create} from '../../utils';
import {BOTTOM_HEIGHT, PRIMARY_COLOR} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = create({
  safeView: {
    backgroundColor: '#FFFFFF',
    ...useShadow({depth: 10, color: PRIMARY_COLOR}),
  },
  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  bottomTabButton: {
    height: BOTTOM_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    ...useShadow({depth: 10, color: PRIMARY_COLOR}),
  },
});
