import {create} from '../../utils';
import {BOTTOM_HEIGHT} from '../../constants';

export const styles = create({
  bottomTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',

    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bottomTabButton: {
    height: BOTTOM_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
