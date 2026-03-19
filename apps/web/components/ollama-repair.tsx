'use client';

import { useState, useEffect, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

type OllamaStatus = { available: false } | { available: true; models: string[] };

type Feature = {
  key:   string;
  label: string;
  desc:  string;
};

// ─── Pure helpers (outside component — stable references) ────────────────────

/** Parses CSS selectors out of ```css ... ``` fenced blocks in AI output. */
function extractSelectors(text: string): string[] {
  const cssBlocks = [...text.matchAll(/```css\n?([\s\S]*?)```/g)].map((m) => m[1]);
  if (cssBlocks.length === 0) return [];
  return cssBlocks
    .join('\n')
    .split('\n')
    .map((l) => l.replace(/\/\*.*?\*\//g, '').trim())
    .filter((l) => l && !l.startsWith('{') && !l.startsWith('}') && !l.startsWith('display'))
    .map((l) => l.replace(/,$/, '').trim())
    .filter(Boolean);
}

const FEATURES: Feature[] = [
  { key: 'blockShorts',  label: 'Remove Shorts',         desc: 'Shorts shelves in feed, search, and channels' },
  { key: 'hideSidebar',  label: 'Hide recommendations',  desc: '"Up Next" sidebar on watch pages' },
  { key: 'hideTrending', label: 'Hide trending',         desc: 'Trending & Explore in navigation' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function OllamaRepair() {
  const [status, setStatus]         = useState<OllamaStatus | null>(null);
  const [selectedModel, setModel]   = useState('');
  const [feature, setFeature]       = useState('blockShorts');
  const [domHints, setDomHints]     = useState('');
  const [streaming, setStreaming]    = useState(false);
  const [response, setResponse]     = useState('');
  const [saved, setSaved]           = useState<string | null>(null);
  const responseRef                 = useRef<HTMLDivElement>(null);

  // ── Check Ollama on mount ──────────────────────────────────────────────────
  useEffect(() => {
    fetch('/api/ai/models')
      .then((r) => r.json())
      .then((data: OllamaStatus) => {
        setStatus(data);
        if (data.available && data.models.length > 0) {
          // Prefer a code-capable model; fall back to first available
          const preferred = data.models.find(
            (m) => m.includes('codellama') || m.includes('llama3') || m.includes('mistral') || m.includes('qwen'),
          );
          setModel(preferred ?? data.models[0]);
        }
      })
      .catch(() => setStatus({ available: false }));
  }, []);

  // ── Auto-scroll as response streams in ────────────────────────────────────
  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response]);

  // ── Stream repair from Ollama ─────────────────────────────────────────────
  // AbortController stored in a ref so the cleanup can cancel an in-flight stream
  const abortRef = useRef<AbortController | null>(null);

  async function runRepair() {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStreaming(true);
    setResponse('');
    setSaved(null);

    try {
      const res = await fetch('/api/ai/repair', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ feature, model: selectedModel, domHints }),
        signal:  controller.signal,
      });

      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader  = res.body.getReader();
      const decoder = new TextDecoder();
      let   full    = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        full += chunk;
        setResponse(full);
      }
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setResponse(`Error: ${err.message}`);
      }
    } finally {
      setStreaming(false);
    }
  }

  async function saveSelectors() {
    const selectors = extractSelectors(response);
    if (selectors.length === 0) return;

    await fetch('/api/extension-config', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ feature, selectors }),
    });

    setSaved(feature);
  }

  async function resetSelectors(feat: string) {
    await fetch(`/api/extension-config?feature=${feat}`, { method: 'DELETE' });
    setSaved(null);
  }

  // ── Render ────────────────────────────────────────────────────────────────
  const amberText  = 'oklch(0.72 0.14 65)';
  const mutedText  = 'oklch(0.50 0.025 65)';
  const cardBg     = 'oklch(0.12 0.012 55)';
  const borderCol  = 'oklch(0.20 0.010 55)';
  const litBorder  = 'oklch(0.30 0.040 60 / 0.4)';

  if (status === null) {
    return (
      <div style={{ color: mutedText, fontSize: '13px', padding: '12px 0' }}>
        Checking for Ollama…
      </div>
    );
  }

  if (!status.available) {
    return (
      <div
        style={{
          background: cardBg,
          border: `1px solid ${borderCol}`,
          borderRadius: '12px',
          padding: '20px',
        }}
      >
        <p style={{ color: mutedText, fontSize: '13px', lineHeight: '1.6' }}>
          <span style={{ color: amberText, fontWeight: 600 }}>Ollama not detected.</span>
          {' '}Install it to enable AI-assisted selector repair and RSS summarisation.
        </p>
        <pre
          style={{
            marginTop: '12px',
            background: 'oklch(0.09 0.008 55)',
            border: `1px solid ${borderCol}`,
            borderRadius: '8px',
            padding: '10px 14px',
            fontSize: '12px',
            color: 'oklch(0.75 0.020 75)',
            fontFamily: 'var(--font-mono, monospace)',
            overflowX: 'auto',
          }}
        >
          {`# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2          # or: mistral, codellama, qwen2.5-coder`}
        </pre>
        <p style={{ color: mutedText, fontSize: '12px', marginTop: '10px' }}>
          Reload the dashboard after starting Ollama.
        </p>
      </div>
    );
  }

  const parsedSelectors = response ? extractSelectors(response) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Model + feature pickers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '11px', color: mutedText, marginBottom: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Model
          </label>
          <select
            value={selectedModel}
            onChange={(e) => setModel(e.target.value)}
            style={{
              width: '100%',
              background: 'oklch(0.14 0.014 55)',
              border: `1px solid ${borderCol}`,
              borderRadius: '8px',
              padding: '8px 10px',
              fontSize: '13px',
              color: 'oklch(0.88 0.015 75)',
              outline: 'none',
              fontFamily: 'var(--font-mono, monospace)',
            }}
          >
            {status.models.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '11px', color: mutedText, marginBottom: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Broken feature
          </label>
          <select
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            style={{
              width: '100%',
              background: 'oklch(0.14 0.014 55)',
              border: `1px solid ${borderCol}`,
              borderRadius: '8px',
              padding: '8px 10px',
              fontSize: '13px',
              color: 'oklch(0.88 0.015 75)',
              outline: 'none',
            }}
          >
            {FEATURES.map((f) => (
              <option key={f.key} value={f.key}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Optional DOM hints */}
      <div>
        <label style={{ display: 'block', fontSize: '11px', color: mutedText, marginBottom: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          DOM hints <span style={{ textTransform: 'none', letterSpacing: 0, opacity: 0.6 }}>(optional — paste element names from YouTube DevTools)</span>
        </label>
        <textarea
          value={domHints}
          onChange={(e) => setDomHints(e.target.value)}
          rows={3}
          placeholder={'e.g. ytd-rich-shelf-renderer (no [is-shorts] attribute found)\nytd-shorts-lockup-view-model (new element seen 12x on homepage)'}
          style={{
            width: '100%',
            background: 'oklch(0.12 0.010 55)',
            border: `1px solid ${borderCol}`,
            borderRadius: '8px',
            padding: '10px 12px',
            fontSize: '12px',
            color: 'oklch(0.80 0.015 75)',
            resize: 'vertical',
            outline: 'none',
            fontFamily: 'var(--font-mono, monospace)',
            lineHeight: '1.5',
          }}
        />
        <p style={{ fontSize: '11px', color: mutedText, marginTop: '5px' }}>
          Tip: open YouTube → F12 → Console → paste{' '}
          <code style={{ fontFamily: 'var(--font-mono, monospace)', color: amberText }}>
            {'[...new Set([...document.querySelectorAll("*")].map(e=>e.tagName.toLowerCase()))].filter(t=>t.startsWith("ytd")).join(", ")'}
          </code>
        </p>
      </div>

      {/* Action button */}
      <button
        onClick={runRepair}
        disabled={streaming || !selectedModel}
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: streaming ? 'wait' : 'pointer',
          background: streaming ? 'oklch(0.16 0.025 55)' : 'oklch(0.18 0.05 55)',
          border: `1px solid ${streaming ? borderCol : litBorder}`,
          color: streaming ? mutedText : amberText,
          transition: 'all 0.15s',
          alignSelf: 'flex-start',
        }}
      >
        {streaming ? '⟳ Thinking…' : '✦ Diagnose & generate fix'}
      </button>

      {/* Streaming response */}
      {response && (
        <div
          ref={responseRef}
          style={{
            background: 'oklch(0.09 0.008 55)',
            border: `1px solid ${borderCol}`,
            borderRadius: '10px',
            padding: '16px',
            maxHeight: '340px',
            overflowY: 'auto',
          }}
        >
          <pre
            style={{
              margin: 0,
              fontSize: '12px',
              lineHeight: '1.65',
              color: 'oklch(0.82 0.015 75)',
              fontFamily: 'var(--font-mono, monospace)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {response}
            {streaming && <span style={{ color: amberText, animation: 'pulse 1s infinite' }}>▋</span>}
          </pre>
        </div>
      )}

      {/* Save / reset actions */}
      {response && !streaming && parsedSelectors.length > 0 && (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={saveSelectors}
            disabled={saved === feature}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: saved === feature ? 'default' : 'pointer',
              background: saved === feature ? 'oklch(0.16 0.04 55)' : 'oklch(0.20 0.06 55)',
              border: `1px solid ${saved === feature ? litBorder : litBorder}`,
              color: saved === feature ? amberText : amberText,
            }}
          >
            {saved === feature ? '✓ Saved — extension will use these selectors' : `Save ${parsedSelectors.length} selectors to config`}
          </button>

          {saved === feature && (
            <button
              onClick={() => resetSelectors(feature)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                cursor: 'pointer',
                background: 'transparent',
                border: `1px solid ${borderCol}`,
                color: mutedText,
              }}
            >
              Reset to built-in
            </button>
          )}
        </div>
      )}

      {response && !streaming && parsedSelectors.length === 0 && (
        <p style={{ fontSize: '12px', color: mutedText }}>
          No CSS selectors detected in the response. Try rephrasing or adding DOM hints.
        </p>
      )}
    </div>
  );
}
