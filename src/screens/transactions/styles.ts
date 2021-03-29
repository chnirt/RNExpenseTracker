import {create} from '../../utils';
import {useShadow} from '../../hooks/shadow';
import {PRIMARY_COLOR, INCOME_COLOR, BACKGROUND_COLOR} from '../../constants';

export const styles = create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerRight: {
    padding: 16,
  },
  content: {},
  header: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#9E71FF',
    marginBottom: 10,
    // marginTop: 10,
    color: BACKGROUND_COLOR,
    fontSize: 18,
  },
  transactionItem: {
    height: 80,
    padding: 20,

    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
