import { useEffect, useRef, useState } from 'react';
import { CARDS } from '../cards/registry';
import { templateWidth } from '../state';
import { Watermark } from '../cards/shared';
import { AvatarCtx } from '../cards/ctx';
import { fontById } from '../lib/fonts';

export default function Preview({ cfg, api, cardRef }) {
  const wrapRef = useRef(null);
  const [availW, setAvailW] = useState(640);
  const [cardH, setCardH] = useState(420);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const measure = () => setAvailW((prev) => (Math.abs(prev - el.clientWidth) > 1 ? el.clientWidth : prev));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;
    const measure = () => {
      const h = el.offsetHeight;
      setCardH((prev) => (Math.abs(prev - h) > 0.5 ? h : prev));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cardRef, cfg.template, cfg.dark, cfg.style]);

  const naturalW = templateWidth(cfg.template);
  const scale = Math.max(0.2, Math.min(1, (availW - 16) / naturalW));
  const Card = CARDS[cfg.template] || CARDS.x;

  return (
    <div className="preview" ref={wrapRef}>
      <div
        className="preview-stage"
        style={{ width: naturalW * scale, height: Math.max(1, cardH) * scale }}
      >
        <div className="card-scale" style={{ transform: `scale(${scale})`, width: naturalW }}>
          <div
            className="card-measure"
            ref={cardRef}
            style={{
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: `${cfg.style.radius}px`,
              '--card-font': fontById(cfg.style.font).css,
            }}
          >
            <AvatarCtx.Provider value={api}>
              <Card cfg={cfg} api={api} />
            </AvatarCtx.Provider>
            <Watermark cfg={cfg} />
          </div>
        </div>
      </div>
    </div>
  );
}
