import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';

export const RegisterScreen: React.FC = () => {
  const { login, navigate } = useApp();
  const [name, setName] = useState('Ahmet');
  const [surname, setSurname] = useState('Yılmaz');
  const [phone, setPhone] = useState('0532 555 44 33');

  const handleRegister = () => {
    login();
    navigate('HOME');
  };

  return (
    <View style={styles.container}>
      <Header title="Kayıt Ol" showBack={true} showCart={false} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.title}>B+ Dünyasına Katılın</Text>
        <Text style={styles.sub}>
          Fonksiyonel içeceklerle sağlığınızı destekleyin, her siparişte ödüller kazanın.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Ad</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Adınız" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Soyad</Text>
          <TextInput style={styles.input} value={surname} onChangeText={setSurname} placeholder="Soyadınız" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Telefon Numarası</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="05XX XXX XX XX"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleRegister}>
          <Text style={styles.submitBtnText}>Hesap Oluştur & Başla</Text>
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
    padding: spacing[5],
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
    marginBottom: spacing[3],
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
    fontSize: 14,
    color: colors.neutral.espresso,
  },
  submitBtn: {
    backgroundColor: colors.primary.olive,
    borderRadius: radius.md,
    paddingVertical: spacing[4],
    alignItems: 'center',
    marginTop: spacing[4],
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
