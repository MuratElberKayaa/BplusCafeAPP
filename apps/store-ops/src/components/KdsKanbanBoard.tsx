'use client';

import React from 'react';
import { Order, OrderStatus } from '../../../../packages/types/index';

interface KdsKanbanBoardProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
  onUpdateStatus: (orderId: string, nextStatus: OrderStatus) => void;
}

export const KdsKanbanBoard: React.FC<KdsKanbanBoardProps> = ({
  orders,
  onSelectOrder,
  onUpdateStatus,
}) => {
  const columns: { status: OrderStatus; title: string; color: string; bg: string }[] = [
    { status: 'NEW', title: 'YENİ SİPARİŞLER', color: '#B8863B', bg: '#FDF5E8' },
    { status: 'PREPARING', title: 'HAZIRLANIYOR', color: '#68734B', bg: '#EAEFE2' },
    { status: 'READY', title: 'TESLİME HAZIR', color: '#4B7354', bg: '#E8F2EA' },
    { status: 'COMPLETED', title: 'TAMAMLANDI', color: '#6B675F', bg: '#F2EFEB' },
  ];

  return (
    <div style={styles.board}>
      {columns.map((col) => {
        const columnOrders = orders.filter((o) => {
          if (col.status === 'NEW') return o.status === 'NEW' || o.status === 'CONFIRMED';
          return o.status === col.status;
        });

        return (
          <div key={col.status} style={styles.column}>
            {/* Column Header */}
            <div style={{ ...styles.columnHeader, borderTopColor: col.color }}>
              <div style={styles.columnTitleRow}>
                <h2 style={styles.columnTitle}>{col.title}</h2>
                <span style={{ ...styles.countBadge, backgroundColor: col.color }}>
                  {columnOrders.length}
                </span>
              </div>
            </div>

            {/* Orders List */}
            <div style={styles.cardsContainer}>
              {columnOrders.length === 0 ? (
                <div style={styles.emptyCard}>
                  <span style={styles.emptyText}>Bekleyen sipariş yok</span>
                </div>
              ) : (
                columnOrders.map((order) => {
                  const elapsed = order.elapsedMinutes || 2;
                  const isUrgent = elapsed > 8;

                  return (
                    <div
                      key={order.id}
                      style={{
                        ...styles.card,
                        borderColor: isUrgent ? '#9E3E37' : '#E3DEC3',
                      }}
                      onClick={() => onSelectOrder(order)}
                    >
                      {/* Card Top: Order Number & Timer */}
                      <div style={styles.cardTop}>
                        <div style={styles.orderIdBox}>
                          <span style={styles.orderNumber}>#{order.orderNumber}</span>
                          <span style={styles.customerName}>{order.customerName}</span>
                        </div>
                        <div
                          style={{
                            ...styles.timerBadge,
                            backgroundColor: isUrgent ? '#FCECEB' : '#F4F0E6',
                            color: isUrgent ? '#9E3E37' : '#68734B',
                          }}
                        >
                          ⏱️ {elapsed} dk
                        </div>
                      </div>

                      {/* Items & Customizations */}
                      <div style={styles.itemsList}>
                        {order.items.map((item, idx) => (
                          <div key={idx} style={styles.itemBox}>
                            <div style={styles.itemNameRow}>
                              <span style={styles.itemQty}>{item.quantity}x</span>
                              <span style={styles.itemName}>{item.productName}</span>
                            </div>

                            {/* HIGH CONTRAST CUSTOMIZATION CALLOUTS */}
                            {item.selectedCustomizations && item.selectedCustomizations.length > 0 && (
                              <div style={styles.customizationGrid}>
                                {item.selectedCustomizations.map((c, cIdx) => (
                                  <span key={cIdx} style={styles.customBadge}>
                                    ⭐ {c.optionName}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Card Action Button */}
                      <div style={styles.actionRow} onClick={(e) => e.stopPropagation()}>
                        {(order.status === 'NEW' || order.status === 'CONFIRMED') && (
                          <button
                            style={{ ...styles.btnAction, backgroundColor: '#68734B' }}
                            onClick={() => onUpdateStatus(order.id, 'PREPARING')}
                          >
                            Hazırla →
                          </button>
                        )}
                        {order.status === 'PREPARING' && (
                          <button
                            style={{ ...styles.btnAction, backgroundColor: '#4B7354' }}
                            onClick={() => onUpdateStatus(order.id, 'READY')}
                          >
                            Hazır ✓
                          </button>
                        )}
                        {order.status === 'READY' && (
                          <button
                            style={{ ...styles.btnAction, backgroundColor: '#34422D' }}
                            onClick={() => onUpdateStatus(order.id, 'COMPLETED')}
                          >
                            Teslim Et ✨
                          </button>
                        )}
                        {order.status === 'COMPLETED' && (
                          <span style={styles.completedTag}>Tamamlandı</span>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
    padding: 16,
    height: 'calc(100vh - 72px)',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  column: {
    backgroundColor: '#F4F0E6',
    borderRadius: 12,
    border: '1px solid #E3DEC3',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  },
  columnHeader: {
    backgroundColor: '#FFFDF8',
    padding: '12px 16px',
    borderTopWidth: 4,
    borderTopStyle: 'solid',
    borderBottom: '1px solid #E3DEC3',
  },
  columnTitleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  columnTitle: {
    fontSize: 13,
    fontWeight: 800,
    color: '#2B231E',
    letterSpacing: 0.5,
  },
  countBadge: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 800,
    padding: '2px 8px',
    borderRadius: 10,
  },
  cardsContainer: {
    padding: 12,
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  emptyCard: {
    textAlign: 'center',
    padding: 24,
    color: '#6B675F',
    fontSize: 13,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1.5,
    borderStyle: 'solid',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(43, 35, 30, 0.05)',
    transition: 'transform 0.15s, box-shadow 0.15s',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderBottom: '1px solid #F2EFEB',
    paddingBottom: 8,
  },
  orderIdBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 900,
    color: '#2B231E',
  },
  customerName: {
    fontSize: 12,
    color: '#6B675F',
    fontWeight: 600,
  },
  timerBadge: {
    padding: '4px 8px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 800,
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 12,
  },
  itemBox: {
    borderLeft: '3px solid #68734B',
    paddingLeft: 8,
  },
  itemNameRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 6,
  },
  itemQty: {
    fontSize: 13,
    fontWeight: 800,
    color: '#68734B',
  },
  itemName: {
    fontSize: 14,
    fontWeight: 700,
    color: '#2B231E',
  },
  customizationGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4,
  },
  customBadge: {
    backgroundColor: '#F3E9DA',
    color: '#34422D',
    border: '1px solid #D8B98C',
    fontSize: 11,
    fontWeight: 800,
    padding: '2px 6px',
    borderRadius: 4,
  },
  actionRow: {
    marginTop: 4,
  },
  btnAction: {
    width: '100%',
    padding: '8px',
    borderRadius: 6,
    border: 'none',
    color: '#FFF',
    fontSize: 13,
    fontWeight: 800,
    cursor: 'pointer',
  },
  completedTag: {
    fontSize: 11,
    fontWeight: 700,
    color: '#6B675F',
    textAlign: 'center',
    display: 'block',
  },
};
