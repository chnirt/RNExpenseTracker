import {useShadow} from '../hooks';
import {create} from '../utils';

export const styles = create({
  container: {
    flex: 1,
  },
  stack: {
    flex: 1,
    ...useShadow({depth: 24, color: '#FFFFFF'}),
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
});
