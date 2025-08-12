'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useOrder } from '@/hooks/useOrder';
import { Breadcrumbs } from '@/components/organisms';
import { Box } from '@mui/material';

const OrderPage = () => {
  const { id } = useParams();
  const orderId = typeof id === 'string' ? id : '';

  const { data: order, isLoading: loadingOrder } = useOrder(orderId);

  return (
    <>
      <Breadcrumbs pageTitle={`Order N° ${order?.orderId}`} />
      <Box></Box>
    </>
  );
};

export default OrderPage;
