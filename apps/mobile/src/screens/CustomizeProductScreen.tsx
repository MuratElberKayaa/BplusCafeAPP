import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { SelectedCustomization } from '../../../../packages/types/index';

export const CustomizeProductScreen: React.FC = () => {
  const { selectedProduct, addToCart, navigate } = useApp();

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<{ [groupId: string]: string[] }>(() => {
    if (!selectedProduct) return {};
    const defaults: { [groupId: string]: string[] } = {};
    selectedProduct.customizationGroups.forEach((g) => {
      const def = g.options.find((o) => o.isDefault) || g.options[0];
      if (def) {
        defaults[g.id] = [def.id];
      } else {
        defaults[g.id] = [];
      }
    });
    return defaults;
  });

  if (!selectedProduct) {
    return (
      <View style={styles.centerContainer}>
        <Header title="Özelleştirme" showBack={true} />
        <Text style={styles.emptyText}>Özelleştirilecek ürün bulunamadı.</Text>
      </View>
    );
  }

  const handleSingleSelect = (groupId: string, optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [groupId]: [optionId],
    }));
  };

  const handleMultiSelect = (groupId: string, optionId: string, maxSelections: number) => {
    setSelectedOptions((prev) => {
      const current = prev[groupId] || [];
      if (current.includes(optionId)) {
        return { ...prev, [groupId]: current.filter((id) => id !== optionId) };
      }
      if (current.length >= maxSelections) {
        return prev;
      }
      return { ...prev, [groupId]: [...current, optionId] };
    });
  };

  // Calculate extra price
  let extraPriceTotal = 0;
  const selectedCustomizationList: SelectedCustomization[] = [];

  selectedProduct.customizationGroups.forEach((g) => {
    const selectedIds = selectedOptions[g.id] || [];
    selectedIds.forEach((id) => {
      const opt = g.options.find((o) => o.id === id);
      if (opt) {
        extraPriceTotal += opt.extraPrice;
        selectedCustomizationList.push({
          groupId: g.id,
          groupName: g.name,
          optionId: opt.id,
          optionName: opt.name,
          extraPrice: opt.extraPrice,
        });
      }
    });
  });

  const unitTotal = selectedProduct.basePrice + extraPriceTotal;
  const grandTotal = unitTotal * quantity;

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedCustomizationList, quantity);
    navigate('CART');
  };

  return (
    <View style={styles.container}>
      <Header title={`${selectedProduct.name} Özelleştir`} showBack={true} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.productBanner}>
          <Text style={styles.productName}>{selectedProduct.name}</Text>
          <Text style={styles.productSub}>{selectedProduct.shortDescription}</Text>
        </View>

        {selectedProduct.customizationGroups.map((group) => {
          const isSingle = group.type === 'SINGLE_SELECT';
          const selected = selectedOptions[group.id] || [];

          return (
            <View key={group.id} style={styles.groupCard}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupTitle}>{group.name}</Text>
                <Text style={styles.groupRule}>
                  {group.isRequired ? 'Zorunlu' : 'İsteğe Bağlı'} • {isSingle ? 'Tek Seçim' : `Maks ${group.maxSelections}`}
                </Text>
              </View>

              <View style={styles.optionsList}>
                {group.options.map((opt) => {
                  const isChecked = selected.includes(opt.id);
                  return (
                    <TouchableOpacity
                      key={opt.id}
                      style={[styles.optionRow, isChecked && styles.optionRowActive]}
                      onPress={() =>
                        isSingle
                          ? handleSingleSelect(group.id, opt.id)
                          : handleMultiSelect(group.id, opt.id, group.maxSelections)
                      }
                      accessibilityRole="checkbox"
                      accessibilityState={{ checked: isChecked }}
                    >
                      <View style={styles.optionLeft}>
                        <View style={[styles.checkCircle, isChecked && styles.checkCircleActive]}>
                          {isChecked && <Text style={styles.checkMark}>✓</Text>}
                        </View>
                        <Text style={[styles.optName, isChecked && styles.optNameActive]}>
                          {opt.name}
                        </Text>
                      </View>
                      <Text style={[styles.optPrice, isChecked && styles.optPriceActive]}>
                        {opt.extraPrice > 0 ? `+₺${opt.extraPrice.toFixed(2)}` : 'Ücretsiz'}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}

        {/* Quantity Stepper */}
        <View style={styles.quantityCard}>
          <Text style={styles.groupTitle}>Adet</Text>
          <View style={styles.stepperRow}>
            <TouchableOpacity
              style={styles.stepBtn}
              onPress={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              <Text style={styles.stepBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.stepBtn}
              onPress={() => setQuantity((q) => q + 1)}
            >
              <Text style={styles.stepBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Action */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalLabel}>Toplam ({quantity} Adet)</Text>
          <Text style={styles.totalPrice}>₺{grandTotal.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={handleAddToCart}
          accessibilityRole="button"
          accessibilityLabel={`Sepete Ekle ₺${grandTotal.toFixed(2)}`}
        >
          <Text style={styles.addToCartText}>Sepete Ekle →</Text>
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
    paddingBottom: 110,
    gap: spacing[3],
  },
  productBanner: {
    backgroundColor: colors.surface.cream,
    padding: spacing[4],
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  productName: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  productSub: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  groupCard: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
    paddingBottom: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.border,
  },
  groupTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.neutral.espresso,
  },
  groupRule: {
    fontSize: 11,
    color: colors.neutral.mutedText,
    fontWeight: '500',
  },
  optionsList: {
    gap: spacing[2],
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[3],
    borderRadius: radius.md,
    backgroundColor: colors.surface.warmWhite,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  optionRowActive: {
    borderColor: colors.primary.olive,
    backgroundColor: colors.primary.light,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.neutral.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  checkCircleActive: {
    borderColor: colors.primary.olive,
    backgroundColor: colors.primary.olive,
  },
  checkMark: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
  optName: {
    fontSize: 14,
    color: colors.neutral.espresso,
    fontWeight: '500',
  },
  optNameActive: {
    color: colors.primary.deepOlive,
    fontWeight: '700',
  },
  optPrice: {
    fontSize: 13,
    color: colors.neutral.mutedText,
    fontWeight: '600',
  },
  optPriceActive: {
    color: colors.primary.deepOlive,
    fontWeight: '700',
  },
  quantityCard: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  stepBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface.cream,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  stepBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.neutral.espresso,
    lineHeight: 22,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.neutral.espresso,
    minWidth: 24,
    textAlign: 'center',
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
  totalLabel: {
    fontSize: 11,
    color: colors.neutral.mutedText,
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary.deepOlive,
  },
  addToCartBtn: {
    backgroundColor: colors.primary.olive,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderRadius: radius.md,
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
