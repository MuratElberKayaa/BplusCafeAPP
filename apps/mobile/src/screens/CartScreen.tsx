import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const CartScreen: React.FC = () => {
  const { cart, updateCartQuantity, removeFromCart, user, navigate, storeInfo } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + item.itemTotalPrice, 0);

  const handleCheckoutPress = () => {
    if (cart.length === 0) return;
    if (!user) {
      // Flow A step: if unauthenticated, navigate to LOGIN
      navigate('LOGIN');
    } else {
      navigate('CHECKOUT');
    }
  };

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Sepetim" showBack={true} showCart={false} />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>☕</Text>
          <Text style={styles.emptyTitle}>Sepetiniz Boş</Text>
          <Text style={styles.emptySub}>
            Sağlıklı ve fonksiyonel wellness içeceklerimizi keşfetmek için menüyü ziyaret edin.
          </Text>
          <TouchableOpacity style={styles.exploreBtn} onPress={() => navigate('MENU')}>
            <Text style={styles.exploreBtnText}>Menüye Git</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Sepetim" showBack={true} showCart={false} />
      <Banner message={`Şube Açık • Sipariş Kesilme Süresi: ${storeInfo.orderCutoffMinutes} dk (DEMO VALUE ONLY)`} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImg} />
            <View style={styles.itemInfo}>
              <View style={styles.itemTopRow}>
                <Text style={styles.itemTitle}>{item.productName}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.removeBtn}>✕</Text>
                </TouchableOpacity>
              </View>

              {/* Customizations tags */}
              {item.selectedCustomizations.length > 0 && (
                <View style={styles.customizationTags}>
                  {item.selectedCustomizations.map((c, i) => (
                    <Text key={i} style={styles.custBadge}>
                      {c.optionName} {c.extraPrice > 0 ? `(+₺${c.extraPrice})` : ''}
                    </Text>
                  ))}
                </View>
              )}

              <View style={styles.itemBottomRow}>
                <Text style={styles.itemPrice}>₺{item.itemTotalPrice.toFixed(2)}</Text>
                <View style={styles.stepper}>
                  <TouchableOpacity
                    style={styles.stepBtn}
                    onPress={() => updateCartQuantity(item.id, -1)}
                  >
                    <Text style={styles.stepText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.stepBtn}
                    onPress={() => updateCartQuantity(item.id, 1)}
                  >
                    <Text style={styles.stepText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Pricing Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Sipariş Özeti</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Ara Toplam</Text>
            <Text style={styles.summaryVal}>₺{subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Paket / Hizmet Bedeli</Text>
            <Text style={styles.summaryValFree}>Ücretsiz</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Genel Toplam</Text>
            <Text style={styles.totalVal}>₺{subtotal.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomTotalLabel}>Toplam Tutar</Text>
          <Text style={styles.bottomTotalVal}>₺{subtotal.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckoutPress}>
          <Text style={styles.checkoutBtnText}>
            {user ? 'Siparişi Tamamla →' : 'Giriş Yap & Devam Et →'}
          </Text>
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing[6],
  },
  emptyIcon: {
    fontSize: 54,
    marginBottom: spacing[3],
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: spacing[2],
  },
  emptySub: {
    fontSize: 13,
    color: colors.neutral.mutedText,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: spacing[5],
  },
  exploreBtn: {
    backgroundColor: colors.primary.olive,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderRadius: radius.md,
  },
  exploreBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing[4],
    paddingBottom: 100,
    gap: spacing[3],
  },
  cartCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.border,
    gap: spacing[3],
  },
  itemImg: {
    width: 75,
    height: 75,
    borderRadius: radius.md,
    backgroundColor: colors.surface.cream,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    flex: 1,
  },
  removeBtn: {
    fontSize: 14,
    color: colors.neutral.mutedText,
    padding: 2,
    marginLeft: spacing[2],
  },
  customizationTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginVertical: 4,
  },
  custBadge: {
    fontSize: 10,
    backgroundColor: colors.surface.cream,
    color: colors.neutral.espresso,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  itemBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  stepBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.surface.cream,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  stepText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  qtyText: {
    fontSize: 13,
    fontWeight: '700',
    minWidth: 18,
    textAlign: 'center',
    color: colors.neutral.espresso,
  },
  summaryCard: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[2],
  },
  summaryLabel: {
    fontSize: 13,
    color: colors.neutral.mutedText,
  },
  summaryVal: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.neutral.espresso,
  },
  summaryValFree: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.status.success,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.neutral.border,
    paddingTop: spacing[3],
    marginTop: spacing[2],
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  totalVal: {
    fontSize: 18,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomTotalLabel: {
    fontSize: 11,
    color: colors.neutral.mutedText,
  },
  bottomTotalVal: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  checkoutBtn: {
    backgroundColor: colors.primary.olive,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderRadius: radius.md,
  },
  checkoutBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
