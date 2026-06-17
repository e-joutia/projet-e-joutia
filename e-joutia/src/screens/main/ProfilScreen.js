import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../context/AuthContext';
import { colors, gradients } from '../../theme/colors';
import StarRating from '../../components/StarRating';
import BadgeChip from '../../components/BadgeChip';
import ReviewCard from '../../components/ReviewCard';

const FICTITIOUS_REVIEWS = [
  {
    id: '1',
    reviewer: 'Amine B.',
    rating: 5,
    date: 'Il y a 2 jours',
    comment: 'Vendeur très sérieux, produit conforme à la description. Je recommande vivement !',
  },
  {
    id: '2',
    reviewer: 'Sara L.',
    rating: 4.5,
    date: 'La semaine dernière',
    comment: 'Transaction rapide et sans problème. Très bonne communication.',
  },
  {
    id: '3',
    reviewer: 'Karim M.',
    rating: 5,
    date: 'Il y a 2 semaines',
    comment: 'Super ! L\'article était comme neuf, merci beaucoup.',
  },
  {
    id: '4',
    reviewer: 'Mouna T.',
    rating: 4,
    date: 'Le mois dernier',
    comment: 'Bon vendeur, juste un léger retard pour le rendez-vous, mais sinon tout était parfait.',
  },
];

export default function ProfilScreen() {
  const { user, logout } = useAuth();

  const avatarColors = [
    '#FF6B35', '#FF3CAC', '#7B5EA7', '#00E676',
    '#00E5FF', '#FF9100', '#FF1744', '#00BCD4',
  ];
  const colorIndex =
    (user?.username || 'U').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    avatarColors.length;
  const avatarColor = avatarColors[colorIndex];
  const initials = (user?.username || 'U')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const joinedDate = user?.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString('fr-FR', {
        month: 'long',
        year: 'numeric',
      })
    : 'Récemment';

  return (
    <View style={styles.container}>
      {/* Absolute Background Gradient */}
      <LinearGradient
        colors={gradients.background}
        style={StyleSheet.absoluteFillObject}
      />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Fixed Header with Logo */}
        <View style={styles.topNav}>
          <Image 
            source={require('../../../assets/logo.png')} 
            style={styles.navLogo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Ionicons name="power-outline" size={22} color={colors.primaryLight} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          {/* Profile Hero Section */}
          <LinearGradient
            colors={gradients.card}
            style={styles.heroCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={[styles.avatarGlow, { shadowColor: avatarColor }]}>
              <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
                <Text style={styles.avatarText}>{initials}</Text>
              </View>
            </View>
            
            <Text style={styles.username}>{user?.username || 'Utilisateur'}</Text>
            
            <View style={styles.locationRow}>
              <Ionicons name="location" size={16} color={colors.primary} />
              <Text style={styles.locationText}>{user?.city || 'Maroc'}</Text>
              <Text style={styles.dotSeparator}>•</Text>
              <Text style={styles.joinedText}>Membre depuis {joinedDate}</Text>
            </View>

            <View style={styles.badgesContainer}>
              <BadgeChip type="verified" />
              <BadgeChip type="fast" />
            </View>
          </LinearGradient>

          {/* Stats Glass Card */}
          <View style={styles.statsCard}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>4.6</Text>
              <StarRating rating={4.6} size={16} gap={2} />
              <Text style={styles.statLabel}>Note moyenne</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{FICTITIOUS_REVIEWS.length}</Text>
              <Text style={[styles.statLabel, { marginTop: 4 }]}>Avis reçus</Text>
            </View>
          </View>

          {/* Reviews List */}
          <View style={styles.reviewsSection}>
            <Text style={styles.sectionTitle}>Avis Récents</Text>
            {FICTITIOUS_REVIEWS.map((review) => (
              <ReviewCard
                key={review.id}
                reviewer={review.reviewer}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
              />
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // fallback
  },
  safeArea: {
    flex: 1,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  navLogo: {
    width: 100,
    height: 35,
  },
  logoutButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 53, 0.2)',
  },
  scrollContainer: {
    padding: 20,
  },
  heroCard: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },
  avatarGlow: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.background,
  },
  avatarText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 2,
  },
  username: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginLeft: 6,
  },
  dotSeparator: {
    color: colors.textMuted,
    marginHorizontal: 10,
  },
  joinedText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 50,
    backgroundColor: colors.divider,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 6,
  },
  reviewsSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 16,
    letterSpacing: 0.5,
  },
});
