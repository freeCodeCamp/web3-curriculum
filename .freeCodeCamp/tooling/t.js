import { readEnv, ROOT } from './env.js';

export const LOCALE = await readEnv('.meta').LOCALE;

export async function t(key, args = {}, forceLangToUse) {
  const loc = await readEnv().LOCALE;
  // Get key from ./locales/{locale}/comments.json
  // Read file and parse JSON
  const locale =
    forceLangToUse ?? loc === 'undefined' ? 'english' : loc ?? 'english';
  const comments = import(
    join(ROOT, `.freeCodeCamp/tooling/locales/${locale}/comments.json`),
    {
      assert: { type: 'json' }
    }
  );

  // Get value from JSON
  const value = comments[key];
  // Replace placeholders in value with args
  const result =
    Object.values(args)?.length > 0
      ? value.replace(/\{\{(\w+)\}\}/g, (_, m) => args[m])
      : value;
  // Return value
  return result;
}
