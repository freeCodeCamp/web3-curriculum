import { ConsoleError } from '../types';
import { parseMarkdown } from '../utils';

export const Console = ({ cons }: { cons: ConsoleError[] }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {cons.map(con => (
        <ConsoleElement key={con.testId} {...con} />
      ))}
    </ul>
  );
};

const ConsoleElement = ({ testText, testId, error }: ConsoleError) => {
  const consoleMarkdown = `<details>\n<summary>${testId + 1}) ${parseMarkdown(
    testText
  )}</summary>\n\n\`\`\`json\n${JSON.stringify(
    error,
    null,
    2
  )}\n\`\`\`\n\n</details>`;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: parseMarkdown(consoleMarkdown) }}
    ></div>
  );
};
