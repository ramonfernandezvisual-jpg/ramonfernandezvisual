import { useCallback, useEffect, useRef, useState } from "react";

/** Vibración muy breve, solo si el dispositivo la soporta. */
export function haptic(ms = 8) {
  try {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(ms);
    }
  } catch {
    /* silencioso */
  }
}

type Ctx = AudioContext | null;

/**
 * Capa sonora opcional (OFF por defecto). Genera un micro-click orgánico
 * mediante WebAudio, sin archivos ni reproducción automática.
 */
export function useSound() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<Ctx>(null);

  useEffect(() => {
    return () => {
      ctxRef.current?.close().catch(() => {});
      ctxRef.current = null;
    };
  }, []);

  const ensureCtx = useCallback((): Ctx => {
    if (typeof window === "undefined") return null;
    try {
      if (!ctxRef.current) {
        const AC =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext;
        if (!AC) return null;
        ctxRef.current = new AC();
      }
      if (ctxRef.current.state === "suspended") ctxRef.current.resume().catch(() => {});
      return ctxRef.current;
    } catch {
      return null;
    }
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) ensureCtx();
      return next;
    });
  }, [ensureCtx]);

  /** Micro-click textural muy corto. */
  const click = useCallback(() => {
    if (!enabled) return;
    const ctx = ensureCtx();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1400;
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.05, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      osc.connect(filter).connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      /* silencioso */
    }
  }, [enabled, ensureCtx]);

  return { enabled, toggle, click };
}
