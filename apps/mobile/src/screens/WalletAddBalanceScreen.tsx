import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const WalletAddBalanceScreen: React.FC = () => {
  const { addWalletBalance, goBack } = useApp();
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [isDone, setIsDone] = useState<boolean>(false);

  const amounts = [50, 100, 200, 500];

  const handleTopup = () => {
    addWalletBalance(selectedAmount);
    setIsDone(true);
    setTimeout(() => {
      goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Header title="Bakiye Yükle" showBack={true} showCart={false} />
      <Banner message="SANDBOX SIMULASYONU • Kartınızdan gerçek para çekilmez" variant="warning" />

      <View style={styles.content}>
        <Text style={styles.title}>Yüklenecek Tutar Seçin</Text>
        <Text style={styles.sub}>Test bakiyenize eklemek istediğiniz tutarı belirleyin:</Text>

        <View style={styles.grid}>
          {amounts.map((amt) => {
            const isSelected = selectedAmount === amt;
            return (
              <TouchableOpacity
                key={amt}
                style={[styles.amtBtn, isSelected && styles.amtBtnActive]}
                onPress={() => setSelectedAmount(amt)}
              >
                <Text style={[styles.amtText, isSelected && styles.amtTextActive]}>₺{amt}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Card Mock Input */}
        <View style={styles.cardInputBox}>
          <Text style={styles.inputTitle}>Ödeme Kaynağı (Demo Kart)</Text>
          <View style={styles.mockInput}>
            <Text style={styles.mockCardText}>💳 •••• •••• •••• 4242 (Mastercard Sandbox)</Text>
          </View>
        </View>

        {isDone ? (
          <View style={styles.successBox}>
            <Text style={styles.successText}>✓ ₺{selectedAmount} Test Bakiyesi Başarıyla Eklendi!</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.submitBtn} onPress={handleTopup}>
            <Text style={styles.submitBtnText}>₺{selectedAmount} Test Bakiyesi Yükle</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: 4,
  },
  sub: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    marginBottom: spacing[4],
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
    marginBottom: spacing[4],
  },
  amtBtn: {
    width: '48%',
    paddingVertical: spacing[4],
    backgroundColor: colors.surface.cream,
    borderRadius: radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  amtBtnActive: {
    backgroundColor: colors.primary.olive,
    borderColor: colors.primary.olive,
  },
  amtText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  amtTextActive: {
    color: '#FFF',
  },
  cardInputBox: {
    backgroundColor: colors.surface.card,
    padding: spacing[4],
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    marginBottom: spacing[5],
  },
  inputTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[2],
  },
  mockInput: {
    backgroundColor: colors.surface.cream,
    padding: spacing[3],
    borderRadius: radius.md,
  },
  mockCardText: {
    fontSize: 13,
    color: colors.neutral.espresso,
    fontWeight: '600',
  },
  submitBtn: {
    backgroundColor: colors.primary.olive,
    borderRadius: radius.md,
    paddingVertical: spacing[4],
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
  successBox: {
    backgroundColor: colors.status.successLight,
    padding: spacing[4],
    borderRadius: radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.status.success,
  },
  successText: {
    color: colors.status.success,
    fontSize: 14,
    fontWeight: '700',
  },
});
