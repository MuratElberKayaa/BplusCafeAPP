import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const FiltersScreen: React.FC = () => {
  const { goBack } = useApp();

  const [dietFilters, setDietFilters] = useState<string[]>(['Vegan']);
  const [caffeineFilter, setCaffeineFilter] = useState<'Tümü' | 'Kafeinsiz' | 'Yüksek Kafein'>('Tümü');

  const toggleDiet = (tag: string) => {
    setDietFilters((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <View style={styles.container}>
      <Header title="Filtreler" showBack={true} showCart={false} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Beslenme ve Diyet</Text>
          <View style={styles.tagWrap}>
            {['Vegan', 'Glutensiz', 'Keto', 'Yüksek Protein', 'Şekersiz', 'Organik'].map((tag) => {
              const isSelected = dietFilters.includes(tag);
              return (
                <TouchableOpacity
                  key={tag}
                  style={[styles.tagPill, isSelected && styles.tagPillActive]}
                  onPress={() => toggleDiet(tag)}
                >
                  <Text style={[styles.tagText, isSelected && styles.tagTextActive]}>
                    {isSelected ? `✓ ${tag}` : tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Kafein Düzeyi</Text>
          <View style={styles.tagWrap}>
            {(['Tümü', 'Kafeinsiz', 'Yüksek Kafein'] as const).map((c) => {
              const isSelected = caffeineFilter === c;
              return (
                <TouchableOpacity
                  key={c}
                  style={[styles.tagPill, isSelected && styles.tagPillActive]}
                  onPress={() => setCaffeineFilter(c)}
                >
                  <Text style={[styles.tagText, isSelected && styles.tagTextActive]}>
                    {c}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity style={styles.applyBtn} onPress={goBack}>
          <Text style={styles.applyBtnText}>Filtreleri Uygula</Text>
        </TouchableOpacity>
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
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  tagPill: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: radius.md,
    backgroundColor: colors.surface.cream,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  tagPillActive: {
    backgroundColor: colors.primary.olive,
    borderColor: colors.primary.olive,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.neutral.espresso,
  },
  tagTextActive: {
    color: '#FFF',
  },
  applyBtn: {
    backgroundColor: colors.primary.olive,
    borderRadius: radius.md,
    paddingVertical: spacing[4],
    alignItems: 'center',
    marginTop: spacing[3],
  },
  applyBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
