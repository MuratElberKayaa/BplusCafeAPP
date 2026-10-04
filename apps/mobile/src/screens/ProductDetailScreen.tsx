import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const ProductDetailScreen: React.FC = () => {
  const { selectedProduct, navigate } = useApp();

  if (!selectedProduct) {
    return (
      <View style={styles.centerContainer}>
        <Header title="Ürün Detayı" showBack={true} />
        <Text style={styles.emptyText}>Ürün bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={selectedProduct.name} showBack={true} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Image source={{ uri: selectedProduct.imageUrl }} style={styles.heroImage} />

        <View style={styles.metaSection}>
          <View style={styles.dietTags}>
            {selectedProduct.dietaryTags.map((tag, i) => (
              <Text key={i} style={styles.dietBadge}>
                {tag}
              </Text>
            ))}
            <Text style={styles.caffeineBadge}>
              {selectedProduct.caffeineMg > 0 ? `${selectedProduct.caffeineMg} mg Kafein` : 'Kafeinsiz'}
            </Text>
          </View>
          <Text style={styles.title}>{selectedProduct.name}</Text>
          <Text style={styles.price}>₺{selectedProduct.basePrice.toFixed(2)}</Text>
          <Text style={styles.desc}>{selectedProduct.description}</Text>
        </View>

        {/* Sensory Scores */}
        <View style={styles.scoreCard}>
          <Text style={styles.sectionHeader}>Duyusal Profil & Fonksiyon</Text>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Tatlılık Seviyesi</Text>
            <Text style={styles.scoreValue}>{'★'.repeat(selectedProduct.sweetnessScore)}{'☆'.repeat(5 - selectedProduct.sweetnessScore)}</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Gövde / Yoğunluk</Text>
            <Text style={styles.scoreValue}>{'★'.repeat(selectedProduct.intensityScore)}{'☆'.repeat(5 - selectedProduct.intensityScore)}</Text>
          </View>
        </View>

        {/* Nutrition Card */}
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Besin Değerleri (Porsiyon)</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutVal}>{selectedProduct.nutrition.caloriesKcal}</Text>
              <Text style={styles.nutLabel}>Kalori (kcal)</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutVal}>{selectedProduct.nutrition.proteinG}g</Text>
              <Text style={styles.nutLabel}>Protein</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutVal}>{selectedProduct.nutrition.carbG}g</Text>
              <Text style={styles.nutLabel}>Karbonhidrat</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutVal}>{selectedProduct.nutrition.sugarG}g</Text>
              <Text style={styles.nutLabel}>Şeker</Text>
            </View>
          </View>
        </View>

        {/* Ingredients & Allergens */}
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>İçindekiler & Alerjenler</Text>
          <Text style={styles.ingredientsText}>
            {selectedProduct.ingredients.map((ing) => ing.name + (ing.isOrganic ? ' (Organik)' : '')).join(', ')}
          </Text>
          {selectedProduct.allergens.length > 0 && (
            <View style={styles.allergenBox}>
              <Text style={styles.allergenTitle}>⚠️ Alerjen Uyarısı:</Text>
              <Text style={styles.allergenDesc}>
                Bu ürün {selectedProduct.allergens.map((a) => a.name).join(', ')} içerir.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomPriceLabel}>Başlangıç Fiyatı</Text>
          <Text style={styles.bottomPriceVal}>₺{selectedProduct.basePrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => navigate('CUSTOMIZE_PRODUCT', { product: selectedProduct })}
          accessibilityRole="button"
          accessibilityLabel="Özelleştir ve sepete ekle"
        >
          <Text style={styles.actionBtnText}>Reçeteyi Özelleştir →</Text>
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: colors.neutral.mutedText,
    marginTop: 20,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  heroImage: {
    width: '100%',
    height: 240,
    backgroundColor: colors.surface.cream,
  },
  metaSection: {
    padding: spacing[4],
  },
  dietTags: {
    flexDirection: 'row',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  dietBadge: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary.deepOlive,
    backgroundColor: colors.primary.light,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.sm,
  },
  caffeineBadge: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.neutral.espresso,
    backgroundColor: colors.accent.latteLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.sm,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: spacing[1],
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary.olive,
    marginBottom: spacing[3],
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral.mutedText,
  },
  card: {
    backgroundColor: colors.surface.card,
    marginHorizontal: spacing[4],
    marginBottom: spacing[3],
    padding: spacing[4],
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  scoreCard: {
    backgroundColor: colors.surface.cream,
    marginHorizontal: spacing[4],
    marginBottom: spacing[3],
    padding: spacing[4],
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[2],
  },
  scoreLabel: {
    fontSize: 13,
    color: colors.neutral.mutedText,
  },
  scoreValue: {
    fontSize: 14,
    color: colors.primary.olive,
    fontWeight: '700',
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutVal: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  nutLabel: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  ingredientsText: {
    fontSize: 13,
    color: colors.neutral.espresso,
    lineHeight: 18,
    marginBottom: spacing[2],
  },
  allergenBox: {
    backgroundColor: colors.status.warningLight,
    padding: spacing[3],
    borderRadius: radius.md,
    marginTop: spacing[2],
    borderWidth: 1,
    borderColor: '#E8D4A8',
  },
  allergenTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.status.warning,
    marginBottom: 2,
  },
  allergenDesc: {
    fontSize: 12,
    color: colors.neutral.espresso,
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
  bottomPriceLabel: {
    fontSize: 11,
    color: colors.neutral.mutedText,
  },
  bottomPriceVal: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  actionBtn: {
    backgroundColor: colors.primary.olive,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderRadius: radius.md,
  },
  actionBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
