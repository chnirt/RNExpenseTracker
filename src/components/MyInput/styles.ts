import {create} from '../../utils';
import {THIRD_COLOR} from '../../constants';

export const styles = create({
  container: {},
  inputContainer: {
    paddingVertical: 16,
  },
  horizontalInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verticalInputContainer: {flexDirection: 'column'},
  input: {},
  verticalInput: {},
  divider: {
    borderTopColor: THIRD_COLOR,
    borderTopWidth: 1,
  },
});
