import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { AiRecommendation } from '../../../../packages/types/index';

export const AiBaristaScreen: React.FC = () => {
  const { navigate, products } = useApp();

  const [energy, setEnergy] = useState<'Düşük' | 'Dengeli' | 'Yüksek'>('Düşük');
  const [goal, setGoal] = useState<'Odaklanma' | 'Stres Azaltma' | 'Bağışıklık' | 'Detoks' | 'Spor & Protein'>('Odaklanma');
  const [caffeine, setCaffeine] = useState<'Kafeinli' | 'Hafif Kafein' | 'Kafeinsiz'>('Hafif Kafein');
  const [diet, setDiet] = useState<string[]>(['Vegan']);

  const toggleDiet = (tag: string) => {
    setDiet((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const handleGenerateRecommendation = () => {
    // Deterministic menu-grounded selection from mock catalog
    let matchedProduct = products.find((p) => p.slug === 'matcha-collagen-zen-latte') || products[0];

    if (goal === 'Odaklanma') {
      matchedProduct = products.find((p) => p.slug === 'lions-mane-focus-brew') || matchedProduct;
    } else if (goal === 'Spor & Protein') {
      matchedProduct = products.find((p) => p.slug === 'vanilla-pea-protein-smoothie') || matchedProduct;
    } else if (goal === 'Bağışıklık') {
      matchedProduct = products.find((p) => p.slug === 'golden-turmeric-immunity-elixir') || matchedProduct;
    }

    const recommendation: AiRecommendation = {
      productId: matchedProduct.id,
      productName: matchedProduct.name,
      imageUrl: matchedProduct.imageUrl,
      basePrice: matchedProduct.basePrice,
      matchScore: 98,
      explanation: `B+ AI Motoru modunuzu ("${goal}") ve enerji ihtiyacınızı analiz etti. Bilişsel fonksiyonları destekleyen adaptif nootropikler ve ${matchedProduct.caffeineMg > 0 ? `${matchedProduct.caffeineMg}mg kontrollü kafein` : 'kafeinsiz formül'} ile hedefinize tam uyum sağlar.`,
      matchedPreferences: [
        `Hedef: ${goal}`,
        `Enerji Durumu: ${energy}`,
        `Kafein: ${caffeine}`,
        ...diet.map((d) => `Tercih: ${d}`),
      ],
      isAvailable: true,
    };

    navigate('AI_RECOMMENDATION', { product: matchedProduct, recommendation });
  };

  return (
    <View style={styles.container}>
      <Header title="B+ AI Barista" showBack={false} />
      <Banner message="GROUNDED MOCK SCENARIO • Sadece aktif menü kataloğundaki ürünler önerilir" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Intro */}
        <View style={styles.introCard}>
          <Text style={styles.sparkle}>✨</Text>
          <Text style={styles.introTitle}>Fonksiyonel Reçete Motoru</Text>
          <Text style={styles.introDesc}>
            Biyo-ritminize, ruh halinize ve beslenme hedeflerinize uygun kişisel wellness içeceğini keşfedin.
          </Text>
        </View>

        {/* Question 1: Energy */}
        <View style={styles.questionCard}>
          <Text style={styles.qNum}>ADIM 1 / 4</Text>
          <Text style={styles.qTitle}>Şu anki enerji seviyeniz nedir?</Text>
          <View style={styles.pillRow}>
            {(['Düşük', 'Dengeli', 'Yüksek'] as const).map((lvl) => (
              <TouchableOpacity
                key={lvl}
                style={[styles.pill, energy === lvl && styles.pillActive]}
                onPress={() => setEnergy(lvl)}
              >
                <Text style={[styles.pillText, energy === lvl && styles.pillTextActive]}>
                  {lvl === 'Düşük' ? '🔋 Yorgun & Düşük' : lvl === 'Dengeli' ? '⚡ Dengeli' : '🔥 Zirvede'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Question 2: Functional Goal */}
        <View style={styles.questionCard}>
          <Text style={styles.qNum}>ADIM 2 / 4</Text>
          <Text style={styles.qTitle}>Bugün içeceğinizden en büyük beklentiniz?</Text>
          <View style={styles.pillWrap}>
            {(['Odaklanma', 'Stres Azaltma', 'Bağışıklık', 'Detoks', 'Spor & Protein'] as const).map((g) => (
              <TouchableOpacity
                key={g}
                style={[styles.pill, goal === g && styles.pillActive]}
                onPress={() => setGoal(g)}
              >
                <Text style={[styles.pillText, goal === g && styles.pillTextActive]}>
                  {g === 'Odaklanma'
                    ? '🧠 Zihinsel Odak'
                    : g === 'Stres Azaltma'
                    ? '🧘 Sakinleşme & Zen'
                    : g === 'Bağışıklık'
                    ? '🛡️ Güçlü Bağışıklık'
                    : g === 'Detoks'
                    ? '🌿 Arınma & Sindirim'
                    : '💪 Kas & Protein'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Question 3: Caffeine */}
        <View style={styles.questionCard}>
          <Text style={styles.qNum}>ADIM 3 / 4</Text>
          <Text style={styles.qTitle}>Kafein hassasiyetiniz?</Text>
          <View style={styles.pillRow}>
            {(['Kafeinli', 'Hafif Kafein', 'Kafeinsiz'] as const).map((c) => (
              <TouchableOpacity
                key={c}
                style={[styles.pill, caffeine === c && styles.pillActive]}
                onPress={() => setCaffeine(c)}
              >
                <Text style={[styles.pillText, caffeine === c && styles.pillTextActive]}>
                  {c}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Question 4: Dietary Preferences */}
        <View style={styles.questionCard}>
          <Text style={styles.qNum}>ADIM 4 / 4</Text>
          <Text style={styles.qTitle}>Diyet veya alerjen tercihleri?</Text>
          <View style={styles.pillWrap}>
            {['Vegan', 'Glutensiz', 'Şekersiz', 'Laktozsuz'].map((d) => {
              const isSelected = diet.includes(d);
              return (
                <TouchableOpacity
                  key={d}
                  style={[styles.pill, isSelected && styles.pillActive]}
                  onPress={() => toggleDiet(d)}
                >
                  <Text style={[styles.pillText, isSelected && styles.pillTextActive]}>
                    {isSelected ? `✓ ${d}` : `+ ${d}`}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={handleGenerateRecommendation}
          activeOpacity={0.85}
        >
          <Text style={styles.submitText}>✨ Kişisel Reçetemi Oluştur</Text>
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
    paddingBottom: 40,
    gap: spacing[3],
  },
  introCard: {
    backgroundColor: colors.primary.deepOlive,
    borderRadius: radius.xl,
    padding: spacing[4],
    alignItems: 'center',
    textAlign: 'center',
  },
  sparkle: {
    fontSize: 28,
    marginBottom: spacing[1],
  },
  introTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.surface.cream,
    marginBottom: 4,
  },
  introDesc: {
    fontSize: 12,
    color: '#D8DFCC',
    textAlign: 'center',
    lineHeight: 16,
  },
  questionCard: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  qNum: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary.olive,
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  qTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[3],
  },
  pillRow: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  pillWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  pill: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderRadius: radius.md,
    backgroundColor: colors.surface.cream,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  pillActive: {
    backgroundColor: colors.primary.olive,
    borderColor: colors.primary.olive,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.neutral.espresso,
  },
  pillTextActive: {
    color: '#FFF',
  },
  submitBtn: {
    backgroundColor: colors.primary.deepOlive,
    borderRadius: radius.lg,
    paddingVertical: spacing[4],
    alignItems: 'center',
    marginTop: spacing[2],
    shadowColor: colors.primary.deepOlive,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  submitText: {
    color: colors.surface.cream,
    fontSize: 15,
    fontWeight: '800',
  },
});
