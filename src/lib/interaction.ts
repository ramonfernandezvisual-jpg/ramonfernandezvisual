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
 * Capa sonora opcional (OFF por defecto). Todo se genera con WebAudio:
 * — micro-click al activar / en CTA
 * — textura ambiental muy sutil que solo suena mientras hay movimiento
 * — variación tonal ligera en zonas de mayor interacción
 * No hay archivos, ni reproducción automática, ni banda sonora continua.
 */
export function useSound() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<Ctx>(null);
  const masterRef = useRef<GainNode | null>(null);
  const padRef = useRef<{
    gain: GainNode;
    filter: BiquadFilterNode;
    oscs: OscillatorNode[];
  } | null>(null);
  const enabledRef = useRef(false);
  const lastToneRef = useRef(0);

  useEffect(() => {
    return () => {
      try {
        padRef.current?.oscs.forEach((o) => o.stop());
      } catch {
        /* noop */
      }
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
        const ctx = new AC();
        ctxRef.current = ctx;
        const master = ctx.createGain();
        master.gain.value = 0.5;
        master.connect(ctx.destination);
        masterRef.current = master;
      }
      if (ctxRef.current.state === "suspended") ctxRef.current.resume().catch(() => {});
      return ctxRef.current;
    } catch {
      return null;
    }
  }, []);

  /** Pad respirado, silencioso por defecto: solo suena si hay movimiento. */
  const ensurePad = useCallback(() => {
    const ctx = ensureCtx();
    const master = masterRef.current;
    if (!ctx || !master || padRef.current) return;
    try {
      const gain = ctx.createGain();
      gain.gain.value = 0.0001;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 700;
      filter.Q.value = 0.6;
      filter.connect(gain).connect(master);

      const freqs = [110, 164.81, 220.5];
      const oscs = freqs.map((f, idx) => {
        const o = ctx.createOscillator();
        o.type = idx === 2 ? "triangle" : "sine";
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.value = idx === 2 ? 0.12 : 0.3;
        o.connect(g).connect(filter);
        o.start();
        return o;
      });
      padRef.current = { gain, filter, oscs };
    } catch {
      /* silencioso */
    }
  }, [ensureCtx]);

  const setEnabledSafe = useCallback(
    (next: boolean) => {
      enabledRef.current = next;
      setEnabled(next);
      if (next) {
        ensureCtx();
        ensurePad();
      } else {
        const ctx = ctxRef.current;
        const pad = padRef.current;
        if (ctx && pad) {
          try {
            pad.gain.gain.cancelScheduledValues(ctx.currentTime);
            pad.gain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.15);
          } catch {
            /* noop */
          }
        }
      }
    },
    [ensureCtx, ensurePad],
  );

  const toggle = useCallback(() => {
    setEnabledSafe(!enabledRef.current);
  }, [setEnabledSafe]);

  /** Micro-click orgánico, breve y suave. */
  const click = useCallback(
    (variant: "soft" | "cta" = "soft") => {
      if (!enabledRef.current) return;
      const ctx = ensureCtx();
      const master = masterRef.current;
      if (!ctx || !master) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = variant === "cta" ? 1800 : 1200;
        osc.type = "sine";
        const f0 = variant === "cta" ? 392 : 294;
        osc.frequency.setValueAtTime(f0, now);
        osc.frequency.exponentialRampToValueAtTime(f0 * 0.55, now + 0.12);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(variant === "cta" ? 0.07 : 0.05, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
        osc.connect(filter).connect(gain).connect(master);
        osc.start(now);
        osc.stop(now + 0.26);
      } catch {
        /* silencioso */
      }
    },
    [ensureCtx],
  );

  /**
   * Intensidad del campo (0..1). Modula la textura ambiental: si no hay
   * movimiento, el volumen cae a silencio.
   */
  const field = useCallback(
    (intensity: number) => {
      if (!enabledRef.current) return;
      const ctx = ctxRef.current;
      const pad = padRef.current;
      if (!ctx || !pad) return;
      const v = Math.max(0, Math.min(1, intensity));
      try {
        const now = ctx.currentTime;
        pad.gain.gain.setTargetAtTime(Math.max(0.0001, v * 0.035), now, 0.25);
        pad.filter.frequency.setTargetAtTime(420 + v * 900, now, 0.3);

        // Variación tonal muy ligera en picos de interacción.
        if (v > 0.55 && now - lastToneRef.current > 1.6) {
          lastToneRef.current = now;
          const master = masterRef.current;
          if (!master) return;
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "sine";
          const notes = [329.63, 392, 440, 493.88];
          o.frequency.value = notes[Math.floor(Math.random() * notes.length)];
          g.gain.setValueAtTime(0.0001, now);
          g.gain.exponentialRampToValueAtTime(0.02, now + 0.25);
          g.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
          o.connect(g).connect(master);
          o.start(now);
          o.stop(now + 1.5);
        }
      } catch {
        /* silencioso */
      }
    },
    [],
  );

  return { enabled, toggle, click, field };
}
