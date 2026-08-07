import { onMounted, onUnmounted } from 'vue';

/**
 * Adds `.is-visible` to elements matching `selector` as they scroll into view.
 * Elements should carry the `.reveal` class (see main.css) for the transition.
 * No-ops gracefully if IntersectionObserver is unavailable.
 */
export function useReveal(selector = '.reveal') {
  let observer = null;

  onMounted(() => {
    const targets = Array.from(document.querySelectorAll(selector));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  });

  onUnmounted(() => observer?.disconnect());
}
