import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';

export const WelcomeScreen: React.FC = () => {
  const { navigate, login } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>B+</Text>
        </View>
        <Text style={styles.title}>Hoş Geldiniz</Text>
        <Text style={styles.sub}>
          Sıradan bir kahve değil; fonksiyonel adaptif mantarlar, bitkisel nootropikler ve iyi hissettiren tatlar.
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => navigate('LOGIN')}
        >
          <Text style={styles.primaryBtnText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => navigate('REGISTER')}
        >
          <Text style={styles.secondaryBtnText}>Yeni Hesap Oluştur</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.guestBtn}
          onPress={() => {
            // Guest mode: continue directly to HOME
            navigate('HOME');
          }}
        >
          <Text style={styles.guestBtnText}>Misafir Olarak Menüyü İncele →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.warmWhite,
    justifyContent: 'space-between',
    padding: spacing[6],
    paddingTop: 80,
    paddingBottom: 50,
  },
  topSection: {
    alignItems: 'center',
  },
  badge: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.primary.deepOlive,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  badgeText: {
    color: colors.surface.cream,
    fontSize: 34,
    fontWeight: '900',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  sub: {
    fontSize: 14,
    color: colors.neutral.mutedText,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: spacing[3],
  },
  buttonGroup: {
    gap: spacing[3],
  },
  primaryBtn: {
    backgroundColor: colors.primary.olive,
    paddingVertical: spacing[4],
    borderRadius: radius.md,
    alignItems: 'center',
  },
  primaryBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: colors.surface.cream,
    paddingVertical: spacing[4],
    borderRadius: radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  secondaryBtnText: {
    color: colors.neutral.espresso,
    fontSize: 15,
    fontWeight: '700',
  },
  guestBtn: {
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  guestBtnText: {
    color: colors.primary.olive,
    fontSize: 13,
    fontWeight: '600',
  },
});
