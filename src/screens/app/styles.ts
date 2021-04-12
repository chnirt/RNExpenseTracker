import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerLeftButton: {padding: 16},
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  listActivity: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activityTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleLabel: {
    fontSize: 24,
  },
  moreLabel: {
    fontSize: 20,
  },
  listContent: {
    flex: 1,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  activityIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
  },
  activityName: {
    flex: 3,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  activityPercent: {
    flex: 1,
    fontSize: 20,
    textAlign: 'right',
  },
});
