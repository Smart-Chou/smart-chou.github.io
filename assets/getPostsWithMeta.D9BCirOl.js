import { statSync, readFileSync } from 'fs';
import path from 'path';
import { marked } from 'marked';
import { JSDOM } from 'jsdom';
import getReadingTime from 'reading-time';

function readMetadata(postId) {
  if (!postId) {
    console.error("Invalid post ID");
    return {
      content: null,
      mtime: null
    };
  }
  let filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "article",
    postId
  );
  const extensions = [".md", ".mdx", ""];
  let fileContent = null;
  let fileStats = null;
  for (const ext of extensions) {
    const tryPath = filePath + ext;
    try {
      fileStats = statSync(tryPath);
      fileContent = readFileSync(tryPath, "utf-8");
      filePath = tryPath;
      break;
    } catch {
      continue;
    }
  }
  return {
    content: fileContent,
    mtime: fileStats?.mtime || null
  };
}
function findSecondDash(text) {
  const dashPattern = /---/g;
  let match;
  let count = 0;
  while ((match = dashPattern.exec(text)) !== null) {
    count++;
    if (count === 2) {
      return match.index;
    }
  }
  return -1;
}

function generateSummary(markdownContent) {
  const excerpt_length = 160;
  const separators = [
    "。",
    "，",
    ".",
    ",",
    "：",
    ":",
    ")",
    "）",
    "!",
    "！",
    "?",
    "？"
  ];
  try {
    let cleanElement = function(element) {
      const children = Array.from(element.children);
      children.forEach((child) => {
        if (!allowedTags.has(child.tagName.toLowerCase())) {
          const textNode = document.createTextNode(
            child.textContent || ""
          );
          child.replaceWith(textNode);
        } else {
          Array.from(child.attributes).forEach((attr) => {
            child.removeAttribute(attr.name);
          });
          cleanElement(child);
        }
      });
    };
    const htmlContent = marked(markdownContent);
    const dom = new JSDOM(`<div>${htmlContent}</div>`);
    const document = dom.window.document;
    const allowedTags = /* @__PURE__ */ new Set([
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "ul",
      "ol",
      "li"
    ]);
    cleanElement(document.body.firstChild);
    const meaningfulElements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6"
    );
    let textContent = "";
    meaningfulElements.forEach((element) => {
      const elementText = element.textContent?.trim() || "";
      if (elementText) {
        textContent += elementText + " ";
      }
    });
    if (!textContent.trim()) {
      textContent = document.body.textContent?.trim() || "";
    }
    const cleanedText = textContent.replace(/\s+/g, " ").trim();
    let output = "";
    let len = 0;
    let i = 0;
    while (i < cleanedText.length && /\s/.test(cleanedText[i])) {
      i++;
    }
    while (len < excerpt_length && i < cleanedText.length) {
      const char = cleanedText[i];
      output += char;
      const codePoint = cleanedText.codePointAt(i);
      len += codePoint && codePoint > 255 ? 2 : 1;
      i++;
    }
    let output_until = output.length;
    for (i = output.length - 1; i >= 0; i--) {
      const char = output[i];
      if (char && separators.includes(char)) {
        output_until = i + 1;
        break;
      }
    }
    let finalExcerpt = output.substring(0, output_until).trim();
    if (finalExcerpt.length < output.length) {
      finalExcerpt += "...";
    }
    return finalExcerpt;
  } catch (error) {
    console.error("Error generating excerpt from markdown:", error);
    const cleanedText = markdownContent.replace(/```[\s\S]*?```/g, "").replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1").replace(/[#*_`~>=]+/g, "").replace(/\s+/g, " ").trim();
    let output = "";
    let len = 0;
    let i = 0;
    while (len < excerpt_length && i < cleanedText.length) {
      const char = cleanedText[i];
      output += char;
      const codePoint = cleanedText.codePointAt(i);
      len += codePoint && codePoint > 255 ? 2 : 1;
      i++;
    }
    let output_until = output.length;
    for (i = output.length - 1; i >= 0; i--) {
      const char = output[i];
      if (char && separators.includes(char)) {
        output_until = i + 1;
        break;
      }
    }
    let finalExcerpt = output.substring(0, output_until).trim();
    if (finalExcerpt.length < output.length) {
      finalExcerpt += "...";
    }
    return finalExcerpt;
  }
}

function calculateStats(content) {
  if (!content) {
    return {
      wordCount: 0,
      readTime: "N/A"
    };
  }
  const readingTimeResult = getReadingTime(content);
  return {
    wordCount: readingTimeResult.words,
    readTime: readingTimeResult.text
  };
}

const postMetaCache = /* @__PURE__ */ new Map();
function getPostsWithMeta(post) {
  if (postMetaCache.has(post.id)) {
    return postMetaCache.get(post.id);
  }
  if (!post.id) {
    console.error("Invalid post ID");
    return {
      wordCount: 0,
      readTime: "N/A",
      modifiedTime: "N/A",
      excerpt: "N/A"
    };
  }
  const { content, mtime } = readMetadata(post.id);
  if (!content || !mtime) {
    console.error(`Error accessing file for post: ${post.id}`);
    return {
      wordCount: 0,
      readTime: "N/A",
      modifiedTime: "N/A",
      excerpt: "N/A"
    };
  }
  const { wordCount, readTime } = calculateStats(content);
  const secondDashIndex = findSecondDash(content);
  let contentForExcerpt = content;
  if (secondDashIndex !== -1) {
    contentForExcerpt = content.substring(secondDashIndex + 3).trim();
  }
  const excerpt = generateSummary(contentForExcerpt);
  const result = {
    wordCount,
    readTime,
    modifiedTime: mtime,
    excerpt
  };
  postMetaCache.set(post.id, result);
  return result;
}

export { getPostsWithMeta as g };
