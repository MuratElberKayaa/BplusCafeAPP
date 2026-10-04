import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const CheckoutScreen: React.FC = () => {
  const { cart, walletBalance, storeInfo, navigate } = useApp();
  const [paymentMethod, setPaymentMethod] = useState<'SANDBOX_WALLET' | 'CREDIT_CARD'>('SANDBOX_WALLET');

  const subtotal = cart.reduce((acc, item) => acc + item.itemTotalPrice, 0);

  const handleProceedToPayment = () => {
    navigate('PAYMENT_SANDBOX');
  };

  return (
    <View style={styles.container}>
      <Header title="Sipariş Onayı" showBack={true} showCart={false} />
      <Banner message="SANDBOX ORTAMI • Ön Ödeme Doğrulama Aşaması" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Pickup Location Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>📍</Text>
            <View>
              <Text style={styles.cardTitle}>{storeInfo.name}</Text>
              <Text style={styles.cardSub}>{storeInfo.address}</Text>
            </View>
          </View>
          <View style={styles.pickupMetaRow}>
            <Text style={styles.metaLabel}>Tahmini Hazırlanma:</Text>
            <Text style={styles.metaVal}>{storeInfo.prepTimeMinutes} dakika</Text>
          </View>
          <View style={styles.pickupMetaRow}>
            <Text style={styles.metaLabel}>Sipariş Kesilme Kuralı:</Text>
            <Text style={styles.metaVal}>{storeInfo.orderCutoffMinutes} dk önce (DEMO ONLY)</Text>
          </View>
        </View>

        {/* Items Summary Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sipariş Kalemleri ({cart.length} Ürün)</Text>
          {cart.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemQty}>{item.quantity}x</Text>
                <View>
                  <Text style={styles.itemName}>{item.productName}</Text>
                  {item.selectedCustomizations.length > 0 && (
                    <Text style={styles.itemCust}>
                      {item.selectedCustomizations.map((c) => c.optionName).join(', ')}
                    </Text>
                  )}
                </View>
              </View>
              <Text style={styles.itemPrice}>₺{item.itemTotalPrice.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        {/* Payment Method Selector */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ödeme Yöntemi Seçin</Text>
          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'SANDBOX_WALLET' && styles.paymentOptionActive]}
            onPress={() => setPaymentMethod('SANDBOX_WALLET')}
          >
            <View style={styles.payLeft}>
              <Text style={styles.payIcon}>👛</Text>
              <View>
                <Text style={styles.payTitle}>B+ Wallet (Önerilen)</Text>
                <Text style={styles.paySub}>
                  Test Bakiyesi: ₺{walletBalance.toFixed(2)} (SANDBOX ONLY)
                </Text>
              </View>
            </View>
            <View style={[styles.radio, paymentMethod === 'SANDBOX_WALLET' && styles.radioActive]}>
              {paymentMethod === 'SANDBOX_WALLET' && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'CREDIT_CARD' && styles.paymentOptionActive]}
            onPress={() => setPaymentMethod('CREDIT_CARD')}
          >
            <View style={styles.payLeft}>
              <Text style={styles.payIcon}>💳</Text>
              <View>
                <Text style={styles.payTitle}>Kredi / Banka Kartı</Text>
                <Text style={styles.paySub}>Mastercard •••• 4242 (Demo Simülasyonu)</Text>
              </View>
            </View>
            <View style={[styles.radio, paymentMethod === 'CREDIT_CARD' && styles.radioActive]}>
              {paymentMethod === 'CREDIT_CARD' && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Total Box */}
        <View style={styles.card}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Ödenecek Toplam Tutar</Text>
            <Text style={styles.totalPrice}>₺{subtotal.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.payButton} onPress={handleProceedToPayment}>
          <Text style={styles.payButtonText}>Güvenli Ödemeye Geç →</Text>
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
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing[4],
    paddingBottom: 100,
    gap: spacing[3],
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[3],
  },
  cardIcon: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  cardSub: {
    fontSize: 12,
    color: colors.neutral.mutedText,
  },
  pickupMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  metaLabel: {
    fontSize: 12,
    color: colors.neutral.mutedText,
  },
  metaVal: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary.deepOlive,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.lightGray,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    flex: 1,
  },
  itemQty: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary.olive,
    width: 24,
  },
  itemName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  itemCust: {
    fontSize: 11,
    color: colors.neutral.mutedText,
  },
  itemPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing[3],
    borderRadius: radius.md,
    backgroundColor: colors.surface.warmWhite,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    marginBottom: spacing[2],
  },
  paymentOptionActive: {
    borderColor: colors.primary.olive,
    backgroundColor: colors.primary.light,
  },
  payLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    flex: 1,
  },
  payIcon: {
    fontSize: 22,
  },
  payTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  paySub: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.neutral.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    borderColor: colors.primary.olive,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary.olive,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: colors.surface.warmWhite,
    borderTopWidth: 1,
    borderTopColor: colors.neutral.border,
    paddingHorizontal: spacing[4],
    justifyContent: 'center',
  },
  payButton: {
    backgroundColor: colors.primary.olive,
    paddingVertical: spacing[3],
    borderRadius: radius.md,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
