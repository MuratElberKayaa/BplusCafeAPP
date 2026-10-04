import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { OrderStatus } from '../../../../packages/types/index';

export const OrderTrackingScreen: React.FC = () => {
  const { activeOrder, storeInfo, navigate } = useApp();
  const [simulatedStatus, setSimulatedStatus] = useState<OrderStatus>(activeOrder?.status || 'PREPARING');

  const steps: { key: OrderStatus; label: string; desc: string }[] = [
    { key: 'CONFIRMED', label: 'Alındı', desc: 'Siparişiniz onaylandı' },
    { key: 'PREPARING', label: 'Hazırlanıyor', desc: 'Barista içeceğinizi hazırlıyor' },
    { key: 'READY', label: 'Hazır', desc: 'Teslim noktasından alabilirsiniz' },
    { key: 'COMPLETED', label: 'Teslim Edildi', desc: 'Afiyet olsun, şifa olsun!' },
  ];

  const getStepIndex = (status: OrderStatus) => {
    switch (status) {
      case 'CONFIRMED':
        return 0;
      case 'PREPARING':
        return 1;
      case 'READY':
        return 2;
      case 'COMPLETED':
        return 3;
      default:
        return 1;
    }
  };

  const currentIndex = getStepIndex(simulatedStatus);

  return (
    <View style={styles.container}>
      <Header title="Sipariş Takibi" showBack={true} showCart={false} />
      <Banner message="KDS ENTEGRASYON SİMÜLASYONU • Canlı Durum Değişimi" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {/* Order Header Card */}
        <View style={styles.orderCard}>
          <View style={styles.orderTop}>
            <View>
              <Text style={styles.orderLabel}>Aktif Sipariş</Text>
              <Text style={styles.orderNumber}>#{activeOrder?.orderNumber || 'B+4921'}</Text>
            </View>
            <View style={styles.timeBadge}>
              <Text style={styles.timeText}>{activeOrder?.estimatedReadyAt || '10-12 dk'}</Text>
            </View>
          </View>

          {/* Stepper Progress */}
          <View style={styles.stepperContainer}>
            {steps.map((s, idx) => {
              const isPast = idx < currentIndex;
              const isCurrent = idx === currentIndex;
              return (
                <View key={s.key} style={styles.stepItem}>
                  <View style={styles.stepDotContainer}>
                    <View
                      style={[
                        styles.stepDot,
                        isPast && styles.stepDotPast,
                        isCurrent && styles.stepDotCurrent,
                      ]}
                    >
                      <Text style={styles.stepDotText}>{isPast ? '✓' : idx + 1}</Text>
                    </View>
                    {idx < steps.length - 1 && (
                      <View style={[styles.stepLine, idx < currentIndex && styles.stepLineActive]} />
                    )}
                  </View>
                  <View style={styles.stepTextContainer}>
                    <Text style={[styles.stepLabel, isCurrent && styles.stepLabelActive]}>
                      {s.label}
                    </Text>
                    <Text style={styles.stepDesc}>{s.desc}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Pickup Code Card */}
        <View style={styles.pickupCard}>
          <Text style={styles.pickupTitle}>Teslim Alma Kodu</Text>
          <Text style={styles.pickupSub}>Baristaya aşağıdaki teslim kodunu gösteriniz:</Text>
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>{activeOrder?.orderNumber || 'B+4921'}</Text>
          </View>
          <Text style={styles.storeAddress}>{storeInfo.name} • {storeInfo.address}</Text>
        </View>

        {/* Prototype Demo Controls */}
        <View style={styles.demoControlCard}>
          <Text style={styles.demoTitle}>🎮 Prototip Durum Simülatörü</Text>
          <Text style={styles.demoDesc}>
            Aşağıdaki butonlara tıklayarak KDS ve mağaza operasyon durumunu test edebilirsiniz:
          </Text>
          <View style={styles.demoButtons}>
            <TouchableOpacity
              style={[styles.demoBtn, simulatedStatus === 'CONFIRMED' && styles.demoBtnActive]}
              onPress={() => setSimulatedStatus('CONFIRMED')}
            >
              <Text style={styles.demoBtnText}>1. Alındı</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.demoBtn, simulatedStatus === 'PREPARING' && styles.demoBtnActive]}
              onPress={() => setSimulatedStatus('PREPARING')}
            >
              <Text style={styles.demoBtnText}>2. Hazırlanıyor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.demoBtn, simulatedStatus === 'READY' && styles.demoBtnActive]}
              onPress={() => setSimulatedStatus('READY')}
            >
              <Text style={styles.demoBtnText}>3. Hazır</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.demoBtn, simulatedStatus === 'COMPLETED' && styles.demoBtnActive]}
              onPress={() => setSimulatedStatus('COMPLETED')}
            >
              <Text style={styles.demoBtnText}>4. Teslim</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.homeAction} onPress={() => navigate('HOME')}>
          <Text style={styles.homeActionText}>Ana Sayfaya Dön</Text>
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
    paddingBottom: 40,
  },
  orderCard: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  orderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  orderLabel: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    fontWeight: '600',
  },
  orderNumber: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.neutral.espresso,
  },
  timeBadge: {
    backgroundColor: colors.primary.light,
    paddingHorizontal: spacing[3],
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  timeText: {
    color: colors.primary.deepOlive,
    fontWeight: '700',
    fontSize: 12,
  },
  stepperContainer: {
    gap: spacing[3],
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  stepDotContainer: {
    alignItems: 'center',
    width: 28,
  },
  stepDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.surface.cream,
    borderWidth: 2,
    borderColor: colors.neutral.border,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  stepDotPast: {
    backgroundColor: colors.status.success,
    borderColor: colors.status.success,
  },
  stepDotCurrent: {
    backgroundColor: colors.primary.olive,
    borderColor: colors.primary.olive,
  },
  stepDotText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
  },
  stepLine: {
    width: 2,
    height: 28,
    backgroundColor: colors.neutral.border,
    marginTop: 2,
  },
  stepLineActive: {
    backgroundColor: colors.primary.olive,
  },
  stepTextContainer: {
    flex: 1,
    paddingTop: 2,
  },
  stepLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.neutral.mutedText,
  },
  stepLabelActive: {
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  stepDesc: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 1,
  },
  pickupCard: {
    backgroundColor: colors.surface.cream,
    borderRadius: radius.lg,
    padding: spacing[4],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  pickupTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  pickupSub: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    marginTop: 2,
    marginBottom: spacing[3],
  },
  codeBox: {
    backgroundColor: colors.surface.card,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.primary.olive,
    marginBottom: spacing[2],
  },
  codeText: {
    fontSize: 26,
    fontWeight: '900',
    color: colors.primary.deepOlive,
    letterSpacing: 2,
  },
  storeAddress: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    textAlign: 'center',
  },
  demoControlCard: {
    backgroundColor: '#F9F7F1',
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#E6E1D2',
  },
  demoTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primary.deepOlive,
    marginBottom: 4,
  },
  demoDesc: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginBottom: spacing[3],
  },
  demoButtons: {
    flexDirection: 'row',
    gap: spacing[1],
  },
  demoBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radius.sm,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.neutral.border,
    alignItems: 'center',
  },
  demoBtnActive: {
    backgroundColor: colors.primary.olive,
    borderColor: colors.primary.olive,
  },
  demoBtnText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  homeAction: {
    alignItems: 'center',
    paddingVertical: spacing[3],
  },
  homeActionText: {
    fontSize: 14,
    color: colors.primary.olive,
    fontWeight: '700',
  },
});
