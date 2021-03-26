import {create} from '../../utils';
import {BOTTOM_HEIGHT, PRIMARY_COLOR} from '../../constants';

export const styles = create({
  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',

    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,

    shadowColor: PRIMARY_COLOR,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bottomTabButton: {
    height: BOTTOM_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
