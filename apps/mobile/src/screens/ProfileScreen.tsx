import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

export const ProfileScreen: React.FC = () => {
  const { user, walletBalance, rewardsBalance, login, logout, navigate } = useApp();

  return (
    <View style={styles.container}>
      <Header title="Hesabım" showBack={false} />
      <Banner message="Kullanıcı Oturum & Tercih Yönetimi" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {user ? (
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{user.firstName[0]}{user.lastName[0]}</Text>
            </View>
            <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.phone}>{user.phone}</Text>
          </View>
        ) : (
          <View style={styles.guestCard}>
            <Text style={styles.guestTitle}>Giriş Yapılmadı</Text>
            <Text style={styles.guestSub}>
              Sipariş geçmişinize, B+ Cüzdanınıza ve özel ödüllerinize erişmek için oturum açın.
            </Text>
            <TouchableOpacity style={styles.loginBtn} onPress={login}>
              <Text style={styles.loginBtnText}>Hızlı Demo Girişi Yap</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Quick Balance Cards */}
        <View style={styles.balanceGrid}>
          <TouchableOpacity style={styles.balanceBox} onPress={() => navigate('WALLET')}>
            <Text style={styles.balanceLabel}>B+ WALLET</Text>
            <Text style={styles.balanceVal}>₺{walletBalance.toFixed(2)}</Text>
            <Text style={styles.balanceSub}>Test Bakiyesi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.balanceBox} onPress={() => navigate('REWARDS')}>
            <Text style={styles.balanceLabel}>REWARDS</Text>
            <Text style={styles.balanceVal}>{rewardsBalance} ⭐</Text>
            <Text style={styles.balanceSub}>DEMO_RULE</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Shortcuts */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.menuRow} onPress={() => navigate('ORDER_HISTORY')}>
            <Text style={styles.menuIcon}>📜</Text>
            <Text style={styles.menuTitle}>Sipariş Geçmişim</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => navigate('AI_BARISTA')}>
            <Text style={styles.menuIcon}>✨</Text>
            <Text style={styles.menuTitle}>AI Barista Tercihlerim</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => navigate('SETTINGS')}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuTitle}>Ayarlar & Bildirimler</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Dietary Preferences Card */}
        {user && (
          <View style={styles.dietCard}>
            <Text style={styles.dietTitle}>Beslenme Tercihleriniz</Text>
            <View style={styles.tagWrap}>
              {user.dietaryPreferences.map((p, idx) => (
                <View key={idx} style={styles.dietTag}>
                  <Text style={styles.dietTagText}>🌿 {p}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {user && (
          <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
            <Text style={styles.logoutText}>Çıkış Yap</Text>
          </TouchableOpacity>
        )}
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: spacing[3],
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary.deepOlive,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  avatarText: {
    color: colors.surface.cream,
    fontSize: 22,
    fontWeight: '800',
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.neutral.espresso,
  },
  email: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    marginTop: 2,
  },
  phone: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    marginTop: 1,
  },
  guestCard: {
    backgroundColor: colors.surface.cream,
    borderRadius: radius.lg,
    padding: spacing[4],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  guestTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.neutral.espresso,
    marginBottom: 4,
  },
  guestSub: {
    fontSize: 12,
    color: colors.neutral.mutedText,
    textAlign: 'center',
    marginBottom: spacing[3],
  },
  loginBtn: {
    backgroundColor: colors.primary.olive,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: radius.md,
  },
  loginBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },
  balanceGrid: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  balanceBox: {
    flex: 1,
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  balanceLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.neutral.mutedText,
    letterSpacing: 0.5,
  },
  balanceVal: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.primary.deepOlive,
    marginVertical: 2,
  },
  balanceSub: {
    fontSize: 10,
    color: colors.neutral.mutedText,
  },
  section: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.lightGray,
  },
  menuIcon: {
    fontSize: 18,
    marginRight: spacing[3],
  },
  menuTitle: {
    flex: 1,
    fontSize: 14,
    color: colors.neutral.espresso,
    fontWeight: '600',
  },
  menuArrow: {
    fontSize: 18,
    color: colors.neutral.mutedText,
  },
  dietCard: {
    backgroundColor: colors.surface.card,
    borderRadius: radius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.neutral.border,
  },
  dietTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.neutral.espresso,
    marginBottom: spacing[2],
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  dietTag: {
    backgroundColor: colors.primary.light,
    paddingHorizontal: spacing[3],
    paddingVertical: 4,
    borderRadius: radius.sm,
  },
  dietTagText: {
    fontSize: 11,
    color: colors.primary.deepOlive,
    fontWeight: '700',
  },
  logoutBtn: {
    paddingVertical: spacing[3],
    alignItems: 'center',
  },
  logoutText: {
    color: colors.status.error,
    fontSize: 14,
    fontWeight: '700',
  },
});
