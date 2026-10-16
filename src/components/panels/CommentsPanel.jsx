import { Btn, Field, TextArea, TextInput } from '../ui';

const NOTES = {
  wechat: 'Shown in the Moments comment box and the “liked by” row.',
  tumblr: 'Each entry becomes a reblog in the chain (name + message).',
  slack: 'The first entry is used as the thread replier in the replies row.',
  storm: 'Each entry becomes a stacked reply under the main post.',
  chat: 'Entries render as conversation bubbles — even rows are outgoing.',
};

export default function CommentsPanel({ cfg, api }) {
  const items = cfg.comments.items;
  const template = cfg.template;

  const setItem = (i, key, v) =>
    api.updateLive((c) => ({
      ...c,
      comments: {
        ...c.comments,
        items: c.comments.items.map((it, idx) => (idx === i ? { ...it, [key]: v } : it)),
      },
    }));

  const addItem = () =>
    api.update((c) => ({
      ...c,
      comments: {
        ...c.comments,
        items: [...c.comments.items, { name: 'New user', text: 'New comment', verified: false }],
      },
    }));

  const toggleVerified = (i) =>
    api.update((c) => ({
      ...c,
      comments: {
        ...c.comments,
        items: c.comments.items.map((it, idx) => (idx === i ? { ...it, verified: !it.verified } : it)),
      },
    }));

  const removeItem = (i) =>
    api.update((c) => ({
      ...c,
      comments: { ...c.comments, items: c.comments.items.filter((_, idx) => idx !== i) },
    }));

  const setLikedBy = (v) =>
    api.updateLive((c) => ({ ...c, comments: { ...c.comments, likedBy: v } }));

  return (
    <div className="stack">
      <p className="muted small">{NOTES[template] || 'Edit the comment content for this card.'}</p>

      {items.length === 0 && (
        <p className="muted small">No comments yet — add one below.</p>
      )}

      {items.map((item, i) => (
        <div className="cmt-item" key={i}>
          <div className="cmt-head">
            <span className="cmt-idx">{i + 1}</span>
            <TextInput
              value={item.name}
              placeholder="Username"
              onFocus={api.checkpoint}
              onChange={(v) => setItem(i, 'name', v)}
            />
            <button
              type="button"
              className={`cmt-verify ${item.verified ? 'is-on' : ''}`}
              title={item.verified ? 'Remove verified badge' : 'Give verified badge'}
              onClick={() => toggleVerified(i)}
            >
              ✓
            </button>
            <button
              type="button"
              className="cmt-del"
              title="Remove comment"
              onClick={() => removeItem(i)}
            >
              ✕
            </button>
          </div>
          <TextArea
            value={item.text}
            rows={2}
            placeholder="Comment text"
            onFocus={api.checkpoint}
            onChange={(v) => setItem(i, 'text', v)}
          />
        </div>
      ))}

      <div className="row">
        <Btn onClick={addItem} variant="solid">+ Add comment</Btn>
        {items.length > 0 && (
          <Btn onClick={() => api.update((c) => ({ ...c, comments: { ...c.comments, items: [] } }))}>
            Clear all
          </Btn>
        )}
      </div>

      {template === 'wechat' && (
        <>
          <div className="divider" />
          <Field label="Liked by" hint="comma-separated names">
            <TextInput
              value={cfg.comments.likedBy}
              placeholder="Alex Chen, Sam Ortiz"
              onFocus={api.checkpoint}
              onChange={setLikedBy}
            />
          </Field>
        </>
      )}
    </div>
  );
}
