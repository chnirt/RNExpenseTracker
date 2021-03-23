import {create} from '../../utils';
import {PRIMARY_COLOR, THIRD_COLOR} from '../../constants';
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
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  borderRight: {
    borderRightColor: THIRD_COLOR,
    borderRightWidth: 1,
  },
  borderBottom: {
    borderBottomColor: THIRD_COLOR,
    borderBottomWidth: 1,
  },
  number: {
    width: '33.3%',
    backgroundColor: '#FFFFFF',
    padding: 16 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backspace: {},
  backspaceText: {},
  done: {
    backgroundColor: PRIMARY_COLOR,
  },
  doneText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
