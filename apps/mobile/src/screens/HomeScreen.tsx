import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const HomeScreen: React.FC = () => {
  const { user, products, navigate, activeOrder } = useApp();
  const featured = products.slice(0, 4);

  return (
    <View style={styles.container}>
      <Header title="B+ Wellness Café" showBack={false} />
      <Banner message="SANDBOX DEMO • B+ Wellness Café Dijital Deneyim Prototipi" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Welcome Greeting */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingSub}>Günaydın & Hoş Geldin</Text>
          <Text style={styles.greetingTitle}>
            {user ? `${user.firstName} ${user.lastName}` : 'Kahvesever'} 🌿
          </Text>
        </View>

        {/* Active Order Pill if exists */}
        {activeOrder && (
          <TouchableOpacity
            style={styles.activeOrderBanner}
            onPress={() => navigate('ORDER_TRACKING')}
          >
            <View style={styles.activeOrderLeft}>
              <Text style={styles.activeOrderBadge}>Sipariş Yolda</Text>
              <Text style={styles.activeOrderNumber}>Sipariş #{activeOrder.orderNumber}</Text>
              <Text style={styles.activeOrderMeta}>Tahmini: {activeOrder.estimatedReadyAt}</Text>
            </View>
            <Text style={styles.activeOrderAction}>Takip Et →</Text>
          </TouchableOpacity>
        )}

        {/* AI Barista Hero Card */}
        <TouchableOpacity
          style={styles.aiHeroCard}
          onPress={() => navigate('AI_BARISTA')}
          activeOpacity={0.9}
        >
          <View style={styles.aiBadge}>
            <Text style={styles.aiBadgeText}>✨ B+ AI BARISTA</Text>
          </View>
          <Text style={styles.aiHeroTitle}>Bugün modun ve enerjin nasıl?</Text>
          <Text style={styles.aiHeroSub}>
            Sana ve diyetine özel fonksiyonel wellness içeceğini akıllı reçete motorumuzla bulalım.
          </Text>
          <View style={styles.aiHeroButton}>
            <Text style={styles.aiHeroButtonText}>Kişisel Reçeteni Keşfet →</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Order Shortcuts */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} onPress={() => navigate('MENU')}>
            <Text style={styles.actionIcon}>📋</Text>
            <Text style={styles.actionTitle}>Tam Menü</Text>
            <Text style={styles.actionSub}>Tüm wellness içecekleri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard} onPress={() => navigate('WALLET')}>
            <Text style={styles.actionIcon}>💳</Text>
            <Text style={styles.actionTitle}>B+ Wallet</Text>
            <Text style={styles.actionSub}>Hızlı temassız ödeme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard} onPress={() => navigate('REWARDS')}>
            <Text style={styles.actionIcon}>⭐</Text>
            <Text style={styles.actionTitle}>Ödüller</Text>
            <Text style={styles.actionSub}>Yıldızlarını topla</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Günün Öne Çıkanları</Text>
          <TouchableOpacity onPress={() => navigate('MENU')}>
            <Text style={styles.seeAll}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuredGrid}>
          {featured.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigate('PRODUCT_DETAIL', { product })}
            >
              <Image source={{ uri: product.imageUrl }} style={styles.productImg} />
              <View style={styles.productInfo}>
                <View style={styles.tagRow}>
                  {product.dietaryTags.slice(0, 2).map((tag, idx) => (
                    <Text key={idx} style={styles.dietTag}>{tag}</Text>
                  ))}
                </View>
                <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
                <Text style={styles.productDesc} numberOfLines={2}>{product.shortDescription}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>₺{product.basePrice.toFixed(2)}</Text>
                  <View style={styles.addBtn}>
                    <Text style={styles.addBtnText}>+</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
    paddingBottom: 40,
  },
  greetingSection: {
    marginBottom: spacing[4],
  },
  greetingSub: {
    fontSize: 13,
    color: colors.neutral.mutedText,
    fontWeight: '500',
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginTop: 2,
  },
  activeOrderBanner: {
    backgroundColor: colors.primary.light,
    borderWidth: 1,
    borderColor: colors.primary.sage,
    borderRadius: radius.lg,
    padding: spacing[3],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing[4],
  },
  activeOrderLeft: {
    flex: 1,
  },
  activeOrderBadge: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary.deepOlive,
    textTransform: 'uppercase',
  },
  activeOrderNumber: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  activeOrderMeta: {
    fontSize: 12,
    color: colors.neutral.mutedText,
  },
  activeOrderAction: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary.olive,
  },
  aiHeroCard: {
    backgroundColor: colors.primary.deepOlive,
    borderRadius: radius.xl,
    padding: spacing[5],
    marginBottom: spacing[5],
    shadowColor: colors.neutral.espresso,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  aiBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 4,
    borderRadius: radius.sm,
    marginBottom: spacing[2],
  },
  aiBadgeText: {
    color: colors.surface.cream,
    fontSize: 11,
    fontWeight: '700',
  },
  aiHeroTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.surface.cream,
    lineHeight: 26,
    marginBottom: spacing[2],
  },
  aiHeroSub: {
    fontSize: 13,
    color: '#D2D9C5',
    lineHeight: 18,
    marginBottom: spacing[4],
  },
  aiHeroButton: {
    backgroundColor: colors.surface.cream,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: radius.md,
    alignSelf: 'flex-start',
  },
  aiHeroButtonText: {
    color: colors.primary.deepOlive,
    fontSize: 13,
    fontWeight: '700',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[5],
    gap: spacing[2],
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surface.cream,
    borderRadius: radius.md,
    padding: spacing[3],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  actionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  actionSub: {
    fontSize: 10,
    color: colors.neutral.mutedText,
    textAlign: 'center',
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  seeAll: {
    fontSize: 13,
    color: colors.primary.olive,
    fontWeight: '600',
  },
  featuredGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  productCard: {
    width: '48%',
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.neutral.border,
    marginBottom: spacing[2],
  },
  productImg: {
    width: '100%',
    height: 120,
    backgroundColor: colors.surface.cream,
  },
  productInfo: {
    padding: spacing[3],
  },
  tagRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 4,
  },
  dietTag: {
    fontSize: 9,
    backgroundColor: colors.primary.light,
    color: colors.primary.deepOlive,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: '600',
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: 2,
  },
  productDesc: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    lineHeight: 15,
    marginBottom: spacing[2],
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary.deepOlive,
  },
  addBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary.olive,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: -2,
  },
});
