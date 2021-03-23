import {create} from '../../utils';
import {ICON_SIZE, PRIMARY_COLOR, WINDOW_WIDTH} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalView: {
    backgroundColor: 'white',

    ...useShadow({depth: 24, color: PRIMARY_COLOR}),
  },

  categoriesContainer: {
    padding: 16,
  },
  category: {
    width: ICON_SIZE * 2,
    aspectRatio: 1,
    borderRadius: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
  },
});
