import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const SettingsScreen: React.FC = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [promoEnabled, setPromoEnabled] = useState(false);
  const [aiHistoryEnabled, setAiHistoryEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Header title="Ayarlar" showBack={true} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Bildirim Tercihleri</Text>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.title}>Sipariş Durum Bildirimleri</Text>
              <Text style={styles.sub}>Hazırlanıyor ve hazır bildirimleri anlık gelsin</Text>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: colors.neutral.lightGray, true: colors.primary.olive }}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.title}>Kampanya ve Ödül Duyuruları</Text>
              <Text style={styles.sub}>Yeni menü ve dönemsel indirim bildirimleri</Text>
            </View>
            <Switch
              value={promoEnabled}
              onValueChange={setPromoEnabled}
              trackColor={{ false: colors.neutral.lightGray, true: colors.primary.olive }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionHeader}>AI & Gizlilik</Text>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.title}>AI Barista Geçmişini Kaydet</Text>
              <Text style={styles.sub}>Daha isabetli fonksiyonel öneriler için tercihlerinizi saklar</Text>
            </View>
            <Switch
              value={aiHistoryEnabled}
              onValueChange={setAiHistoryEnabled}
              trackColor={{ false: colors.neutral.lightGray, true: colors.primary.olive }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Hakkında</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Uygulama Sürümü:</Text>
            <Text style={styles.metaVal}>v1.0.0 (Phase 2 Prototype)</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Marka:</Text>
            <Text style={styles.metaVal}>B+ Wellness Café by Mineiro Coffee</Text>
          </View>
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
    gap: spacing[3],
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primary.deepOlive,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing[3],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.lightGray,
  },
  rowText: {
    flex: 1,
    paddingRight: spacing[3],
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.neutral.espresso,
  },
  sub: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  metaRow: {
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
    color: colors.neutral.espresso,
  },
});
