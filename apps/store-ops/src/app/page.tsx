'use client';

import React, { useState } from 'react';
import {
  mockActiveOrders,
  mockProducts,
  Order,
  OrderStatus,
  Product,
} from '../../../../packages/types/index';
import { KdsHeader } from '../components/KdsHeader';
import { KdsKanbanBoard } from '../components/KdsKanbanBoard';
import { OrderDetailDrawer } from '../components/OrderDetailDrawer';
import { QuickStockModal } from '../components/QuickStockModal';

export default function StoreOpsPage() {
  const [orders, setOrders] = useState<Order[]>(mockActiveOrders);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isQuickStockOpen, setIsQuickStockOpen] = useState<boolean>(false);

  // Status transition handler (Flow C)
  const handleUpdateStatus = (orderId: string, nextStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            status: nextStatus,
          };
        }
        return order;
      })
    );
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder((prev) => (prev ? { ...prev, status: nextStatus } : null));
    }
  };

  // 86 / Quick Stock Toggle
  const handleToggleStock = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          return { ...p, isAvailable: !p.isAvailable };
        }
        return p;
      })
    );
  };

  const outOfStockCount = products.filter((p) => !p.isAvailable).length;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFDF8' }}>
      <KdsHeader
        onOpenQuickStock={() => setIsQuickStockOpen(true)}
        outOfStockCount={outOfStockCount}
      />

      <KdsKanbanBoard
        orders={orders}
        onSelectOrder={(order) => setSelectedOrder(order)}
        onUpdateStatus={handleUpdateStatus}
      />

      <OrderDetailDrawer
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onUpdateStatus={handleUpdateStatus}
      />

      <QuickStockModal
        isOpen={isQuickStockOpen}
        products={products}
        onClose={() => setIsQuickStockOpen(false)}
        onToggleStock={handleToggleStock}
      />
    </main>
  );
}
