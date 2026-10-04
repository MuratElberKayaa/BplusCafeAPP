'use client';

import React, { useState, useEffect } from 'react';

interface KdsHeaderProps {
  onOpenQuickStock: () => void;
  outOfStockCount: number;
}

export const KdsHeader: React.FC<KdsHeaderProps> = ({ onOpenQuickStock, outOfStockCount }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <div style={styles.brandBox}>
          <span style={styles.brand}>B+</span>
        </div>
        <div>
          <div style={styles.titleRow}>
            <h1 style={styles.title}>KDS Barista & Mutfak Ekranı</h1>
            <span style={styles.branchBadge}>Şube #1 (Kadıköy Moda)</span>
          </div>
          <div style={styles.subRow}>
            <span style={styles.statusDot} />
            <span style={styles.statusText}>Şube Açık • Paket Alım Aktif</span>
            <span style={styles.divider}>•</span>
            <span style={styles.cutoffText}>
              Sipariş Kesilme: 15 dk önce (DEMO VALUE ONLY)
            </span>
          </div>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.clockBox}>
          <span style={styles.clock}>{time || '12:00:00'}</span>
        </div>

        <button style={styles.stockBtn} onClick={onOpenQuickStock}>
          <span>⚡ Hızlı Stok (86)</span>
          {outOfStockCount > 0 && (
            <span style={styles.stockBadge}>{outOfStockCount} Kapalı</span>
          )}
        </button>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    height: 72,
    backgroundColor: '#34422D',
    color: '#FFFDF8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    borderBottom: '2px solid #68734B',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  brandBox: {
    width: 44,
    height: 44,
    backgroundColor: '#F4F0E6',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    color: '#34422D',
    fontWeight: 900,
    fontSize: 22,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: -0.2,
  },
  branchBadge: {
    backgroundColor: '#68734B',
    padding: '2px 8px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
  },
  subRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
    fontSize: 12,
    color: '#D8DFCC',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#4B7354',
  },
  statusText: {
    fontWeight: 600,
  },
  divider: {
    opacity: 0.6,
  },
  cutoffText: {
    color: '#E8D4A8',
    fontWeight: 600,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  clockBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '6px 14px',
    borderRadius: 8,
  },
  clock: {
    fontSize: 16,
    fontWeight: 700,
    fontVariantNumeric: 'tabular-nums',
    color: '#F4F0E6',
  },
  stockBtn: {
    backgroundColor: '#B8863B',
    color: '#FFF',
    border: 'none',
    borderRadius: 8,
    padding: '8px 16px',
    fontWeight: 700,
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'opacity 0.2s',
  },
  stockBadge: {
    backgroundColor: '#9E3E37',
    color: '#FFF',
    fontSize: 11,
    padding: '2px 6px',
    borderRadius: 10,
    fontWeight: 800,
  },
};
