'use client';

import { useEffect, useState } from 'react';

type Props = {
  title: string;
  icon: string;
  data: number[];
  mainColor: string;
  primaryColor: string;
  textColor: string;
  total: number;
  percentage: number;
};

const SCRIPT_ID = 't-katherine-script';
const ELEMENT_TAG = 't-katherine-chart';
const SCRIPT_SRC = 'http://localhost:4174/t-katherine.js';

let katherineReadyPromise: Promise<void> | null = null;

function ensureKatherineLoaded(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();

  if (customElements.get(ELEMENT_TAG)) return Promise.resolve();

  if (katherineReadyPromise) return katherineReadyPromise;

  katherineReadyPromise = new Promise<void>((resolve, reject) => {
    const finish = () =>
      customElements
        .whenDefined(ELEMENT_TAG)
        .then(() => resolve())
        .catch(reject);

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (existing) {
      if (existing.dataset.loaded === 'true') {
        finish();
      } else {
        existing.addEventListener('load', () => {
          existing.dataset.loaded = 'true';
          finish();
        });
        existing.addEventListener('error', (e) =>
          reject(new Error('Katherine the Pure has fallen'))
        );
      }
      return;
    }

    const s = document.createElement('script');
    s.type = 'module';
    s.src = SCRIPT_SRC;
    s.id = SCRIPT_ID;
    s.addEventListener('load', () => {
      s.dataset.loaded = 'true';
      finish();
    });
    s.addEventListener('error', () => reject(new Error('Katherine the Pure has fallen')));
    document.body.appendChild(s);
  });

  return katherineReadyPromise;
}

const ChartHost = ({
  title,
  icon,
  data,
  mainColor,
  primaryColor,
  textColor,
  total,
  percentage,
}: Props) => {
  const [ready, setReady] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    ensureKatherineLoaded()
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch((e) => {
        if (!cancelled) setErr(e instanceof Error ? e.message : String(e));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (err) {
    return <div>Katherine the Pure has fallen</div>;
  }

  if (!ready) {
    return <div>Summoning Katherine the Pure</div>;
  }

  return (
    <t-katherine-chart
      title={title}
      icon={icon}
      data={data}
      main-color={mainColor}
      primary-color={primaryColor}
      text-color={textColor}
      total={total as any}
      percentage={percentage as any}
    />
  );
};

export default ChartHost;
