import {create} from '../../utils';
import {PRIMARY_COLOR} from '../../constants';
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
});
