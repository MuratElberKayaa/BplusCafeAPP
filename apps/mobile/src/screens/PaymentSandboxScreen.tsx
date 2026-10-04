import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const PaymentSandboxScreen: React.FC = () => {
  const { cart, walletBalance, placeOrder, navigate } = useApp();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const total = cart.reduce((acc, item) => acc + item.itemTotalPrice, 0);

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      placeOrder('SANDBOX_WALLET');
      navigate('ORDER_CONFIRMATION');
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Header title="Sandbox Ödeme" showBack={true} showCart={false} />
      <Banner message="SANDBOX SIMULATOR • Gerçek finansal ödeme gerçekleşmez" variant="warning" />

      <View style={styles.content}>
        <View style={styles.sandboxBadge}>
          <Text style={styles.badgeText}>TEST SİMÜLATÖRÜ (DEMO ONLY)</Text>
        </View>

        <Text style={styles.title}>Ödeme Onayı</Text>
        <Text style={styles.sub}>
          Aşağıdaki ödeme işlemi B+ Wallet test bakiyesi üzerinden sanal olarak gerçekleştirilecektir.
        </Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Ödenecek Tutar:</Text>
            <Text style={styles.valTotal}>₺{total.toFixed(2)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Mevcut Test Bakiyesi:</Text>
            <Text style={styles.val}>₺{walletBalance.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Kalan Test Bakiyesi:</Text>
            <Text style={styles.valSuccess}>
              ₺{Math.max(0, walletBalance - total).toFixed(2)}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Ödeme Yöntemi:</Text>
            <Text style={styles.val}>B+ Wallet (Test Hesabı)</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Kazanılacak Yıldız:</Text>
            <Text style={styles.valDemoRule}>REWARD EARNED (RULE TBD)</Text>
          </View>
        </View>

        {isProcessing ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={colors.primary.olive} />
            <Text style={styles.loadingText}>Sandbox ödemesi onaylanıyor...</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.payBtn}
            onPress={handleSimulatePayment}
            activeOpacity={0.85}
          >
            <Text style={styles.payBtnText}>
              ₺{total.toFixed(2)} Test Ödemesini Tamamla ✓
            </Text>
          </TouchableOpacity>
        )}
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
    padding: spacing[4],
    flex: 1,
  },
  sandboxBadge: {
    backgroundColor: colors.status.warningLight,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing[3],
    paddingVertical: 4,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.status.warning,
    marginBottom: spacing[3],
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.status.warning,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: spacing[2],
  },
  sub: {
    fontSize: 13,
    color: colors.neutral.mutedText,
    lineHeight: 18,
    marginBottom: spacing[4],
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
    marginBottom: spacing[5],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing[2],
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral.border,
    marginVertical: spacing[2],
  },
  label: {
    fontSize: 13,
    color: colors.neutral.mutedText,
  },
  val: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.neutral.espresso,
  },
  valTotal: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  valSuccess: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.status.success,
  },
  valDemoRule: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary.olive,
    backgroundColor: colors.primary.light,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  loadingBox: {
    alignItems: 'center',
    padding: spacing[5],
    gap: spacing[3],
  },
  loadingText: {
    fontSize: 13,
    color: colors.neutral.mutedText,
    fontWeight: '600',
  },
  payBtn: {
    backgroundColor: colors.primary.olive,
    borderRadius: radius.md,
    paddingVertical: spacing[4],
    alignItems: 'center',
  },
  payBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
