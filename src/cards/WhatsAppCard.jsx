import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Check, Dots } from './icons';

export default function WhatsAppCard({ cfg, api }) {
  const accent = accentOf(cfg, '#008069');
  const bg = cardBackground(cfg, '#efe7dd', '#0b141a');
  const parts = String(cfg.timestamp).split('·');
  const time = (parts[0] || '').trim() || '2:34 PM';
  const day = (parts[1] || '').trim() || 'TODAY';

  return (
    <div
      className={`card-root sc-wa ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-wa-header">
        <Avatar cfg={cfg} size={30} />
        <div className="sc-wa-headtext">
          <span className="sc-wa-title">{cfg.author}</span>
          <span className="sc-wa-status">{cfg.show.likes ? `${cfg.stats.likes.toLocaleString('en-US')} members` : 'online'}</span>
        </div>
        <span className="sc-wa-menu"><Dots size={17} /></span>
      </div>

      <div className="sc-wa-chat">
        <span className="sc-wa-daypill">{day.toUpperCase()}</span>

        <div className="sc-wa-bubble" style={{ '--wa-accent': accent }}>
          <Photo cfg={cfg} api={api} ratio="16 / 9" radius={6} className="sc-wa-photo" />
          <div className="sc-wa-text" style={{ fontSize: `${cfg.style.fontSize + 1}px` }}>
            <Body text={cfg.body} />
            <span className="sc-wa-time">
              {time}
              <span className="sc-wa-checks">
                <Check size={13} color="#53bdeb" />
                <Check size={13} color="#53bdeb" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
