'use client';

import React from 'react';
import { Product } from '../../../../packages/types/index';

interface QuickStockModalProps {
  isOpen: boolean;
  products: Product[];
  onClose: () => void;
  onToggleStock: (productId: string) => void;
}

export const QuickStockModal: React.FC<QuickStockModalProps> = ({
  isOpen,
  products,
  onClose,
  onToggleStock,
}) => {
  if (!isOpen) return null;

  const outOfStockCount = products.filter((p) => !p.isAvailable).length;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>⚡ Hızlı Stok Yönetimi (86 Ekranı)</h2>
            <p style={styles.sub}>
              Tükenen ürünleri anında kapatın. Mobil uygulamada ve menüde otomatik gizlenir.
            </p>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div style={styles.statusBar}>
          <span style={styles.statusText}>
            Toplam {products.length} ürün • {outOfStockCount} ürün şu an kapalı (86)
          </span>
        </div>

        <div style={styles.list}>
          {products.map((product) => {
            const isAvailable = product.isAvailable;
            return (
              <div key={product.id} style={styles.row}>
                <div style={styles.rowInfo}>
                  <span style={styles.productName}>{product.name}</span>
                  <span style={styles.categoryName}>₺{product.basePrice.toFixed(2)}</span>
                </div>

                <button
                  style={{
                    ...styles.toggleBtn,
                    backgroundColor: isAvailable ? '#4B7354' : '#9E3E37',
                  }}
                  onClick={() => onToggleStock(product.id)}
                >
                  {isAvailable ? '✓ STOKTA' : '⚠️ 86 / TÜKENDİ'}
                </button>
              </div>
            );
          })}
        </div>

        <div style={styles.footer}>
          <button style={styles.doneBtn} onClick={onClose}>
            Değişiklikleri Uygula ve Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(43, 35, 30, 0.65)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#FFFDF8',
    borderRadius: 16,
    width: 600,
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
    overflow: 'hidden',
  },
  header: {
    padding: '20px 24px',
    backgroundColor: '#34422D',
    color: '#FFFDF8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    color: '#F4F0E6',
  },
  sub: {
    fontSize: 12,
    color: '#D8DFCC',
    marginTop: 4,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#FFF',
    fontSize: 22,
    cursor: 'pointer',
  },
  statusBar: {
    backgroundColor: '#F4F0E6',
    padding: '10px 24px',
    borderBottom: '1px solid #E3DEC3',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 700,
    color: '#6B675F',
  },
  list: {
    padding: '16px 24px',
    overflowY: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E3DEC3',
    borderRadius: 10,
  },
  rowInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: 14,
    fontWeight: 700,
    color: '#2B231E',
  },
  categoryName: {
    fontSize: 12,
    color: '#6B675F',
    marginTop: 2,
  },
  toggleBtn: {
    padding: '8px 16px',
    borderRadius: 8,
    border: 'none',
    color: '#FFF',
    fontSize: 12,
    fontWeight: 800,
    cursor: 'pointer',
    minWidth: 120,
    textAlign: 'center',
  },
  footer: {
    padding: '16px 24px',
    backgroundColor: '#F4F0E6',
    borderTop: '1px solid #E3DEC3',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  doneBtn: {
    backgroundColor: '#68734B',
    color: '#FFF',
    border: 'none',
    borderRadius: 8,
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
  },
};
