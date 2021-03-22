import {create} from '../../utils';
import {useShadow} from '../../hooks/shadow';
import {PRIMARY_COLOR, INCOME_COLOR} from '../../constants';

export const styles = create({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 10,
  },
  headerRight: {
    paddingRight: 16,
  },
  transactionItem: {
    marginVertical: 7,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    ...useShadow({depth: 5, color: PRIMARY_COLOR, shadowOpacity: 0.15}),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionInfo: {
    paddingHorizontal: 10,
  },
  transactionTitle: {
    paddingVertical: 2,
    fontSize: 14,
  },
  transactionDate: {
    paddingVertical: 2,
    color: PRIMARY_COLOR,
    fontSize: 10,
  },
  transactionPrice: {
    paddingHorizontal: 5,
    fontSize: 12,
    color: INCOME_COLOR,
  },
});
