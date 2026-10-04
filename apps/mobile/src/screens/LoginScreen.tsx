import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const LoginScreen: React.FC = () => {
  const { login, navigate, cart, screenHistory } = useApp();
  const [phone, setPhone] = useState('0532 555 44 33');

  const handleLogin = () => {
    login();
    // If user came from Cart (Flow A unauth checkout), resume checkout
    if (cart.length > 0) {
      navigate('CHECKOUT');
    } else {
      navigate('HOME');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Giriş Yap" showBack={true} showCart={false} />
      <Banner message="PROTOTİP MODU • Tek tıkla demo kullanıcı olarak giriş yapabilirsiniz" />

      <View style={styles.content}>
        <Text style={styles.title}>B+ Hesabınıza Giriş Yapın</Text>
        <Text style={styles.sub}>
          Sipariş durumunu takip etmek, B+ Wallet bakiyenizi kullanmak ve puan kazanmak için giriş yapın.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Cep Telefonu Numarası</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="05XX XXX XX XX"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
          <Text style={styles.submitBtnText}>Hızlı Demo Girişi (Ahmet Yılmaz)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.guestAction}
          onPress={() => {
            if (cart.length > 0) {
              navigate('CHECKOUT');
            } else {
              navigate('HOME');
            }
          }}
        >
          <Text style={styles.guestActionText}>Misafir Olarak Devam Et →</Text>
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
  content: {
    padding: spacing[5],
    paddingTop: spacing[6],
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: spacing[2],
  },
  sub: {
    fontSize: 13,
    color: colors.neutral.mutedText,
    lineHeight: 18,
    marginBottom: spacing[5],
  },
  inputGroup: {
    marginBottom: spacing[4],
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.neutral.border,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    fontSize: 15,
    color: colors.neutral.espresso,
  },
  submitBtn: {
    backgroundColor: colors.primary.olive,
    borderRadius: radius.md,
    paddingVertical: spacing[4],
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  guestAction: {
    alignItems: 'center',
    paddingVertical: spacing[3],
  },
  guestActionText: {
    color: colors.neutral.mutedText,
    fontSize: 13,
    fontWeight: '600',
  },
});
