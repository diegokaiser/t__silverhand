import React from 'react';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import ChartHost from '@/components/layout/ChartHost';

const page = () => {
  const t = useTranslations('pages.dashboard');

  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* 1 */}
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title={t('charts.monthlyOrders')}
            icon="Chart2"
            data={[10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]}
            mainColor="#4680FF"
            primaryColor="#F8F9FA"
            textColor="#1D263"
            total={3000}
            percentage={30.6}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title={t('charts.quaterlyOrders')}
            icon="ChartSquare"
            data={[10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]}
            mainColor="#de7700"
            primaryColor="#F8ECD4"
            textColor="#1D263"
            total={290}
            percentage={30.6}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title={t('charts.biannualOrders')}
            icon="Chart2"
            data={[10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]}
            mainColor="#107d4f"
            primaryColor="#DFEFE9"
            textColor="#1D263"
            total={1568}
            percentage={30.6}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title={t('charts.annualyOrders')}
            icon="ChartSquare"
            data={[10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]}
            mainColor="#d31c1c"
            primaryColor="#F5DCDB"
            textColor="#1D263"
            total={290}
            percentage={30.6}
          />
        </Grid>

        {/* 2 */}
        <Grid size={12}></Grid>

        {/* 3 */}
        <Grid size={{ xs: 12, lg: 3 }}></Grid>
        <Grid size={{ xs: 12, lg: 6 }}></Grid>
        <Grid size={{ xs: 12, lg: 3 }}></Grid>
      </Grid>
    </>
  );
};

export default page;
