'use client';

import { useEffect } from 'react';

const ChartHost = ({
  title,
  icon,
  data,
  mainColor,
  primaryColor,
  textColor,
  total,
  percentage,
}: {
  title: string;
  icon: string;
  data: string;
  mainColor: string;
  primaryColor: string;
  textColor: string;
  total: number;
  percentage: number;
}) => {
  useEffect(() => {
    const scriptId = 't-katherine-chart';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'http://localhost:4174/t-katherine.js';
      script.type = 'module';
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <t-katherine-chart
        title={title}
        icon={icon}
        data={data}
        main-color={mainColor}
        primary-color={primaryColor}
        text-color={textColor}
        total={total}
        percentage={percentage}
      />
    </>
  );
};

export default ChartHost;
