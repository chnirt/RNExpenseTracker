import {Dimensions} from 'react-native';
import {normalize} from '../../utils';

export const APP_NAME = 'CHNIRT_EXPENSE_TRACKER';
export const BOTTOM_HEIGHT = normalize(56);
export const BOTTOM_BUTTON_HEIGHT = normalize(56);
export const ICON_SIZE = normalize(24);
export const LOGO_SIZE = normalize(100);

export const WINDOW_DIMENSIONS = Dimensions.get('window');
export const WINDOW_WIDTH = WINDOW_DIMENSIONS.width;
export const WINDOW_HEIGHT = WINDOW_DIMENSIONS.height;
export const WINDOW_FONT_SCALE = WINDOW_DIMENSIONS.fontScale;
