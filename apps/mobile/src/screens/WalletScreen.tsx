import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { mockWalletTransactions } from '../../../../packages/types/index';

export const WalletScreen: React.FC = () => {
  const { walletBalance, navigate } = useApp();

  return (
    <View style={styles.container}>
      <Header title="B+ Cüzdan" showBack={false} />
      <Banner message="SANDBOX WALLET • Gerçek finansal para transferi yapılmaz" variant="warning" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Wallet Digital Card */}
        <View style={styles.walletCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardBrand}>B+ WALLET</Text>
            <View style={styles.sandboxPill}>
              <Text style={styles.sandboxPillText}>SANDBOX ONLY</Text>
            </View>
          </View>

          <Text style={styles.balanceLabel}>TEST BAKİYESİ</Text>
          <Text style={styles.balanceValue}>₺{walletBalance.toFixed(2)}</Text>

          <View style={styles.cardFooter}>
            <Text style={styles.cardNumber}>•••• •••• •••• 9821</Text>
            <Text style={styles.cardValid}>DEMO</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.topupBtn}
            onPress={() => navigate('WALLET_ADD_BALANCE')}
          >
            <Text style={styles.topupBtnText}>+ Bakiye Yükle (Sandbox)</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction History */}
        <Text style={styles.sectionTitle}>Son Test İşlemleri</Text>
        <View style={styles.historyList}>
          {mockWalletTransactions.map((tx) => (
            <View key={tx.id} style={styles.txRow}>
              <View style={styles.txLeft}>
                <Text style={styles.txIcon}>{tx.type === 'TOPUP' ? '⬇️' : '☕'}</Text>
                <View>
                  <Text style={styles.txDesc}>{tx.description}</Text>
                  <Text style={styles.txDate}>{tx.date} • Sandbox</Text>
                </View>
              </View>
              <Text
                style={[
                  styles.txAmount,
                  tx.type === 'TOPUP' ? styles.txAmountPlus : styles.txAmountMinus,
                ]}
              >
                {tx.type === 'TOPUP' ? '+' : '-'}₺{tx.amount.toFixed(2)}
              </Text>
            </View>
          ))}
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
  walletCard: {
    backgroundColor: colors.primary.deepOlive,
    borderRadius: radius.xl,
    padding: spacing[5],
    height: 190,
    justifyContent: 'space-between',
    shadowColor: colors.neutral.espresso,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBrand: {
    color: colors.surface.cream,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  sandboxPill: {
    backgroundColor: colors.status.warning,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  sandboxPillText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '800',
  },
  balanceLabel: {
    fontSize: 11,
    color: '#D8DFCC',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  balanceValue: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.surface.cream,
    marginTop: -4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    color: '#B5C0A4',
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: '600',
  },
  cardValid: {
    color: '#B5C0A4',
    fontSize: 11,
    fontWeight: '700',
  },
  actionRow: {
    marginVertical: spacing[1],
  },
  topupBtn: {
    backgroundColor: colors.primary.olive,
    borderRadius: radius.md,
    paddingVertical: spacing[3],
    alignItems: 'center',
  },
  topupBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginTop: spacing[2],
  },
  historyList: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    paddingHorizontal: spacing[3],
  },
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.lightGray,
  },
  txLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  txIcon: {
    fontSize: 20,
  },
  txDesc: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.neutral.espresso,
  },
  txDate: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  txAmount: {
    fontSize: 14,
    fontWeight: '700',
  },
  txAmountPlus: {
    color: colors.status.success,
  },
  txAmountMinus: {
    color: colors.neutral.espresso,
  },
});
