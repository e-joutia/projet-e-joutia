import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StarRating from './StarRating';
import { colors } from '../theme/colors';

/**
 * ReviewCard – displays a single user review with avatar initials,
 * name, star rating, date, and comment text.
 */
export default function ReviewCard({ reviewer, rating, comment, date }) {
  const initials = reviewer
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Pick a consistent avatar color from the reviewer name
  const avatarColors = [
    '#FF6B35', '#FF3CAC', '#7B5EA7', '#4CAF82',
    '#64B5F6', '#FFB300', '#E91E63', '#00BCD4',
  ];
  const colorIndex =
    reviewer.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {/* Avatar */}
        <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.name}>{reviewer}</Text>
          <View style={styles.ratingRow}>
            <StarRating rating={rating} size={13} gap={1} />
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  initials: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  meta: {
    flex: 1,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 3,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  date: {
    color: colors.textMuted,
    fontSize: 11,
    marginLeft: 6,
  },
  comment: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
});
