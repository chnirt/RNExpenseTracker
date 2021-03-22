import {create} from '../../utils';
import {useShadow} from '../../hooks/shadow';
import {PRIMARY_COLOR, INCOME_COLOR} from '../../constants';

export const styles = create({
  container: {
    flex: 1,
  },
  headerRight: {
    padding: 16,
  },
  content: {},
  transactionItem: {
    height: 80,
    padding: 20,

    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
