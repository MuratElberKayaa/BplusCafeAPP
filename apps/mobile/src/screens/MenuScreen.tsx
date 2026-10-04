import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const MenuScreen: React.FC = () => {
  const { products, categories, navigate } = useApp();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCat === 'all' || p.categoryId === selectedCat;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.dietaryTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <Header title="B+ Menü" showBack={false} />

      {/* Search Bar & Filter Button */}
      <View style={styles.searchBarRow}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="İçecek, içerik veya etiket ara..."
            placeholderTextColor={colors.neutral.mutedText}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearSearch}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigate('FILTERS')}
          accessibilityRole="button"
          accessibilityLabel="Filtreler"
        >
          <Text style={styles.filterIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Categories Horizontal Scroll */}
      <View style={styles.categoriesWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
          <TouchableOpacity
            style={[styles.categoryPill, selectedCat === 'all' && styles.categoryPillActive]}
            onPress={() => setSelectedCat('all')}
          >
            <Text style={[styles.categoryText, selectedCat === 'all' && styles.categoryTextActive]}>
              Tümü
            </Text>
          </TouchableOpacity>
          {categories.map((cat) => {
            const isActive = selectedCat === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.categoryPill, isActive && styles.categoryPillActive]}
                onPress={() => setSelectedCat(cat.id)}
              >
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Products List */}
      <ScrollView style={styles.productList} contentContainerStyle={styles.productContent}>
        {filteredProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productRow}
            onPress={() => navigate('PRODUCT_DETAIL', { product })}
            activeOpacity={0.8}
          >
            <Image source={{ uri: product.imageUrl }} style={styles.productImg} />
            <View style={styles.productDetails}>
              <View style={styles.tagRow}>
                {product.dietaryTags.map((tag, idx) => (
                  <Text key={idx} style={styles.tagBadge}>
                    {tag}
                  </Text>
                ))}
                {product.caffeineMg > 0 ? (
                  <Text style={styles.caffeineBadge}>{product.caffeineMg}mg Kafein</Text>
                ) : (
                  <Text style={styles.decafBadge}>Kafeinsiz</Text>
                )}
              </View>
              <Text style={styles.productTitle}>{product.name}</Text>
              <Text style={styles.productDesc} numberOfLines={2}>
                {product.shortDescription}
              </Text>
              <View style={styles.bottomRow}>
                <Text style={styles.price}>₺{product.basePrice.toFixed(2)}</Text>
                <TouchableOpacity
                  style={styles.customizeBtn}
                  onPress={() => navigate('CUSTOMIZE_PRODUCT', { product })}
                >
                  <Text style={styles.customizeText}>Özelleştir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.warmWhite,
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
    paddingBottom: spacing[2],
    gap: spacing[2],
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.cream,
    borderRadius: radius.md,
    paddingHorizontal: spacing[3],
    height: 44,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: spacing[2],
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: colors.neutral.espresso,
  },
  clearSearch: {
    fontSize: 14,
    color: colors.neutral.mutedText,
    padding: 4,
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.surface.cream,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  filterIcon: {
    fontSize: 18,
  },
  categoriesWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.border,
    paddingVertical: spacing[2],
  },
  categoryScroll: {
    paddingHorizontal: spacing[4],
    gap: spacing[2],
  },
  categoryPill: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: radius.full,
    backgroundColor: colors.surface.cream,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  categoryPillActive: {
    backgroundColor: colors.primary.deepOlive,
    borderColor: colors.primary.deepOlive,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.neutral.mutedText,
  },
  categoryTextActive: {
    color: colors.surface.cream,
  },
  productList: {
    flex: 1,
  },
  productContent: {
    padding: spacing[4],
    paddingBottom: 40,
    gap: spacing[3],
  },
  productRow: {
    flexDirection: 'row',
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.border,
    gap: spacing[3],
  },
  productImg: {
    width: 90,
    height: 90,
    borderRadius: radius.md,
    backgroundColor: colors.surface.cream,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 4,
  },
  tagBadge: {
    fontSize: 10,
    backgroundColor: colors.primary.light,
    color: colors.primary.deepOlive,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    fontWeight: '600',
  },
  caffeineBadge: {
    fontSize: 10,
    backgroundColor: colors.accent.latteLight,
    color: colors.neutral.espresso,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    fontWeight: '600',
  },
  decafBadge: {
    fontSize: 10,
    backgroundColor: colors.status.successLight,
    color: colors.status.success,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    fontWeight: '600',
  },
  productTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  productDesc: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    lineHeight: 16,
    marginVertical: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  customizeBtn: {
    backgroundColor: colors.primary.olive,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: radius.sm,
  },
  customizeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
