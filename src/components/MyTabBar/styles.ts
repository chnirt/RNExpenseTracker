import {create} from '../../utils';
import {BOTTOM_HEIGHT, PRIMARY_COLOR} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = create({
  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    ...useShadow({depth: 24, color: PRIMARY_COLOR}),
  },
  bottomTabButton: {
    height: BOTTOM_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
