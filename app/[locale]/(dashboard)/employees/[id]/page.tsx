'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useEmployee } from '@/hooks/useEmployee';
import { Breadcrumbs } from '@/components/organisms';
import { Box } from '@mui/material';

const EmployeePage = () => {
  const { id } = useParams();
  const employeeId = typeof id === 'string' ? id : '';

  const { data: employee, isLoading: loadingEmployee } = useEmployee(employeeId);

  return (
    <>
      <Breadcrumbs pageTitle={`${employee?.firstName} ${employee?.lastName}`} />
      <Box></Box>
    </>
  );
};

export default EmployeePage;
