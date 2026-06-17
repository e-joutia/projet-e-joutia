import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const BADGE_PRESETS = {
  verified: {
    label: 'Profil vérifié',
    icon: 'checkmark-circle',
    bg: colors.badgeVerified,
    textColor: colors.badgeVerifiedText,
    borderColor: colors.badgeVerifiedBorder,
  },
  fast: {
    label: 'Répond rapidement',
    icon: 'flash',
    bg: colors.badgeFast,
    textColor: colors.badgeFastText,
    borderColor: colors.badgeFastBorder,
  },
};

/**
 * BadgeChip – trust badge pill.
 * Props:
 *   type  – 'verified' | 'fast'
 *   label – optional custom label override
 */
export default function BadgeChip({ type, label }) {
  const preset = BADGE_PRESETS[type] || BADGE_PRESETS.verified;
  const displayLabel = label || preset.label;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: preset.bg,
          borderColor: preset.borderColor,
        },
      ]}
    >
      <Ionicons
        name={preset.icon}
        size={13}
        color={preset.textColor}
        style={styles.icon}
      />
      <Text style={[styles.label, { color: preset.textColor }]}>
        {displayLabel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
