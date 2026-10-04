import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const RewardsScreen: React.FC = () => {
  const { rewardsBalance } = useApp();

  return (
    <View style={styles.container}>
      <Header title="B+ Rewards" showBack={false} />
      <Banner message="DEMO_RULE • Puan kazanım ve harcama kuralı henüz kesinleşmedi (DEC-05)" variant="warning" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Tier Card */}
        <View style={styles.tierCard}>
          <View style={styles.tierTop}>
            <Text style={styles.tierBadge}>WELLNESS CLUB TIER 1</Text>
            <Text style={styles.ruleBadge}>DEMO_RULE — NON-PRODUCTION</Text>
          </View>
          <Text style={styles.starsNumber}>{rewardsBalance} ⭐</Text>
          <Text style={styles.starsLabel}>Toplam Biriken Demo Yıldızınız</Text>

          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '65%' }]} />
          </View>
          <Text style={styles.progressSub}>Sonraki ödüle 50 demo puan kaldı (Örnek Senaryo)</Text>
        </View>

        {/* Rewards Catalog */}
        <Text style={styles.sectionTitle}>Kullanılabilir Ödüller (Simülasyon)</Text>

        <View style={styles.rewardItem}>
          <Text style={styles.rewardIcon}>☕</Text>
          <View style={styles.rewardInfo}>
            <Text style={styles.rewardTitle}>Ücretsiz Fonksiyonel Booster</Text>
            <Text style={styles.rewardSub}>Kolajen veya Lion&apos;s Mane ilavesi</Text>
          </View>
          <TouchableOpacity style={styles.claimBtn}>
            <Text style={styles.claimBtnText}>150 ⭐</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rewardItem}>
          <Text style={styles.rewardIcon}>🍵</Text>
          <View style={styles.rewardInfo}>
            <Text style={styles.rewardTitle}>Küçük Boy Bitkisel Latte</Text>
            <Text style={styles.rewardSub}>Dilediğiniz menü lattesinde geçerli</Text>
          </View>
          <TouchableOpacity style={styles.claimBtn}>
            <Text style={styles.claimBtnText}>300 ⭐</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rewardItem}>
          <Text style={styles.rewardIcon}>🥣</Text>
          <View style={styles.rewardInfo}>
            <Text style={styles.rewardTitle}>Spirulina Protein Bowl</Text>
            <Text style={styles.rewardSub}>Organik granola ve taze meyveli</Text>
          </View>
          <TouchableOpacity style={styles.claimBtn}>
            <Text style={styles.claimBtnText}>600 ⭐</Text>
          </TouchableOpacity>
        </View>

        {/* Business Rule Notice */}
        <View style={styles.noticeCard}>
          <Text style={styles.noticeTitle}>📋 İşveren Kararı Bekleniyor (DEC-05)</Text>
          <Text style={styles.noticeText}>
            Puan başına harcama katsayısı, yıldız son kullanma süreleri ve sadakat kademeleri işveren tarafından kesinleştirildiğinde sisteme işlenecektir.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.warmWhite,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing[4],
    gap: spacing[3],
    paddingBottom: 40,
  },
  tierCard: {
    backgroundColor: colors.primary.deepOlive,
    borderRadius: radius.xl,
    padding: spacing[5],
  },
  tierTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  tierBadge: {
    color: colors.surface.cream,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  ruleBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: '#E8EDDE',
    fontSize: 9,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: '700',
  },
  starsNumber: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.accent.latte,
  },
  starsLabel: {
    fontSize: 13,
    color: colors.surface.cream,
    marginTop: 2,
    marginBottom: spacing[4],
  },
  progressBarBg: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.accent.latte,
  },
  progressSub: {
    fontSize: 11,
    color: '#D8DFCC',
    marginTop: spacing[2],
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginTop: spacing[2],
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.border,
    gap: spacing[3],
  },
  rewardIcon: {
    fontSize: 26,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  rewardSub: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 1,
  },
  claimBtn: {
    backgroundColor: colors.surface.cream,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: radius.md,
  },
  claimBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary.deepOlive,
  },
  noticeCard: {
    backgroundColor: colors.surface.cream,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  noticeTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: 4,
  },
  noticeText: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    lineHeight: 16,
  },
});
