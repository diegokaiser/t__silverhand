import ChartHost from '@/components/layout/ChartHost';
import { Grid } from '@mui/material';
import React from 'react';

const page = () => {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={3}>
        {/* 1 */}
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title="Ordenes mensuales"
            icon="Chart2"
            data={JSON.stringify([10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25])}
            mainColor="#4680FF"
            primaryColor="#F8F9FA"
            textColor="#1D263"
            total={3000}
            percentage={30.6}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title="Ordenes trimestrales"
            icon="ChartSquare"
            data={JSON.stringify([10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25])}
            mainColor="#de7700"
            primaryColor="#F8ECD4"
            textColor="#1D263"
            total={290}
            percentage={30.6}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title="Ordenes semestrales"
            icon="Chart2"
            data={JSON.stringify([10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25])}
            mainColor="#107d4f"
            primaryColor="#DFEFE9"
            textColor="#1D263"
            total={1568}
            percentage={30.6}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <ChartHost
            title="Ordenes anuales"
            icon="ChartSquare"
            data={JSON.stringify([10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25])}
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
