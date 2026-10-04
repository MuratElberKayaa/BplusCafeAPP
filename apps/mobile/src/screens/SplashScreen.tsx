import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import { colors, spacing, radius } from '../../../../packages/ui/src/tokens';

export const SplashScreen: React.FC = () => {
  const { navigate } = useApp();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigate('WELCOME')}
    >
      <View style={styles.logoBadge}>
        <Text style={styles.logoText}>B+</Text>
      </View>
      <Text style={styles.title}>WELLNESS CAFÉ</Text>
      <Text style={styles.subtitle}>by Mineiro Coffee</Text>
      <Text style={styles.motto}>"Mindful Coffee & Functional Botanicals"</Text>

      <View style={styles.tapPrompt}>
        <Text style={styles.tapText}>Başlamak için dokunun →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.deepOlive,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing[6],
  },
  logoBadge: {
    width: 90,
    height: 90,
    borderRadius: radius.xl,
    backgroundColor: colors.surface.cream,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  logoText: {
    fontSize: 44,
    fontWeight: '900',
    color: colors.primary.deepOlive,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.surface.cream,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 13,
    color: colors.accent.latte,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: spacing[4],
  },
  motto: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#D8DFCC',
    textAlign: 'center',
  },
  tapPrompt: {
    position: 'absolute',
    bottom: 50,
  },
  tapText: {
    color: colors.surface.cream,
    fontSize: 13,
    fontWeight: '600',
    opacity: 0.8,
  },
});
