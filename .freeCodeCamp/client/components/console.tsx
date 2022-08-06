import { ConsoleError } from '../types';
import { parseMarkdown } from '../utils';

export const Console = ({ cons }: { cons: ConsoleError[] }) => {
  const consoleMarkdown = cons
    .map(({ id, hint, error }) => {
      return `<details>\n<summary>${
        id + 1
      }) ${hint}</summary>\n\n\`\`\`json\n${JSON.stringify(
        error,
        null,
        2
      )}\n\`\`\`\n\n</details>`;
    })
    .join('\n\n');
  return (
    <div
      dangerouslySetInnerHTML={{ __html: parseMarkdown(consoleMarkdown) }}
    ></div>
  );
};
