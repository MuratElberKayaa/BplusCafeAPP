import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const AiRecommendationScreen: React.FC = () => {
  const { aiRecommendation, selectedProduct, navigate } = useApp();

  if (!aiRecommendation || !selectedProduct) {
    return (
      <View style={styles.centerContainer}>
        <Header title="AI Önerisi" showBack={true} />
        <Text style={styles.emptyText}>Öneri bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="B+ AI Reçete Önerisi" showBack={true} />
      <Banner message="Katalog Grounding Doğrulandı • Yalnızca Stoktaki Gerçek Ürünler" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Recommendation Card */}
        <View style={styles.card}>
          <View style={styles.scoreBadge}>
            <Text style={styles.scoreText}>%{aiRecommendation.matchScore} UYUM</Text>
          </View>
          <Image source={{ uri: aiRecommendation.imageUrl }} style={styles.productImg} />
          <Text style={styles.productTitle}>{aiRecommendation.productName}</Text>
          <Text style={styles.price}>₺{aiRecommendation.basePrice.toFixed(2)}</Text>

          {/* Explanation */}
          <View style={styles.explanationBox}>
            <Text style={styles.sparkle}>✨ Neden Bu İçecek?</Text>
            <Text style={styles.explanationText}>{aiRecommendation.explanation}</Text>
          </View>

          {/* Matched Preferences */}
          <View style={styles.prefSection}>
            <Text style={styles.prefHeader}>Eşleşen Kriterleriniz</Text>
            <View style={styles.prefTags}>
              {aiRecommendation.matchedPreferences.map((pref, idx) => (
                <View key={idx} style={styles.prefTag}>
                  <Text style={styles.prefCheck}>✓</Text>
                  <Text style={styles.prefText}>{pref}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Grounding Disclaimer */}
        <View style={styles.groundingNotice}>
          <Text style={styles.noticeIcon}>🛡️</Text>
          <Text style={styles.noticeText}>
            B+ AI Barista, menü dışı hayali veya stokta olmayan ürünler önermez (ADR-004 Grounding Mimari Kuralı).
          </Text>
        </View>
      </ScrollView>

      {/* Sticky Bottom Actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.customizeBtn}
          onPress={() => navigate('CUSTOMIZE_PRODUCT', { product: selectedProduct })}
        >
          <Text style={styles.customizeText}>Özelleştir ve Ekle →</Text>
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
    borderRadius: radius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
    alignItems: 'center',
    position: 'relative',
  },
  scoreBadge: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    backgroundColor: colors.status.success,
    paddingHorizontal: spacing[3],
    paddingVertical: 4,
    borderRadius: radius.full,
    zIndex: 2,
  },
  scoreText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
  productImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.surface.cream,
    marginVertical: spacing[3],
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.neutral.espresso,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary.olive,
    marginTop: 4,
    marginBottom: spacing[3],
  },
  explanationBox: {
    backgroundColor: colors.surface.cream,
    padding: spacing[3],
    borderRadius: radius.md,
    width: '100%',
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  sparkle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary.deepOlive,
    marginBottom: 4,
  },
  explanationText: {
    fontSize: 12,
    color: colors.neutral.espresso,
    lineHeight: 17,
  },
  prefSection: {
    width: '100%',
  },
  prefHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.neutral.mutedText,
    marginBottom: spacing[2],
  },
  prefTags: {
    gap: spacing[1],
  },
  prefTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  prefCheck: {
    color: colors.status.success,
    fontSize: 12,
    fontWeight: '800',
  },
  prefText: {
    fontSize: 12,
    color: colors.neutral.espresso,
  },
  groundingNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary.light,
    padding: spacing[3],
    borderRadius: radius.md,
    gap: spacing[2],
    borderWidth: 1,
    borderColor: colors.primary.sage,
  },
  noticeIcon: {
    fontSize: 18,
  },
  noticeText: {
    flex: 1,
    fontSize: 11,
    color: colors.primary.deepOlive,
    lineHeight: 15,
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
  customizeBtn: {
    backgroundColor: colors.primary.olive,
    paddingVertical: spacing[3],
    borderRadius: radius.md,
    alignItems: 'center',
  },
  customizeText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '800',
  },
});
