import { b as createComponent, m as maybeRenderHead, g as renderSlot, d as renderTemplate } from './vendor.9hQ2Fjcw.js';

const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="post-card content-box"> <div class="post-card__content"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/runner/work/zcblog/zcblog/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
