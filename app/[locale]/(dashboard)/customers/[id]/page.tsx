'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useCustomer } from '@/hooks/useCustomer';
import { Breadcrumbs } from '@/components/organisms';
import { Box } from '@mui/material';

const CustomerPage = () => {
  const { id } = useParams();
  const customerId = typeof id === 'string' ? id : '';

  const { data: customer, isLoading: loadingCustomer } = useCustomer(customerId);

  console.log(id);
  console.log(customer);

  return (
    <>
      <Breadcrumbs pageTitle={`${customer?.companyName}`} />
      <Box></Box>
    </>
  );
};

export default CustomerPage;
