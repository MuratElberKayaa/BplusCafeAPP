import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const OrderConfirmationScreen: React.FC = () => {
  const { activeOrder, storeInfo, navigate } = useApp();

  return (
    <View style={styles.container}>
      <Header title="Sipariş Alındı" showBack={false} showCart={false} />
      <Banner message="Sipariş Mağaza KDS Ekranına İletildi (Simülasyon)" />

      <View style={styles.content}>
        <View style={styles.successIconBox}>
          <Text style={styles.successIcon}>✓</Text>
        </View>

        <Text style={styles.title}>Teşekkürler!</Text>
        <Text style={styles.subtitle}>Siparişiniz başarıyla alındı ve baristaya iletildi.</Text>

        <View style={styles.card}>
          <View style={styles.orderNumberRow}>
            <Text style={styles.orderLabel}>Sipariş Kodu</Text>
            <Text style={styles.orderNumber}>#{activeOrder?.orderNumber || 'B+0001'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Tahmini Hazırlanma:</Text>
            <Text style={styles.metaVal}>{activeOrder?.estimatedReadyAt || '12-15 dk'}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Teslim Alma Noktası:</Text>
            <Text style={styles.metaVal}>{storeInfo.name}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Ödül Puanı:</Text>
            <Text style={styles.metaReward}>REWARD EARNED (RULE TBD)</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.trackBtn}
          onPress={() => navigate('ORDER_TRACKING')}
        >
          <Text style={styles.trackBtnText}>Siparişi Canlı Takip Et →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigate('HOME')}
        >
          <Text style={styles.homeBtnText}>Ana Sayfaya Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.warmWhite,
  },
  content: {
    padding: spacing[5],
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  successIconBox: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.status.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  successIcon: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: '800',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: spacing[1],
  },
  subtitle: {
    fontSize: 14,
    color: colors.neutral.mutedText,
    textAlign: 'center',
    marginBottom: spacing[5],
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    width: '100%',
    borderWidth: 1,
    borderColor: colors.neutral.border,
    marginBottom: spacing[5],
  },
  orderNumberRow: {
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  orderLabel: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    fontWeight: '600',
  },
  orderNumber: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.primary.deepOlive,
    letterSpacing: 1,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral.border,
    marginVertical: spacing[3],
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  metaLabel: {
    fontSize: 13,
    color: colors.neutral.mutedText,
  },
  metaVal: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  metaReward: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary.olive,
  },
  trackBtn: {
    backgroundColor: colors.primary.olive,
    width: '100%',
    paddingVertical: spacing[4],
    borderRadius: radius.md,
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  trackBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
  homeBtn: {
    paddingVertical: spacing[2],
  },
  homeBtnText: {
    color: colors.neutral.mutedText,
    fontSize: 14,
    fontWeight: '600',
  },
});
