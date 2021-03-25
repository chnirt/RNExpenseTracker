import {PRIMARY_COLOR, THIRD_COLOR} from '../constants';
import {useShadow} from '../hooks';
import {create} from '../utils';

export const styles = create({
  container: {
    flex: 1,
  },
  drawer: {
    backgroundColor: '#FFFFFF00',
  },
  drawerItem: {
    width: '50%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 30,
    marginLeft: 20,
    marginVertical: 15,
  },
  drawerItemLabel: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
  },
  stack: {
    flex: 1,
    borderColor: THIRD_COLOR,

    ...useShadow({depth: 24, color: PRIMARY_COLOR}),
  },
  contentZIndex: {
    zIndex: -1,
  },
});
