import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const OrderHistoryScreen: React.FC = () => {
  const { orderHistory, navigate } = useApp();

  return (
    <View style={styles.container}>
      <Header title="Sipariş Geçmişim" showBack={true} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {orderHistory.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.cardTop}>
              <View>
                <Text style={styles.orderNum}>#{order.orderNumber}</Text>
                <Text style={styles.orderDate}>{order.createdAt} • Gel-Al Sipariş</Text>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  order.status === 'COMPLETED' ? styles.statusCompleted : styles.statusActive,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    order.status === 'COMPLETED' ? styles.statusCompletedText : styles.statusActiveText,
                  ]}
                >
                  {order.status === 'COMPLETED' ? 'Tamamlandı' : 'Hazırlanıyor'}
                </Text>
              </View>
            </View>

            <View style={styles.itemsList}>
              {order.items.map((item, idx) => (
                <Text key={idx} style={styles.itemText}>
                  {item.quantity}x {item.productName}
                </Text>
              ))}
            </View>

            <View style={styles.cardBottom}>
              <Text style={styles.totalText}>Toplam: ₺{order.total.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.reorderBtn}
                onPress={() => navigate('MENU')}
              >
                <Text style={styles.reorderBtnText}>Tekrar Sipariş Ver</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[2],
  },
  orderNum: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  orderDate: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.sm,
  },
  statusCompleted: {
    backgroundColor: colors.status.successLight,
  },
  statusActive: {
    backgroundColor: colors.primary.light,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
  },
  statusCompletedText: {
    color: colors.status.success,
  },
  statusActiveText: {
    color: colors.primary.deepOlive,
  },
  itemsList: {
    paddingVertical: spacing[2],
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.neutral.lightGray,
    marginVertical: spacing[2],
  },
  itemText: {
    fontSize: 12,
    color: colors.neutral.espresso,
    lineHeight: 18,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  totalText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  reorderBtn: {
    backgroundColor: colors.surface.cream,
    paddingHorizontal: spacing[3],
    paddingVertical: 6,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  reorderBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
});
