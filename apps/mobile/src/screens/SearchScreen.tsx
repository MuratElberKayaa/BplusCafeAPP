import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const SearchScreen: React.FC = () => {
  const { products, navigate } = useApp();
  const [query, setQuery] = useState('');

  const quickTags = ['Matcha', "Lion's Mane", 'Yulaf', 'Yüksek Protein', 'Mantar Kahvesi', 'Soğuk Demleme'];

  const results = products.filter(
    (p) =>
      query.trim() === '' ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      p.dietaryTags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <Header title="Arama" showBack={true} />

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder="İçecek, içerik veya etiket ara..."
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Text style={styles.clear}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.tagsSection}>
          <Text style={styles.tagsHeader}>Popüler Aramalar</Text>
          <View style={styles.tagWrap}>
            {quickTags.map((tag, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.tagBtn}
                onPress={() => setQuery(tag)}
              >
                <Text style={styles.tagBtnText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.resultHeader}>
          {query.trim() === '' ? 'Öne Çıkan Ürünler' : `"${query}" ile Eşleşen Sonuçlar (${results.length})`}
        </Text>

        <View style={styles.resultsList}>
          {results.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.itemRow}
              onPress={() => navigate('PRODUCT_DETAIL', { product })}
            >
              <Image source={{ uri: product.imageUrl }} style={styles.itemImg} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{product.name}</Text>
                <Text style={styles.itemDesc} numberOfLines={1}>{product.shortDescription}</Text>
                <Text style={styles.itemPrice}>₺{product.basePrice.toFixed(2)}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
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
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.cream,
    margin: spacing[4],
    borderRadius: radius.md,
    paddingHorizontal: spacing[3],
    height: 48,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: spacing[2],
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.neutral.espresso,
  },
  clear: {
    fontSize: 16,
    color: colors.neutral.mutedText,
    padding: 4,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing[4],
    paddingBottom: 40,
  },
  tagsSection: {
    marginBottom: spacing[4],
  },
  tagsHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.neutral.mutedText,
    marginBottom: spacing[2],
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  tagBtn: {
    backgroundColor: colors.surface.card,
    paddingHorizontal: spacing[3],
    paddingVertical: 6,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  tagBtnText: {
    fontSize: 12,
    color: colors.primary.deepOlive,
    fontWeight: '600',
  },
  resultHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  resultsList: {
    gap: spacing[2],
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderRadius: radius.md,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.border,
    gap: spacing[3],
  },
  itemImg: {
    width: 50,
    height: 50,
    borderRadius: radius.sm,
    backgroundColor: colors.surface.cream,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  itemDesc: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginVertical: 2,
  },
  itemPrice: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primary.olive,
  },
  arrow: {
    fontSize: 18,
    color: colors.neutral.mutedText,
  },
});
