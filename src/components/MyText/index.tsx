import React, {FC} from 'react';
import {Text} from 'react-native';

import {IMyText} from './types';
import {styles} from './styles';

/**
 * Returns the divider.
 *
 * @remarks
 * This method is part of the {@link chnirt-ui#MyText | MyText subsystem}.
 *
 * @param {boolean} h1 - 'false'
 * @param {boolean} h2 - 'false'
 * @param {boolean} h3 - 'false'
 * @param {boolean} h4 - 'false'
 * @param {boolean} h5 - 'false'
 * @param {boolean} p - 'false'
 * @param {boolean} bold - 'false'
 * @param {boolean} italic - 'false'
 * @param {string} title - ''
 * @param {object} style - {}
 *
 * @returns The MyText function component
 *
 * @beta
 */
export const MyText: FC<IMyText> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b1,
  b2,
  s1,
  s2,
  button,
  caption,
  p,
  bold,
  italic,
  style,
  color,
  children,
  ...rest
}) => {
  return (
    <Text
      style={[
        // styles.fontFamily,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        h6 && styles.h6,
        b1 && styles.b1,
        b2 && styles.b2,
        s1 && styles.s1,
        s2 && styles.s2,
        button && styles.button,
        caption && styles.caption,
        p && styles.p,
        bold && styles.bold,
        italic && styles.italic,
        color ? {color} : null,
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};
