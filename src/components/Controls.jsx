import { useState } from 'react';
import { Section } from './ui';
import PhotoPanel from './panels/PhotoPanel';
import TextPanel from './panels/TextPanel';
import TemplatePanel from './panels/TemplatePanel';
import CommentsPanel from './panels/CommentsPanel';
import EngagementPanel from './panels/EngagementPanel';
import StylePanel from './panels/StylePanel';
import ExportPanel from './panels/ExportPanel';
import { TEMPLATES, templateSupportsComments } from '../state';
import { formatCount } from '../lib/format';

export default function Controls({ cfg, api, exportProps }) {
  const [open, setOpen] = useState({ photo: true, text: true, template: false, comments: false, engagement: false, style: false, export: false });
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const tplName = TEMPLATES.find((t) => t.id === cfg.template)?.name || '';
  const likes = formatCount(cfg.stats.likes);
  const hasComments = templateSupportsComments(cfg.template);

  return (
    <div className="controls">
      <Section title="Photo" open={open.photo} onToggle={() => toggle('photo')} badge={cfg.photo.src ? '1 image' : 'empty'}>
        <PhotoPanel cfg={cfg} api={api} />
      </Section>

      <Section title="Text" open={open.text} onToggle={() => toggle('text')}>
        <TextPanel cfg={cfg} api={api} />
      </Section>

      <Section title="Social Templates" open={open.template} onToggle={() => toggle('template')} badge={tplName}>
        <TemplatePanel cfg={cfg} api={api} />
      </Section>

      {hasComments && (
        <Section title="Comments" open={open.comments} onToggle={() => toggle('comments')} badge={`${cfg.comments.items.length} comments`}>
          <CommentsPanel cfg={cfg} api={api} />
        </Section>
      )}

      <Section title="Engagement" open={open.engagement} onToggle={() => toggle('engagement')} badge={`${likes} likes`}>
        <EngagementPanel cfg={cfg} api={api} />
      </Section>

      <Section title="Style" open={open.style} onToggle={() => toggle('style')} badge={cfg.dark ? 'dark' : 'light'}>
        <StylePanel cfg={cfg} api={api} />
      </Section>

      <Section title="Export" open={open.export} onToggle={() => toggle('export')}>
        <ExportPanel {...exportProps} />
      </Section>
    </div>
  );
}
