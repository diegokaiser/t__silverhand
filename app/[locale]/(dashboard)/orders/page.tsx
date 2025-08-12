'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Box } from '@mui/material';
import { DataTable, DataTablePageEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useOrdersPaginated } from '@/hooks/useOrder';
import { formatDateFromString } from '@/utils/formatDateFromString';
import { Breadcrumbs } from '@/components/organisms';
import { Order } from '@/types/order';

const OrdersPage = () => {
  const t = useTranslations('pages.orders');
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
      <Breadcrumbs pageTitle={t('pageTitle')} />
      <Box>
        <DataTable
          value={ordersPaginated?.data}
          lazy
          paginator
          first={(page - 1) * pageSize}
          rows={pageSize}
          onPage={handlePage}
          loading={loadingOrdersPaginated}
        >
          <Column field="orderId" header={t('table.columns.orderId')} body={orderIdBodyTemplate} />
          <Column
            field="customerId"
            header={t('table.columns.customer')}
            body={customerBodyTemplate}
          />
          <Column
            field="employeeId"
            header={t('table.columns.employee')}
            body={employeeBodyTemplate}
          />
          <Column
            field="orderDate"
            header={t('table.columns.orderDate')}
            body={orderDateBodyTemplate}
          />
          <Column
            field="requiredDate"
            header={t('table.columns.requiredDate')}
            body={requiredDateBodyTemplate}
          />
          <Column
            field="shippedDate"
            header={t('table.columns.shippedDate')}
            body={shippedDateBodyTemplate}
          />
          <Column field="shipVia" header={t('table.columns.shipVia')} />
          <Column field="freight" header={t('table.columns.freight')} />
          <Column field="shipName" header={t('table.columns.shipName')} />
          <Column field="shipCountry" header={t('table.columns.country')} />
          <Column field="shipCity" header={t('table.columns.city')} />
        </DataTable>
      </Box>
    </>
  );
};

export default OrdersPage;
