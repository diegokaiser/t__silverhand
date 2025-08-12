'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { DataTable, DataTablePageEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useOrdersPaginated } from '@/hooks/useOrder';
import { formatDateFromString } from '@/utils/formatDateFromString';
import { Order } from '@/types/order';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/organisms';

const OrdersPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data: ordersPaginated, isLoading: loadingOrdersPaginated } = useOrdersPaginated(
    page,
    pageSize
  );

  const orderIdBodyTemplate = (rowData: Order) => {
    return <Link href={`/orders/${rowData.orderId}`}>{rowData.orderId}</Link>;
  };

  const customerBodyTemplate = (rowData: Order) => {
    return <Link href={`/customers/${rowData.customerId}`}>{rowData.customerId}</Link>;
  };

  const employeeBodyTemplate = (rowData: Order) => {
    return <Link href={`/employees/${rowData.employeeId}`}>{rowData.employeeId}</Link>;
  };

  const orderDateBodyTemplate = (rowData: Order) => {
    return <>{formatDateFromString(rowData.orderDate, 'MM/dd/yyyy', 'en-US')}</>;
  };

  const requiredDateBodyTemplate = (rowData: Order) => {
    return <>{formatDateFromString(rowData.requiredDate, 'MM/dd/yyyy', 'en-US')}</>;
  };

  const shippedDateBodyTemplate = (rowData: Order) => {
    return <>{formatDateFromString(rowData.shippedDate, 'MM/dd/yyyy', 'en-US')}</>;
  };

  const handlePage = (event: DataTablePageEvent) => {
    const newPage = event.first / event.rows + 1;
    const newPageSize = event.rows;

    setPage(newPage);
    setPageSize(newPageSize);
  };

  return (
    <>
      <Breadcrumbs pageTitle="Orders list" />
      <Box>
        <DataTable
          value={ordersPaginated?.data}
          lazy
          paginator
          first={(page - 1) * pageSize}
          rows={pageSize}
          totalRecords={ordersPaginated?.metadata.totalCount}
          onPage={handlePage}
          loading={loadingOrdersPaginated}
        >
          <Column field="orderId" header="ID" body={orderIdBodyTemplate} />
          <Column field="customerId" header="Customer" body={customerBodyTemplate} />
          <Column field="employeeId" header="Employee" body={employeeBodyTemplate} />
          <Column field="orderDate" header="Order Date" body={orderDateBodyTemplate} />
          <Column field="requiredDate" header="Required Date" body={requiredDateBodyTemplate} />
          <Column field="shippedDate" header="Shipped Date" body={shippedDateBodyTemplate} />
          <Column field="shipVia" header="Ship Vía" />
          <Column field="freight" header="Freight" />
          <Column field="shipName" header="Ship Name" />
          <Column field="shipCountry" header="Country" />
          <Column field="shipCity" header="City" />
        </DataTable>
      </Box>
    </>
  );
};

export default OrdersPage;
