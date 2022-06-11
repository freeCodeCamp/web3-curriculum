import { marked } from "marked";
import Prism from "prismjs";

marked.setOptions({
  highlight: (code, lang: keyof typeof Prism["languages"]) => {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], String(lang));
    } else {
      return code;
    }
  },
});

export function parseMarkdown(markdown: string) {
  return marked.parse(markdown, { gfm: true });
}
