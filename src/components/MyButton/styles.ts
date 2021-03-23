import {create} from '../../utils';
import {PRIMARY_COLOR} from '../../constants';
import {useShadow} from '../../hooks';

export const styles = create({
  container: {padding: 16, ...useShadow({depth: 24, color: PRIMARY_COLOR})},
  primaryContainer: {
    backgroundColor: PRIMARY_COLOR,
  },
  primaryColor: {
    color: '#FFFFFF',
  },
  titleText: {
    textAlign: 'center',
  },
});
