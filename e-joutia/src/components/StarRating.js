import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

/**
 * StarRating – displays a row of filled/half/empty stars.
 * Props:
 *   rating  – number (0–5), supports halves
 *   size    – icon size (default 20)
 *   gap     – spacing between stars (default 3)
 */
export default function StarRating({ rating = 0, size = 20, gap = 3 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let iconName;
    if (rating >= i) {
      iconName = 'star';
    } else if (rating >= i - 0.5) {
      iconName = 'star-half';
    } else {
      iconName = 'star-outline';
    }
    stars.push(
      <Ionicons
        key={i}
        name={iconName}
        size={size}
        color={rating >= i - 0.5 ? colors.starActive : colors.starInactive}
        style={{ marginHorizontal: gap / 2 }}
      />
    );
  }
  return <View style={styles.row}>{stars}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
