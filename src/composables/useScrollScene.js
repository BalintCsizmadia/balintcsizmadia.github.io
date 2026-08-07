import { onMounted, onUnmounted, reactive } from 'vue';

/**
 * Single rAF-throttled scroll listener that drives two effects:
 *  - `t` (0..1 over the first `distance` px): the hero name shrink/dock.
 *  - the page-wide `--scroll` CSS var (0..1 over full document): the background
 *    glow drift in main.css.
 * One listener, transform/var writes only — keeps fast scrolling smooth.
 */
export function useScrollScene(distance = 360) {
  const state = reactive({ t: 0, reduced: false, isMobile: false });
  let ticking = false;

  const update = () => {
    const doc = document.documentElement;
    const y = window.scrollY || doc.scrollTop;

    state.t = Math.min(1, Math.max(0, y / distance));

    const max = doc.scrollHeight - doc.clientHeight;
    const ratio = max > 0 ? Math.min(1, y / max) : 0;
    doc.style.setProperty('--scroll', ratio.toFixed(3));

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  const onResize = () => {
    state.isMobile = window.innerWidth < 640;
    onScroll();
  };

  onMounted(() => {
    state.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    state.isMobile = window.innerWidth < 640;
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
  });

  return state;
}
