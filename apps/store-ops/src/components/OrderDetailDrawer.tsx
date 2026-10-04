'use client';

import React from 'react';
import { Order, OrderStatus } from '../../../../packages/types/index';

interface OrderDetailDrawerProps {
  order: Order | null;
  onClose: () => void;
  onUpdateStatus: (orderId: string, nextStatus: OrderStatus) => void;
}

export const OrderDetailDrawer: React.FC<OrderDetailDrawerProps> = ({
  order,
  onClose,
  onUpdateStatus,
}) => {
  if (!order) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div style={styles.header}>
          <div>
            <div style={styles.orderBadge}>SİPARİŞ DETAYI</div>
            <h2 style={styles.orderNumber}>#{order.orderNumber}</h2>
            <p style={styles.customerName}>Müşteri: {order.customerName}</p>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Status & Timing Banner */}
        <div style={styles.metaBanner}>
          <div style={styles.metaCol}>
            <span style={styles.metaLabel}>Mevcut Durum:</span>
            <span style={styles.metaVal}>{order.status}</span>
          </div>
          <div style={styles.metaCol}>
            <span style={styles.metaLabel}>Bekleme Süresi:</span>
            <span style={styles.metaValHighlight}>{order.elapsedMinutes || 2} dakika</span>
          </div>
          <div style={styles.metaCol}>
            <span style={styles.metaLabel}>Sipariş Saati:</span>
            <span style={styles.metaVal}>{order.createdAt}</span>
          </div>
        </div>

        {/* Detailed Items List */}
        <div style={styles.body}>
          <h3 style={styles.sectionTitle}>İçecek & Reçete Detayları</h3>
          <div style={styles.itemsList}>
            {order.items.map((item, idx) => (
              <div key={idx} style={styles.itemDetailCard}>
                <div style={styles.itemHead}>
                  <span style={styles.itemQtyBadge}>{item.quantity}x</span>
                  <span style={styles.itemTitle}>{item.productName}</span>
                </div>

                {/* Customizations Highlight Box */}
                {item.selectedCustomizations && item.selectedCustomizations.length > 0 ? (
                  <div style={styles.custBox}>
                    <span style={styles.custBoxTitle}>⚠️ BARİSTA ÖZEL DİREKTİFLERİ:</span>
                    <div style={styles.custTagsRow}>
                      {item.selectedCustomizations.map((c, cIdx) => (
                        <div key={cIdx} style={styles.custHighlightTag}>
                          <span style={styles.custCheck}>✓</span>
                          <span style={styles.custTagText}>{c.optionName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={styles.standardBox}>
                    <span style={styles.standardText}>Standart Mağaza Reçetesi (Özelleştirme Yok)</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div style={styles.footer}>
          <div style={styles.btnRow}>
            <button
              style={{ ...styles.actionBtn, backgroundColor: '#68734B' }}
              onClick={() => {
                onUpdateStatus(order.id, 'PREPARING');
                onClose();
              }}
            >
              Hazırlanıyor Yap
            </button>
            <button
              style={{ ...styles.actionBtn, backgroundColor: '#4B7354' }}
              onClick={() => {
                onUpdateStatus(order.id, 'READY');
                onClose();
              }}
            >
              Teslime Hazırla ✓
            </button>
            <button
              style={{ ...styles.actionBtn, backgroundColor: '#34422D' }}
              onClick={() => {
                onUpdateStatus(order.id, 'COMPLETED');
                onClose();
              }}
            >
              Tamamla & Teslim Et ✨
            </button>
          </div>
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
    backgroundColor: 'rgba(43, 35, 30, 0.6)',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 999,
  },
  drawer: {
    width: 480,
    backgroundColor: '#FFFDF8',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-4px 0 24px rgba(0,0,0,0.2)',
  },
  header: {
    padding: '20px 24px',
    backgroundColor: '#34422D',
    color: '#FFFDF8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  orderBadge: {
    fontSize: 11,
    fontWeight: 800,
    color: '#D8B98C',
    letterSpacing: 1,
  },
  orderNumber: {
    fontSize: 32,
    fontWeight: 900,
    color: '#F4F0E6',
    margin: '4px 0',
  },
  customerName: {
    fontSize: 14,
    color: '#D8DFCC',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#FFF',
    fontSize: 22,
    cursor: 'pointer',
    padding: 8,
  },
  metaBanner: {
    backgroundColor: '#F4F0E6',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E3DEC3',
  },
  metaCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  metaLabel: {
    fontSize: 11,
    color: '#6B675F',
    fontWeight: 600,
  },
  metaVal: {
    fontSize: 13,
    fontWeight: 800,
    color: '#2B231E',
  },
  metaValHighlight: {
    fontSize: 13,
    fontWeight: 800,
    color: '#B8863B',
  },
  body: {
    padding: 24,
    flex: 1,
    overflowY: 'auto',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: '#2B231E',
    marginBottom: 16,
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  itemDetailCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E3DEC3',
    borderRadius: 12,
    padding: 16,
  },
  itemHead: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  itemQtyBadge: {
    backgroundColor: '#34422D',
    color: '#FFF',
    fontSize: 13,
    fontWeight: 800,
    padding: '3px 8px',
    borderRadius: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 800,
    color: '#2B231E',
  },
  custBox: {
    backgroundColor: '#FDF5E8',
    border: '2px solid #D8B98C',
    borderRadius: 8,
    padding: 12,
  },
  custBoxTitle: {
    fontSize: 11,
    fontWeight: 900,
    color: '#B8863B',
    display: 'block',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  custTagsRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  custHighlightTag: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    padding: '6px 10px',
    borderRadius: 6,
    border: '1px solid #E8D4A8',
  },
  custCheck: {
    color: '#4B7354',
    fontWeight: 900,
    fontSize: 13,
  },
  custTagText: {
    fontSize: 13,
    fontWeight: 800,
    color: '#2B231E',
  },
  standardBox: {
    backgroundColor: '#F4F0E6',
    padding: '8px 12px',
    borderRadius: 6,
  },
  standardText: {
    fontSize: 12,
    color: '#6B675F',
    fontWeight: 600,
  },
  footer: {
    padding: 20,
    backgroundColor: '#F4F0E6',
    borderTop: '1px solid #E3DEC3',
  },
  btnRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  actionBtn: {
    width: '100%',
    padding: '12px',
    borderRadius: 8,
    border: 'none',
    color: '#FFF',
    fontSize: 14,
    fontWeight: 800,
    cursor: 'pointer',
  },
};
