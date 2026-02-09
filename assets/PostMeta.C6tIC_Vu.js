import { a as createAstro, b as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './vendor.9hQ2Fjcw.js';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import utc from 'dayjs/plugin/utc.js';
import { c as config } from './index.x_pSfnCt.js';

dayjs.locale(config.lang);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
function formatDate(date) {
  if (date) {
    const dateFormat = "YYYY-MM-DD";
    return dayjs(date).utc().format(dateFormat);
  } else {
    return "";
  }
}

const $$Astro = createAstro("https://marxchou.com");
const $$PostMeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const { publishedTime, wordCount, readTime, currentSlug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="post-meta post-card__meta">
Posted ${formatDate(publishedTime)}.&nbsp;&nbsp;
<span id="word-count">${wordCount} words.</span>&nbsp;
<span id="read-time">${readTime}.</span>&nbsp;
<span class="waline-pageview-count"${addAttribute(`/article/${currentSlug}/`, "data-path")}>0</span> <span> views.&nbsp;</span> </div>`;
}, "/home/runner/work/zcblog/zcblog/src/components/PostMeta.astro", void 0);

export { $$PostMeta as $ };
