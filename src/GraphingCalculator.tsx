
import React, { useEffect, useRef } from 'react';

// Minimal Desmos type for window.Desmos
interface DesmosAPI {
  GraphingCalculator: (element: HTMLElement, options?: Record<string, unknown>) => { destroy: () => void };
}

type WindowWithDesmos = Window & { Desmos?: DesmosAPI };

// This component uses the Desmos Graphing Calculator widget
// Docs: https://www.desmos.com/api/v1.6/docs/index.html

const DESMOS_CDN = 'https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

const GraphingCalculator: React.FC = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const desmosInstance = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    // Load Desmos script if not already loaded
    if (!(window as WindowWithDesmos).Desmos) {
      const script = document.createElement('script');
      script.src = DESMOS_CDN;
      script.async = true;
      script.onload = () => {
        const win = window as WindowWithDesmos;
        if (calculatorRef.current && win.Desmos) {
          desmosInstance.current = win.Desmos.GraphingCalculator(calculatorRef.current, {
            expressions: true,
            settingsMenu: true,
            zoomButtons: true,
            expressionsTopbar: true,
            keypad: true,
            border: true,
          });
        }
      };
      document.body.appendChild(script);
    } else {
      const win = window as WindowWithDesmos;
      if (calculatorRef.current && win.Desmos) {
        desmosInstance.current = win.Desmos.GraphingCalculator(calculatorRef.current, {
          expressions: true,
          settingsMenu: true,
          zoomButtons: true,
          expressionsTopbar: true,
          keypad: true,
          border: true,
        });
      }
    }
    return () => {
      if (desmosInstance.current) {
        desmosInstance.current.destroy();
        desmosInstance.current = null;
      }
    };
  }, []);

  return (
    <div style={{ minWidth: 320, minHeight: 320, width: '100%', height: 320, borderRadius: 8, overflow: 'hidden', background: '#fff', border: '2px solid #6366f1', marginTop: 8 }}>
      <div ref={calculatorRef} style={{ width: '100%', height: 320 }} />
    </div>
  );
};

export default GraphingCalculator;
