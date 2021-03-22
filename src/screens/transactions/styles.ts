import {create} from '../../utils';
import {useShadow} from '../../hooks/shadow';
import {PRIMARY_COLOR, PRIMARY_BLUR_COLOR, BACKGROUND_COLOR} from '../../constants';

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
  transactionHeader: {
    padding: 16,
    fontSize: 14,
    color: PRIMARY_COLOR,
    backgroundColor: PRIMARY_BLUR_COLOR,
  },
  transactionItem: {
    marginVertical: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: BACKGROUND_COLOR,
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
    fontSize: 12,
  },
});
